const pg = require('pg')
const { Sequelize, DataTypes } = require('sequelize')

/**
 * The database object
 * @type {Sequelize}
 */
let database

// Check if we are in production or development environment and initialize the database object accordingly
if (process.env.NODE_ENV === 'production') {
    pg.defaults.ssl = true
    database = new Sequelize(process.env.DATABASE_URL, {
        ssl: true,
        dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
        logging: false
    })
} else {
    database = new Sequelize(
        'postgres://postgres:postgres@localhost:5432/hyp',
        {
            logging: false
        }
    )
}

/**
 * Initializes the connection to the database and creates the ORM models
 * @param dropTables if true drops all tables and recreates them
 * @returns {Promise<{PointOfInterest: Model, ServiceType: Model, Itinerary: Model, Event: Model, Service: Model, Involved: Model}>} object containing ORM models for the database tables
 */
async function initializeDatabaseConnection(dropTables = false) {
    await database.authenticate()

    // Define tables schema for the database
    const PointOfInterest = database.define('point_of_interest', {
        name: {
            type: DataTypes.STRING,
            unique: true
        },
        type: DataTypes.STRING,
        visit_info: DataTypes.STRING,
        address: DataTypes.STRING,
        description: DataTypes.STRING,
        image_links: DataTypes.ARRAY(DataTypes.STRING),
        latitude: DataTypes.DOUBLE,
        longitude: DataTypes.DOUBLE
    })
    const Event = database.define('event', {
        name: {
            type: DataTypes.STRING,
            unique: 'name_date'
        },
        practical_info: DataTypes.STRING,
        description: DataTypes.STRING,
        address: DataTypes.STRING,
        image_links: DataTypes.ARRAY(DataTypes.STRING),
        season: DataTypes.ENUM('Summer', 'Winter'),
        start_date: {
            type: DataTypes.DATEONLY,
            unique: 'name_date'
        },
        end_date: DataTypes.DATEONLY
    })
    const Itinerary = database.define('itinerary', {
        title: {
            type: DataTypes.STRING,
            unique: 'title_duration'
        },
        duration: {
            type: DataTypes.INTEGER,
            unique: 'title_duration'
        },
        description: DataTypes.STRING,
        map_link: DataTypes.STRING
    })
    const ServiceType = database.define('service_type', {
        type: {
            type: DataTypes.STRING,
            unique: true
        },
        cover_link: DataTypes.STRING
    })
    const Service = database.define('service', {
        name: {
            type: DataTypes.STRING,
            unique: true
        },
        address: DataTypes.STRING,
        opening_hours: DataTypes.JSON
    })

    // Define relationship for the database
    PointOfInterest.hasMany(Event)
    Event.belongsTo(PointOfInterest)

    ServiceType.hasMany(Service, { onDelete: 'CASCADE' })
    Service.belongsTo(ServiceType)

    const Involved = database.define('involved', {
        number: DataTypes.INTEGER
    })
    Itinerary.belongsToMany(PointOfInterest, { through: Involved })
    PointOfInterest.belongsToMany(Itinerary, { through: Involved })

    await database.sync({ force: dropTables })

    return {
        PointOfInterest,
        Event,
        Itinerary,
        ServiceType,
        Service,
        Involved
    }
}

module.exports = { database, initializeDatabaseConnection }
