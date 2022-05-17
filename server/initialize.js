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

    const poiList = [
        {
            name: 'POI 1',
            type: 'Type1',
            visit_information: 'Always open',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut ' +
                'labore et dolore magna aliqua.',
            poi_link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Mole_Antonelliana_Torino.JPG/800px-Mole_Antonelliana_Torino.JPG'
        },
        {
            name: 'POI 2',
            type: 'Type2',
            visit_information: 'Just on Sunday',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut ' +
                'labore et dolore magna aliqua.',
            poi_link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Mole_Antonelliana_Torino.JPG/800px-Mole_Antonelliana_Torino.JPG'
        },
        {
            name: 'POI 3',
            type: 'Type3',
            visit_information: 'Closed forever',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut ' +
                'labore et dolore magna aliqua.',
            poi_link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Mole_Antonelliana_Torino.JPG/800px-Mole_Antonelliana_Torino.JPG'
        },
    ]
    await models.Itinerary.bulkCreate(itineraryList)
    await models.PointOfInterest.bulkCreate(poiList)
    const PointOFInterestList = [
        {
            name: 'POI 1',
            type: 'TYPE 1',
            visit_info: 'Visit Info 1',
            description: 'Details about Visit 1',
            image_links: ['https://www.ricksteves.com/italy-itinerary.jpg'],
        },
        {
            name: 'POI 2',
            type: 'TYPE 2',
            visit_info: 'Visit Info 2',
            description: 'Details about Visit 2',
            image_links: ['https://www.ricksteves.com/italy-itinerary.jpg'],
        },
        {
            name: 'POI 3',
            type: 'TYPE 3',
            visit_info: 'Visit Info 3',
            description: 'Details about Visit 3',
            image_links: ['https://www.ricksteves.com/italy-itinerary.jpg'],
        },
    ]

    const InvolvedList = [
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

    await models.Itinerary.bulkCreate(itineraryList)
    await models.PointOfInterest.bulkCreate(PointOFInterestList)
    await models.Involved.bulkCreate(InvolvedList)

}
