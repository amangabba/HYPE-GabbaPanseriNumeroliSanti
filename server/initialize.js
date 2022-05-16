export default async (models) => {
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
    await models.Itinerary.bulkCreate(itineraryList)

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
    await models.ServiceType.bulkCreate(serviceList, {
        include: [models.Service],
    })
}

const baseUrl =
    process.env.NODE_ENV === 'production'
        ? 'https://lambrate-hypermedia.herokuapp.com/'
        : 'http://localhost:3000'

function getImageUrl(imageName) {
    return baseUrl + '/images/' + imageName
}
