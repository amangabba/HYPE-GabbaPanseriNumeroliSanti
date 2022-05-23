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
        const result = await models.PointOfInterest.findOne({ where: { id } })
        return res.json(result)
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
                description: element.description,
                image_links: element.image_links
            })
        }
        return res.json(filtered)
    })

    app.get('/services', async (req, res) => {
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

    app.get('/services/:id', async (req, res) => {
        const id = +req.params.id
        const result = await models.ServiceType.findOne({
            where: { id },
            include: models.Service
        })
        return res.json(result)
    })

    app.get('/events/:id', async (req, res) => {
        const id = +req.params.id
        const result = await models.Event.findOne({ where: { id } })
        return res.json(result)
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
                end_date: element.end_date
            })
        }
        return res.json(filtered)
    })
}

runMainApi()

export default app
