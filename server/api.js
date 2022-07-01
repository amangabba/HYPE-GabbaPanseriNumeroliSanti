import {DATEONLY, Op} from 'sequelize'

const express = require('express')
const app = express()
const { initializeDatabaseConnection } = require('./database')

// With this line, our server will know how to parse any incoming request
// that contains some JSON in the body
app.use(express.json())

// Function to format DATEONLY in a human-friendly form
function dateToString (date) {
    const event = new Date(date);
    const dateElems = event.toDateString().split(' ').slice(1);
    return dateElems[1] + ' ' + dateElems[0] + ' ' + dateElems[2]
}

async function runMainApi() {
    const models = await initializeDatabaseConnection()

    app.get('/itineraries', async (req, res) => {
        const result = await models.Itinerary.findAll({
            include: models.PointOfInterest
        })
        const filtered = []
        for (const element of result) {
            const filteredPOIs = []
            const pois = element.point_of_interests
            for (const poi of pois) {
                filteredPOIs.push({
                    id: poi.id,
                    name: poi.name,
                    number: poi.involved.number,
                    latitude: poi.latitude,
                    longitude: poi.longitude
                })
            }
            filteredPOIs.sort((a, b) => a.number - b.number)
            filtered.push({
                id: element.id,
                title: element.title,
                duration: element.duration,
                description: element.description,
                map_link: element.map_link,
                poi_list: filteredPOIs
            })
        }
        return res.json(filtered)
    })

    app.get('/itineraries/:id', async (req, res) => {
        const id = +req.params.id
        const result = await models.Itinerary.findOne({
            where: { id },
            include: models.PointOfInterest
        })
        const filteredPOIs = []
        const pois = result.point_of_interests
        for (const poi of pois) {
            filteredPOIs.push({
                id: poi.id,
                name: poi.name,
                type: poi.type,
                visit_info: poi.visit_info,
                address: poi.address,
                description: poi.description,
                number: poi.involved.number,
                image_links: poi.image_links,
                latitude: poi.latitude,
                longitude: poi.longitude,
                lat_long: [poi.latitude, poi.longitude]
            })
        }
        filteredPOIs.sort((a, b) => a.number - b.number)
        return res.json({
            id: result.id,
            title: result.title,
            duration: result.duration,
            description: result.description,
            map_link: result.map_link,
            poi_list: filteredPOIs
        })
    })

    app.get('/featured-itineraries', async (req, res) => {
        const limit = req.params.limit ? req.params.limit : 5
        const result = await models.Itinerary.findAll({
            attributes: ['id', 'title', 'map_link'],
            limit
        })

        const filtered = []
        for (const element of result) {
            filtered.push({
                id: element.id,
                title: element.title,
                map_link: element.map_link
            })
        }
        return res.json(filtered)
    })

    app.get('/pois/:id', async (req, res) => {
        const id = +req.params.id
        const result = await models.PointOfInterest.findOne({
            where: { id },
            include: [
                models.Itinerary,
                models.Event
                // models.PointOfInterest
            ]
        })
        const itineraryIDs = []
        const itineraryNames = []
        const itineraryFirstImages = []
        const correlatedItineraries = result.itineraries
        for (const itin of correlatedItineraries) {
            itineraryIDs.push(itin.id)
            itineraryNames.push(itin.title)
            itineraryFirstImages.push(itin.map_link)
        }
        const eventIDs = []
        const eventNames = []
        const eventFirstImages = []
        const correlatedEvents = await models.Event.findAll({
            where: { pointOfInterestId: id }
        })
        for (const event of correlatedEvents) {
            eventIDs.push(event.id)
            eventNames.push(event.title)
            eventFirstImages.push(event.image_links[0])
        }
        /*
        const filteredCorrelatedPOIs = []
        const correlatedPOIs = result.point_of_interests
        for (const poi in correlatedPOIs){
            filteredCorrelatedPOIs.push({
                id: poi.id,
                name: poi.name,
                type: poi.type,
                visit_info: poi.visit_info,
                address: poi.address,
                description: poi.description,
                image_links: poi.image_links
            })
        }
         */
        itineraryIDs.sort((a, b) => a.number - b.number)
        itineraryNames.sort((a, b) => a.number - b.number)
        itineraryFirstImages.sort((a, b) => a.number - b.number)
        eventIDs.sort((a, b) => a.number - b.number)
        eventNames.sort((a, b) => a.number - b.number)
        eventFirstImages.sort((a, b) => a.number - b.number)
        // filteredCorrelatedPOIs.sort((a, b) => a.number - b.number)
        return res.json({
            id: result.id,
            name: result.name,
            type: result.type,
            visit_info: result.visit_info,
            address: result.address,
            description: result.description,
            image_links: result.image_links,
            correlated_itinerary_IDs: itineraryIDs,
            correlated_itinerary_names: itineraryNames,
            correlated_itinerary_images: itineraryFirstImages,
            correlated_event_IDs: eventIDs,
            correlated_event_names: eventNames,
            correlated_event_images: eventFirstImages
            // correlated_pois: filteredCorrelatedPOIs
        })
    })

    app.get('/pois', async (req, res) => {
        const result = await models.PointOfInterest.findAll()
        const filtered = []
        for (const element of result) {
            filtered.push({
                id: element.id,
                name: element.name,
                type: element.type,
                visit_info: element.visit_info,
                address: element.address,
                description: element.description,
                image_links: element.image_links
            })
        }
        return res.json(filtered)
    })

    app.get('/service-types', async (req, res) => {
        const result = await models.ServiceType.findAll()
        const list = []
        for (const element of result) {
            list.push({
                id: element.id,
                type: element.type,
                coverLink: element.cover_link
            })
        }
        return res.json(list)
    })

    app.get('/service-types/:id', async (req, res) => {
        const id = +req.params.id
        const serviceType = await models.ServiceType.findOne({
            where: { id },
            include: models.Service
        })
        const otherServiceTypes = await models.ServiceType.findAll({
            where: {
                id: { [Op.ne]: id }
            }
        })
        return res.json({
            serviceType,
            otherServiceTypes
        })
    })

    app.get('/events/:id', async (req, res) => {
        const { Op } = require('sequelize')
        const id = +req.params.id
        const result = await models.Event.findOne({
            where: { id },
            include: models.PointOfInterest
        })
        const correlatedEvents = await models.Event.findAll({
            where: {
                id: { [Op.not]: result.id },
                pointOfInterestId: result.pointOfInterestId,
                start_date: { [Op.gte]: result.start_date }
            }
        })
        const correlatedPOI = await models.PointOfInterest.findOne({
            where: {id: result.pointOfInterestId}
        })
        const eventIDs = []
        const eventNames = []
        const eventFirstImages = []
        for (const event of correlatedEvents) {
            eventIDs.push(event.id)
            eventNames.push(event.name)
            eventFirstImages.push(event.image_links[0])
        }
        eventIDs.sort((a, b) => a.number - b.number)
        eventNames.sort((a, b) => a.number - b.number)
        eventFirstImages.sort((a, b) => a.number - b.number)
        return res.json({
            id: result.id,
            name: result.name,
            address: result.address,
            practical_info: result.practical_info,
            description: result.description,
            image_links: result.image_links,
            season: result.season,
            start_date: result.start_date,
            end_date: result.end_date,
            correlated_poi: correlatedPOI,
            start_date_string: dateToString(result.start_date),
            end_date_string: dateToString(result.end_date),
            correlated_event_IDs: eventIDs,
            correlated_event_names: eventNames,
            correlated_event_images: eventFirstImages
        })
    })

    app.get('/events', async (req, res) => {
        const result = await models.Event.findAll()
        const filtered = []
        for (const element of result) {
            filtered.push({
                id: element.id,
                name: element.name,
                address: element.address,
                practical_info: element.practical_info,
                description: element.description,
                image_links: element.image_links,
                season: element.season,
                start_date: element.start_date,
                end_date: element.end_date,
                start_date_string: dateToString(element.start_date),
                end_date_string: dateToString(element.end_date)
            })
        }
        return res.json(filtered)
    })

    app.get('/next-events', async (req, res) => {
        const limit = req.params.limit ? req.params.limit : 5
        const result = await models.Event.findAll({
            attributes: ['id', 'name', 'image_links'],
            where : {
                start_date: {
                    [Op.gt]: new DATEONLY()
                }
            },
            limit,
            order: [['start_date', 'DESC']]
        })

        const filtered = []
        for (const element of result) {
            filtered.push({
                id: element.id,
                name: element.name,
                image_links: element.image_links
            })
        }
        return res.json(filtered)
    })
}

runMainApi()

export default app
