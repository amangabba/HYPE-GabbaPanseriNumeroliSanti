const express = require('express')
const app = express()
const { Sequelize, DataTypes } = require('sequelize')
const initialize = require('./initialize').default

// With this line, our server will know how to parse any incoming request
// that contains some JSON in the body
app.use(express.json())

let database
if (process.env.NODE_ENV === 'production') {
    const pg = require('pg')
    pg.defaults.ssl = true
    database = new Sequelize(process.env.DATABASE_URL, {
        ssl: true,
        dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
    })
} else {
    database = new Sequelize('postgres://postgres:postgres@localhost:5432/hyp')
}

// Function that will initialize the connection to the database
async function initializeDatabaseConnection() {
    await database.authenticate()

    // Define tables schema for the database
    const PointOfInterest = database.define('point_of_interest', {
        name: {
            type: DataTypes.STRING,
            unique: true,
        },
        type: DataTypes.STRING,
        visit_info: DataTypes.STRING,
        description: DataTypes.STRING,
        image_links: DataTypes.ARRAY(DataTypes.STRING),
    })
    const Event = database.define('event', {
        name: {
            type: DataTypes.STRING,
            unique: 'name_date',
        },
        practical_info: DataTypes.STRING,
        description: DataTypes.STRING,
        address: DataTypes.STRING,
        image_links: DataTypes.ARRAY(DataTypes.STRING),
        season: DataTypes.ENUM('Summer', 'Winter'),
        start_date: {
            type: DataTypes.DATEONLY,
            unique: 'name_date',
        },
        end_date: DataTypes.DATEONLY,
    })
    const Itinerary = database.define('itinerary', {
        title: {
            type: DataTypes.STRING,
            unique: 'title_duration',
        },
        duration: {
            type: DataTypes.INTEGER,
            unique: 'title_duration',
        },
        description: DataTypes.STRING,
        map_link: DataTypes.STRING,
    })
    const ServiceType = database.define('service_type', {
        type: {
            type: DataTypes.STRING,
            unique: true,
        },
        cover_link: DataTypes.STRING,
    })
    const Service = database.define('service', {
        name: {
            type: DataTypes.STRING,
            unique: true,
        },
        address: DataTypes.STRING,
        opening_hours: DataTypes.JSON,
    })

    // Define relationship for the database
    PointOfInterest.hasMany(Event)
    Event.belongsTo(PointOfInterest)

    ServiceType.hasMany(Service, { onDelete: 'CASCADE' })
    Service.belongsTo(ServiceType)

    const Involved = database.define('involved', {
        /*
        itinerary_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Itinerary,
                key: 'id',
            },
        },
        point_of_interest_id: {
            type: DataTypes.INTEGER,
            references: {
                model: PointOfInterest,
                key: 'id',
            },
        },
         */
        number: DataTypes.INTEGER,
    })
    Itinerary.belongsToMany(PointOfInterest, { through: Involved })
    PointOfInterest.belongsToMany(Itinerary, { through: Involved })

    // TODO: Remove this in production
    await database.sync({ force: true })

    return {
        PointOfInterest,
        Event,
        Itinerary,
        ServiceType,
        Service,
        Involved
    }
}

