const express = require('express')
const app = express()
const { initializeDatabaseConnection } = require('./database')

// With this line, our server will know how to parse any incoming request
// that contains some JSON in the body
app.use(express.json())

async function runMainApi() {
    const models = await initializeDatabaseConnection()

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
        const filteredItineraries = []
        const correlatedItineraries = result.itineraries
        for (const itin of correlatedItineraries) {
            filteredItineraries.push({
                id: itin.id,
                title: itin.title,
                map_link: itin.map_link
            })
        }
        const filteredEvents = []
        const correlatedEvents = await models.Event.findAll({
            where: {pointOfInterestId: id}
        })
        for (const event of correlatedEvents){
            filteredEvents.push({
                id: event.id,
                name: event.name,
                address: event.address,
                image_links: event.image_links,
                season: event.season,
                start_date: event.start_date,
                end_date: event.end_date
            })
        }
        console.log(filteredEvents)
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
        filteredItineraries.sort((a, b) => a.number - b.number)
        filteredEvents.sort((a, b) => a.number - b.number)
        // filteredCorrelatedPOIs.sort((a, b) => a.number - b.number)
        return res.json({
            id: result.id,
            name: result.name,
            type: result.type,
            visit_info: result.visit_info,
            address: result.address,
            description: result.description,
            image_links: result.image_links,
            correlated_itineraries: filteredItineraries,
            correlated_events: filteredEvents
            // correlated_pois: filteredCorrelatedPOIs
        })
    })

    // ToDo: qui sicuramente posso cancellare qualcosa
    app.get('/pois', async (req, res) => {
        const result = await models.PointOfInterest.findAll({
            include: [
                models.Itinerary,
                models.Event
                // models.PointOfInterest
            ]
        })
        const filtered = []
        for (const element of result) {
            const filteredItineraries = []
            const itineraries = element.itineraries
            for (const itin of itineraries) {
                filteredItineraries.push({
                    id: itin.id,
                    title: itin.title,
                    map_link: itin.map_link
                })
            }
            const filteredEvents = []
            const events = element.events
            for (const event of events) {
                filteredEvents.push({
                    id: event.id,
                    name: event.name,
                    address: event.address,
                    image_links: event.image_links,
                    season: event.season,
                    start_date: event.start_date,
                    end_date: event.end_date
                })
            }
            /* const filteredCorrelatedPOIs = []
            const pois = element.point_of_interests
            for (const poi of pois) {
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
            filteredItineraries.sort((a, b) => a.number - b.number)
            filteredEvents.sort((a, b) => a.number - b.number)
            // filteredCorrelatedPOIs.sort((a, b) => a.number - b.number)
            filtered.push({
                id: element.id,
                name: element.name,
                type: element.type,
                visit_info: element.visit_info,
                address: element.address,
                description: element.description,
                image_links: element.image_links,
                correlated_itineraries: filteredItineraries,
                correlated_events: filteredEvents,
                //correlated_pois: filteredCorrelatedPOIs
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
            order: [['id', 'ASC']]
        })
        return res.json({
            serviceType,
            otherServiceTypes
        })
    })

    app.get('/events/:id', async (req, res) => {
        const id = +req.params.id
        const result = await models.Event.findOne({
            where: { id },
            include: models.PointOfInterest
        })
        const correlatedPOI = []
        correlatedPOI.push(result.point_of_interests)
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
            correlated_poi: correlatedPOI
        })
    })

    app.get('/events', async (req, res) => {
        const result = await models.Event.findAll()
        const filtered = []
        for (const element of result) {
            const correlatedPOI = []
            correlatedPOI.push(result.point_of_interests)
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
                correlated_poi: correlatedPOI
            })
        }
        return res.json(filtered)
    })
}

runMainApi()

export default app
