const { initializeDatabaseConnection } = require('./database')

/**
 * Base URL of the website, based on environment variable to tell if we are or not in production
 * @type {string}
 */
const baseUrl =
    process.env.NODE_ENV === 'production'
        ? 'https://lambrate-hypermedia.herokuapp.com/'
        : 'http://localhost:3000'

/**
 * Gets the URL of an image served by the application
 * @param imageName the name and extension of the image that is present in the static/images folder
 * @returns {string}
 */
function getImageUrl(imageName) {
    return baseUrl + '/images/' + imageName
}

/**
 * Insert data into the DB tables
 * @param models object containing the ORM models for the DB tables
 */
function insertData(models) {
    const itineraryList = [
        {
            title: 'Itinerary 1',
            duration: '141',
            description: 'Details about itinerary 1',
            map_link: 'https://www.ricksteves.com/italy-itinerary.jpg',
        },
        {
            title: 'Itinerary 2',
            duration: '142',
            description: 'Details about itinerary 2',
            map_link: 'https://www.ricksteves.com/italy-itinerary.jpg',
        },
        {
            title: 'Itinerary 3',
            duration: '143',
            description: 'Details about itinerary 3',
            map_link: 'https://www.ricksteves.com/italy-itinerary.jpg',
        },
        {
            title: 'Itinerary 4',
            duration: '144',
            description: 'Details about itinerary 4',
            map_link: 'https://www.ricksteves.com/italy-itinerary.jpg',
        },
    ]

    const poiList = [
        {
            name: 'POI 1',
            type: 'Type1',
            visit_info: 'Always open',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut ' +
                'labore et dolore magna aliqua.',
            image_links: ['https://www.ricksteves.com/italy-itinerary.jpg', 'https://www.ricksteves.com/italy-itinerary.jpg'],
        },
        {
            name: 'POI 2',
            type: 'Type2',
            visit_info: 'Just on Sunday',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut ' +
                'labore et dolore magna aliqua.',
            image_links: ['https://www.ricksteves.com/italy-itinerary.jpg', 'https://www.ricksteves.com/italy-itinerary.jpg']
        },
        {
            name: 'POI 3',
            type: 'Type3',
            visit_info: 'Closed forever',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut ' +
                'labore et dolore magna aliqua.',
            image_links: ['https://www.ricksteves.com/italy-itinerary.jpg', 'https://www.ricksteves.com/italy-itinerary.jpg']
        },
        {
            name: 'POI 4',
            type: 'TYPE 1',
            visit_info: 'Visit Info 1',
            description: 'Details about Visit 1',
            image_links: ['https://www.ricksteves.com/italy-itinerary.jpg', 'https://www.ricksteves.com/italy-itinerary.jpg'],
        },
        {
            name: 'POI 5',
            type: 'TYPE 2',
            visit_info: 'Visit Info 2',
            description: 'Details about Visit 2',
            image_links: ['https://www.ricksteves.com/italy-itinerary.jpg', 'https://www.ricksteves.com/italy-itinerary.jpg'],
        },
        {
            name: 'POI 6',
            type: 'TYPE 3',
            visit_info: 'Visit Info 3',
            description: 'Details about Visit 3',
            image_links: ['https://www.ricksteves.com/italy-itinerary.jpg', 'https://www.ricksteves.com/italy-itinerary.jpg'],
        },
    ]

    const involvedList = [
        {
            number: 1,
            itineraryId: 1,
            pointOfInterestId: 1,
        },
        {
            number: 2,
            itineraryId: 1,
            pointOfInterestId: 2,
        },
        {
            number: 3,
            itineraryId: 1,
            pointOfInterestId: 3,
        },
    ]

    const serviceList = [
        {
            type: 'Hospital',
            cover_link: getImageUrl('hospital_cover.webp'),
            services: [
                {
                    name: 'Hospital1',
                    address: '2550 Griffin Street',
                    opening_hours: {
                        Sunday: [
                            [9.3, 12.0],
                            [15.3, 22.0],
                        ],
                        Monday: [
                            [8.3, 12.0],
                            [15.3, 19.0],
                        ],
                        Tuesday: [
                            [8.3, 12.0],
                            [15.3, 19.0],
                        ],
                        Wednesday: [
                            [8.3, 12.0],
                            [15.3, 19.0],
                        ],
                        Thursday: [
                            [8.3, 12.0],
                            [15.3, 19.0],
                        ],
                        Friday: [[8.3, 11.3]],
                        Saturday: [[]],
                    },
                },
                {
                    name: 'Hospital2',
                    address: '2197 Kildeer Drive',
                    opening_hours: {
                        Sunday: [
                            [9.3, 12.0],
                            [15.3, 22.0],
                        ],
                        Monday: [
                            [8.3, 12.0],
                            [15.3, 19.0],
                        ],
                        Tuesday: [
                            [8.3, 12.0],
                            [15.3, 19.0],
                        ],
                        Wednesday: [
                            [8.3, 12.0],
                            [15.3, 19.0],
                        ],
                        Thursday: [
                            [8.3, 12.0],
                            [15.3, 19.0],
                        ],
                        Friday: [[8.3, 11.3]],
                        Saturday: [[]],
                    },
                },
            ],
        },
        {
            type: 'Pharmacy',
            cover_link: getImageUrl('pharmacy_cover.webp'),
            services: [
                {
                    name: 'Pharmacy1',
                    address: '2550 Griffin Street',
                    opening_hours: {
                        Sunday: [
                            [9.3, 12.0],
                            [15.3, 22.0],
                        ],
                        Monday: [
                            [8.3, 12.0],
                            [15.3, 19.0],
                        ],
                        Tuesday: [
                            [8.3, 12.0],
                            [15.3, 19.0],
                        ],
                        Wednesday: [
                            [8.3, 12.0],
                            [15.3, 19.0],
                        ],
                        Thursday: [
                            [8.3, 12.0],
                            [15.3, 19.0],
                        ],
                        Friday: [[8.3, 11.3]],
                        Saturday: [[]],
                    },
                },
                {
                    name: 'Pharmacy2',
                    address: '2197 Kildeer Drive',
                    opening_hours: {
                        Sunday: [
                            [9.3, 12.0],
                            [15.3, 22.0],
                        ],
                        Monday: [
                            [8.3, 12.0],
                            [15.3, 19.0],
                        ],
                        Tuesday: [
                            [8.3, 12.0],
                            [15.3, 19.0],
                        ],
                        Wednesday: [
                            [8.3, 12.0],
                            [15.3, 19.0],
                        ],
                        Thursday: [
                            [8.3, 12.0],
                            [15.3, 19.0],
                        ],
                        Friday: [[8.3, 11.3]],
                        Saturday: [[]],
                    },
                },
            ],
        },
    ]

    models.Itinerary.bulkCreate(itineraryList).then(() => process.stdout.write('Itineraries created'))
    models.PointOfInterest.bulkCreate(poiList).then(() => process.stdout.write('POIs created'))
    models.Involved.bulkCreate(involvedList).then(() => process.stdout.write('Involved relationships created'))
    models.ServiceType.bulkCreate(serviceList, {
        include: [models.Service],
    }).then(() => process.stdout.write('Service Types created'))
}

initializeDatabaseConnection(true).then(models => insertData(models))