// const pageContentObject = {
//     index: {
//         title: "Homepage",
//         image: "https://fs.i3lab.group/hypermedia/images/index.jpeg",
//         description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tincidunt elit, in finibus elit. Aliquam nec posuere sem, at faucibus erat. Suspendisse iaculis lorem id odio placerat bibendum. Suspendisse potenti. Sed quis efficitur erat. Pellentesque non velit ipsum. Maecenas finibus felis a magna auctor finibus. Mauris tincidunt nibh sit amet ante consectetur, non cursus elit feugiat.
//         Integer vitae elit at nunc lacinia egestas. Etiam nec sagittis lorem. Phasellus consectetur mauris eget neque posuere, vitae sagittis massa congue. Etiam vitae eleifend odio, sit amet tempus ex. Ut semper feugiat erat, id consequat elit volutpat sed. Curabitur vel arcu at risus vehicula blandit in ut nunc. In nec pellentesque tellus. Maecenas vitae purus lacinia, tristique elit vitae, interdum est. Ut feugiat nulla et vestibulum efficitur. Suspendisse potenti. Duis ex dolor, vestibulum a leo eu, dapibus elementum ipsum. Curabitur euismod rhoncus nulla ac interdum. Mauris vulputate viverra scelerisque. Mauris ullamcorper tempus eros.`
//     },
//     about: {
//         title: "About",
//         image: "https://fs.i3lab.group/hypermedia/images/about.jpeg",
//         description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tincidunt elit, in finibus elit. Aliquam nec posuere sem, at faucibus erat. Suspendisse iaculis lorem id odio placerat bibendum. Suspendisse potenti. Sed quis efficitur erat. Pellentesque non velit ipsum. Maecenas finibus felis a magna auctor finibus. Mauris tincidunt nibh sit amet ante consectetur, non cursus elit feugiat.
//         Integer vitae elit at nunc lacinia egestas. Etiam nec sagittis lorem. Phasellus consectetur mauris eget neque posuere, vitae sagittis massa congue. Etiam vitae eleifend odio, sit amet tempus ex. Ut semper feugiat erat, id consequat elit volutpat sed. Curabitur vel arcu at risus vehicula blandit in ut nunc. In nec pellentesque tellus. Maecenas vitae purus lacinia, tristique elit vitae, interdum est. Ut feugiat nulla et vestibulum efficitur. Suspendisse potenti. Duis ex dolor, vestibulum a leo eu, dapibus elementum ipsum. Curabitur euismod rhoncus nulla ac interdum. Mauris vulputate viverra scelerisque. Mauris ullamcorper tempus eros.`
//     },
// }

async function runMainApi() {
    const models = await initializeDatabaseConnection()
    await initialize(models)

    app.get('/itineraries/:id', async (req, res) => {
        const id = +req.params.id
        const result = await models.Itinerary.findOne({ where: { id } })
        return res.json(result)
    })

    // TODO: Fix INVOLVEDS table
    app.get('/itineraries', async(req, res) => {
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
                    number: poi.involved.number
                })
            }
            filteredPOIs.sort((a,b) => a.number - b.number)
            filtered.push({
                id: element.id,
                title: element.title,
                duration: element.duration,
                description: element.description,
                map_link: element.map_link,
                // TODO: Improve this code
                poi_list: filteredPOIs,
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
                visit_information: element.visit_information,
                description: element.description,
                poi_link: element.poi_link,
            })
        }
        return res.json(filtered)
    })

    // TODO: Fix INVOLVEDS table
/*
    app.get('/itineraries', async(req, res) => {
        const result = models.Itinerary.findAll({
            include: [{
                model: models.PointOfInterest,
                through: {
                    model:models.Involved
                    attributes: ['name', 'type']
                }
            }]
        })
        return result
    })
    */

    app.get('/services', async (req, res) => {
        const result = await models.ServiceType.findAll()
        const list = []
        for (const element of result) {
            list.push({
                id: element.id,
                type: element.type,
                cover_link: element.cover_link,
            })
        }
        return res.json(list)
    })

    app.get('/services/:id', async (req, res) => {
        const id = +req.params.id
        const result = await models.ServiceType.findOne({
            where: { id },
            include: models.Service,
        })
        return res.json(result)
    })

    // TODO: Fix INVOLVEDS table
    /*
        app.get('/itineraries', async(req, res) => {
            const result = models.Itinerary.findAll({
                include: [{
                    model: models.PointOfInterest,
                    through: {
                        model:models.Involved
                        attributes: ['name', 'type']
                    }
                }]
            })
            return result
        })
        */
    // app.get('/page-info/:topic', (req, res) => {
    //     const {topic} = req.params
    //     const result = pageContentObject[topic]
    //     return res.json(result)
    // })
    //
    // app.get('/cats/:id', async (req, res) => {
    //     const id = +req.params.id
    //     const result = await models.Cat.findOne({where: {id}, include: [{model: models.Location}]})
    //     return res.json(result)
    // })
    //
    // // HTTP GET api that returns all the cats in our actual database
    // app.get("/cats", async (req, res) => {
    //     const result = await models.Cat.findAll()
    //     const filtered = []
    //     for (const element of result) {
    //         filtered.push({
    //             name: element.name,
    //             img: element.img,
    //             breed: element.breed,
    //             id: element.id,
    //         })
    //     }
    //     return res.json(filtered)
    // })
    //
    // // HTTP POST api, that will push (and therefore create) a new element in
    // // our actual database
    // app.post("/cats", async (req, res) => {
    //     const {body} = req
    //     await models.Cat.create(body);
    //     return res.sendStatus(200)
    // })
}

runMainApi()

export default app
