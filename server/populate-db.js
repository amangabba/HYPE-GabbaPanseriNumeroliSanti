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
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum luctus eget magna euismod tempor. Sed non lacus nec urna tincidunt suscipit a vel sem.',
            map_link: 'https://www.ricksteves.com/italy-itinerary.jpg'
        },
        {
            title: 'Itinerary 2',
            duration: '142',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum luctus eget magna euismod tempor. Sed non lacus nec urna tincidunt suscipit a vel sem.',
            map_link: 'https://www.ricksteves.com/italy-itinerary.jpg'
        },
        {
            title: 'Itinerary 3',
            duration: '143',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum luctus eget magna euismod tempor. Sed non lacus nec urna tincidunt suscipit a vel sem.',
            map_link: 'https://www.ricksteves.com/italy-itinerary.jpg'
        },
        {
            title: 'Itinerary 4',
            duration: '144',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum luctus eget magna euismod tempor. Sed non lacus nec urna tincidunt suscipit a vel sem.',
            map_link: 'https://www.ricksteves.com/italy-itinerary.jpg'
        }
    ]
    const eventList = [
        {
            name: 'Event 1',
            practical_info: 'practical info about event 1',
            description: 'description of event 1',
            address: 'event 1 address',
            image_links: [
                'https://www.wikieventi.it/news/wp-content/uploads/2016/09/Pala-Alpitour-Torino-come-arrivare-Madonna-678x381.jpg',
                'https://www.wikieventi.it/news/wp-content/uploads/2016/09/Pala-Alpitour-Torino-come-arrivare-Madonna-678x381.jpg'
            ],
            season: 'Summer',
            start_date: '2022-10-12',
            end_date: '2022-10-12'
        },
        {
            name: 'event 2',
            practical_info: 'practical_info about event 2',
            description: 'description of event 2',
            address: 'event 2 address',
            image_links: [
                'https://www.wikieventi.it/news/wp-content/uploads/2016/09/Pala-Alpitour-Torino-come-arrivare-Madonna-678x381.jpg',
                'https://www.wikieventi.it/news/wp-content/uploads/2016/09/Pala-Alpitour-Torino-come-arrivare-Madonna-678x381.jpg'
            ],
            season: 'Winter',
            start_date: '2022-10-12',
            end_date: '2022-10-12'
        },
        {
            name: 'event 3',
            practical_info: 'practical_info about event 3',
            description: 'description of event 3',
            address: 'event 3 address',
            image_links: [
                'https://www.wikieventi.it/news/wp-content/uploads/2016/09/Pala-Alpitour-Torino-come-arrivare-Madonna-678x381.jpg',
                'https://www.wikieventi.it/news/wp-content/uploads/2016/09/Pala-Alpitour-Torino-come-arrivare-Madonna-678x381.jpg'
            ],
            season: 'Summer',
            start_date: '2022-10-12',
            end_date: '2022-10-12'
        }
    ]
    const poiList = [
        {
            name: 'Piazza San Carlo',
            type: 'Piazza',
            visit_info: 'Always open',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut ' +
                'labore et dolore magna aliqua.',
            image_links: [
                'https://www.ricksteves.com/italy-itinerary.jpg',
                'https://www.ricksteves.com/italy-itinerary.jpg'
            ],
            latitude: 45.0679,
            longitude: 7.68276
        },
        {
            name: 'Piazza Carlo Felice',
            type: 'Piazza',
            visit_info: 'Just on Sunday',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut ' +
                'labore et dolore magna aliqua.',
            image_links: [
                'https://www.ricksteves.com/italy-itinerary.jpg',
                'https://www.ricksteves.com/italy-itinerary.jpg'
            ],
            latitude: 45.0638,
            longitude: 7.67975
        },
        {
            name: 'Piazza della Repubblica',
            type: 'Piazza',
            visit_info: 'Closed forever',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut ' +
                'labore et dolore magna aliqua.',
            image_links: [
                'https://www.ricksteves.com/italy-itinerary.jpg',
                'https://www.ricksteves.com/italy-itinerary.jpg'
            ],
            latitude: 45.07654,
            longitude: 7.68372
        },
        {
            name: 'POI 4',
            type: 'TYPE 1',
            visit_info: 'Visit Info 1',
            description: 'Details about Visit 1',
            image_links: [
                'https://www.ricksteves.com/italy-itinerary.jpg',
                'https://www.ricksteves.com/italy-itinerary.jpg'
            ],
            latitude: 45.07654,
            longitude: 7.68372
        },
        {
            name: 'POI 5',
            type: 'TYPE 2',
            visit_info: 'Visit Info 2',
            description: 'Details about Visit 2',
            image_links: [
                'https://www.ricksteves.com/italy-itinerary.jpg',
                'https://www.ricksteves.com/italy-itinerary.jpg'
            ],
            latitude: 45.07654,
            longitude: 7.68372
        },
        {
            name: 'POI 6',
            type: 'TYPE 3',
            visit_info: 'Visit Info 3',
            description: 'Details about Visit 3',
            image_links: [
                'https://www.ricksteves.com/italy-itinerary.jpg',
                'https://www.ricksteves.com/italy-itinerary.jpg'
            ],
            latitude: 45.07654,
            longitude: 7.68372
        }
    ]

    const involvedList = [
        {
            number: 1,
            itineraryId: 1,
            pointOfInterestId: 1
        },
        {
            number: 2,
            itineraryId: 1,
            pointOfInterestId: 2
        },
        {
            number: 3,
            itineraryId: 1,
            pointOfInterestId: 3
        }
    ]

    const serviceList = [
        {
            type: 'Hospital',
            cover_link: getImageUrl('service-hospital.png'),
            services: [
                {
                    name: 'Hospital1',
                    address: '2550 Griffin Street',
                    opening_hours: {
                        Sunday: [
                            [9.3, 12.0],
                            [15.3, 22.0]
                        ],
                        Monday: [
                            [8.3, 12.0],
                            [15.3, 19.0]
                        ],
                        Tuesday: [
                            [8.3, 12.0],
                            [15.3, 19.0]
                        ],
                        Wednesday: [
                            [8.3, 12.0],
                            [15.3, 19.0]
                        ],
                        Thursday: [
                            [8.3, 12.0],
                            [15.3, 19.0]
                        ],
                        Friday: [[8.3, 11.3]],
                        Saturday: []
                    }
                },
                {
                    name: 'Hospital2',
                    address: '2197 Kildeer Drive',
                    opening_hours: {
                        Sunday: [
                            [9.3, 12.0],
                            [15.3, 22.0]
                        ],
                        Monday: [
                            [8.3, 12.0],
                            [15.3, 19.0]
                        ],
                        Tuesday: [
                            [8.3, 12.0],
                            [15.3, 19.0]
                        ],
                        Wednesday: [
                            [8.3, 12.0],
                            [15.3, 19.0]
                        ],
                        Thursday: [
                            [8.3, 12.0],
                            [15.3, 19.0]
                        ],
                        Friday: [[8.3, 11.3]],
                        Saturday: []
                    }
                }
            ]
        },
        {
            type: 'Pharmacy',
            cover_link: getImageUrl('service-pharmacy.png'),
            services: [
                {
                    name: 'Pharmacy1',
                    address: '2550 Griffin Street',
                    opening_hours: {
                        Sunday: [
                            [9.3, 12.0],
                            [15.3, 22.0]
                        ],
                        Monday: [
                            [8.3, 12.0],
                            [15.3, 19.0]
                        ],
                        Tuesday: [
                            [8.3, 12.0],
                            [15.3, 19.0]
                        ],
                        Wednesday: [
                            [8.3, 12.0],
                            [15.3, 19.0]
                        ],
                        Thursday: [
                            [8.3, 12.0],
                            [15.3, 19.0]
                        ],
                        Friday: [[8.3, 11.3]],
                        Saturday: []
                    }
                },
                {
                    name: 'Pharmacy2',
                    address: '2197 Kildeer Drive',
                    opening_hours: {
                        Sunday: [
                            [9.3, 12.0],
                            [15.3, 22.0]
                        ],
                        Monday: [
                            [8.3, 12.0],
                            [15.3, 19.0]
                        ],
                        Tuesday: [
                            [8.3, 12.0],
                            [15.3, 19.0]
                        ],
                        Wednesday: [
                            [8.3, 12.0],
                            [15.3, 19.0]
                        ],
                        Thursday: [
                            [8.3, 12.0],
                            [15.3, 19.0]
                        ],
                        Friday: [[8.3, 11.3]],
                        Saturday: []
                    }
                }
            ]
        },
        {
            type: 'Bank',
            cover_link: getImageUrl('service-bank.png'),
            services: [
                {
                    name: 'Bank1',
                    address: '2550 Griffin Street',
                    opening_hours: {
                        Sunday: [
                            [9.3, 12.0],
                            [15.3, 22.0]
                        ],
                        Monday: [
                            [8.3, 12.0],
                            [15.3, 19.0]
                        ],
                        Tuesday: [
                            [8.3, 12.0],
                            [15.3, 19.0]
                        ],
                        Wednesday: [
                            [8.3, 12.0],
                            [15.3, 19.0]
                        ],
                        Thursday: [
                            [8.3, 12.0],
                            [15.3, 19.0]
                        ],
                        Friday: [[8.3, 11.3]],
                        Saturday: []
                    }
                },
                {
                    name: 'Bank2',
                    address: '2197 Kildeer Drive',
                    opening_hours: {
                        Sunday: [
                            [9.3, 12.0],
                            [15.3, 22.0]
                        ],
                        Monday: [
                            [8.3, 12.0],
                            [15.3, 19.0]
                        ],
                        Tuesday: [
                            [8.3, 12.0],
                            [15.3, 19.0]
                        ],
                        Wednesday: [
                            [8.3, 12.0],
                            [15.3, 19.0]
                        ],
                        Thursday: [
                            [8.3, 12.0],
                            [15.3, 19.0]
                        ],
                        Friday: [[8.3, 11.3]],
                        Saturday: []
                    }
                }
            ]
        },
        {
            type: 'Water Supply Point',
            cover_link: getImageUrl('service-water.png'),
            services: [
                {
                    name: 'Supply1',
                    address: '2550 Griffin Street',
                    opening_hours: {
                        Sunday: [
                            [9.3, 12.0],
                            [15.3, 22.0]
                        ],
                        Monday: [
                            [8.3, 12.0],
                            [15.3, 19.0]
                        ],
                        Tuesday: [
                            [8.3, 12.0],
                            [15.3, 19.0]
                        ],
                        Wednesday: [
                            [8.3, 12.0],
                            [15.3, 19.0]
                        ],
                        Thursday: [
                            [8.3, 12.0],
                            [15.3, 19.0]
                        ],
                        Friday: [[8.3, 11.3]],
                        Saturday: []
                    }
                },
                {
                    name: 'Supply2',
                    address: '2197 Kildeer Drive',
                    opening_hours: {
                        Sunday: [
                            [9.3, 12.0],
                            [15.3, 22.0]
                        ],
                        Monday: [
                            [8.3, 12.0],
                            [15.3, 19.0]
                        ],
                        Tuesday: [
                            [8.3, 12.0],
                            [15.3, 19.0]
                        ],
                        Wednesday: [
                            [8.3, 12.0],
                            [15.3, 19.0]
                        ],
                        Thursday: [
                            [8.3, 12.0],
                            [15.3, 19.0]
                        ],
                        Friday: [[8.3, 11.3]],
                        Saturday: []
                    }
                }
            ]
        },
        {
            type: 'Police Station',
            cover_link: getImageUrl('service-police.png'),
            services: [
                {
                    name: 'Station1',
                    address: '2550 Griffin Street',
                    opening_hours: {
                        Sunday: [
                            [9.3, 12.0],
                            [15.3, 22.0]
                        ],
                        Monday: [
                            [8.3, 12.0],
                            [15.3, 19.0]
                        ],
                        Tuesday: [
                            [8.3, 12.0],
                            [15.3, 19.0]
                        ],
                        Wednesday: [
                            [8.3, 12.0],
                            [15.3, 19.0]
                        ],
                        Thursday: [
                            [8.3, 12.0],
                            [15.3, 19.0]
                        ],
                        Friday: [[8.3, 11.3]],
                        Saturday: []
                    }
                },
                {
                    name: 'Station2',
                    address: '2197 Kildeer Drive',
                    opening_hours: {
                        Sunday: [
                            [9.3, 12.0],
                            [15.3, 22.0]
                        ],
                        Monday: [
                            [8.3, 12.0],
                            [15.3, 19.0]
                        ],
                        Tuesday: [
                            [8.3, 12.0],
                            [15.3, 19.0]
                        ],
                        Wednesday: [
                            [8.3, 12.0],
                            [15.3, 19.0]
                        ],
                        Thursday: [
                            [8.3, 12.0],
                            [15.3, 19.0]
                        ],
                        Friday: [[8.3, 11.3]],
                        Saturday: []
                    }
                }
            ]
        },
        {
            type: 'Library',
            cover_link: getImageUrl('service-library.png'),
            services: [
                {
                    name: 'Library1',
                    address: '2550 Griffin Street',
                    opening_hours: {
                        Sunday: [
                            [9.3, 12.0],
                            [15.3, 22.0]
                        ],
                        Monday: [
                            [8.3, 12.0],
                            [15.3, 19.0]
                        ],
                        Tuesday: [
                            [8.3, 12.0],
                            [15.3, 19.0]
                        ],
                        Wednesday: [
                            [8.3, 12.0],
                            [15.3, 19.0]
                        ],
                        Thursday: [
                            [8.3, 12.0],
                            [15.3, 19.0]
                        ],
                        Friday: [[8.3, 11.3]],
                        Saturday: []
                    }
                },
                {
                    name: 'Library2',
                    address: '2197 Kildeer Drive',
                    opening_hours: {
                        Sunday: [
                            [9.3, 12.0],
                            [15.3, 22.0]
                        ],
                        Monday: [
                            [8.3, 12.0],
                            [15.3, 19.0]
                        ],
                        Tuesday: [
                            [8.3, 12.0],
                            [15.3, 19.0]
                        ],
                        Wednesday: [
                            [8.3, 12.0],
                            [15.3, 19.0]
                        ],
                        Thursday: [
                            [8.3, 12.0],
                            [15.3, 19.0]
                        ],
                        Friday: [[8.3, 11.3]],
                        Saturday: []
                    }
                }
            ]
        }
    ]

    models.Itinerary.bulkCreate(itineraryList).then(() =>
        process.stdout.write('Itineraries created\n')
    )
    models.PointOfInterest.bulkCreate(poiList).then(() =>
        process.stdout.write('POIs created\n')
    )
    models.Involved.bulkCreate(involvedList).then(() =>
        process.stdout.write('Involved relationships created\n')
    )
    models.Event.bulkCreate(eventList).then(() =>
        process.stdout.write('Events created\n')
    )
    models.ServiceType.bulkCreate(serviceList, {
        include: [models.Service]
    }).then(() => process.stdout.write('Service Types created\n'))
}

initializeDatabaseConnection(true).then((models) => insertData(models))
