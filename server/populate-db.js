const { initializeDatabaseConnection } = require('./database')

const serviceTypes = require('./db-data/service-types')

/**
 * Insert data into the DB tables
 * @param models object containing the ORM models for the DB tables
 */
function insertData(models) {
    const itineraryList = [
        {
            title: 'Itinerary 1',
            duration: '141',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum luctus eget magna euismod tempor. Sed non lacus nec urna tincidunt suscipit a vel sem.',
            map_link: 'https://www.ricksteves.com/italy-itinerary.jpg'
        },
        {
            title: 'Itinerary 2',
            duration: '142',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum luctus eget magna euismod tempor. Sed non lacus nec urna tincidunt suscipit a vel sem.',
            map_link: 'https://www.ricksteves.com/italy-itinerary.jpg'
        },
        {
            title: 'Itinerary 3',
            duration: '143',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum luctus eget magna euismod tempor. Sed non lacus nec urna tincidunt suscipit a vel sem.',
            map_link: 'https://www.ricksteves.com/italy-itinerary.jpg'
        },
        {
            title: 'Itinerary 4',
            duration: '144',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum luctus eget magna euismod tempor. Sed non lacus nec urna tincidunt suscipit a vel sem.',
            map_link: 'https://www.ricksteves.com/italy-itinerary.jpg'
        }
    ]
    const eventList = [
        {
            name: 'Leggere il giardino',
            practical_info: 'practical info about event 1',
            description:
                'Guided tour of parco della Palazzina di Caccia di Stupinigi',
            address: 'Piazza Principe Amedeo 7, Nichelino TO',
            image_links: [
                'https://www.all4shooters.com/it/caccia/storie-viaggi-cultura/stupinigi-un-gioiello-rococo-dedicato-a-diana/castello-di-stupinigi-veduta-aerea.jpg',
                'https://www.all4shooters.com/it/caccia/storie-viaggi-cultura/palazzina-di-caccia-di-stupinigi-ora-visitabile-anche-il-parco/palazzina-di-caccia-stupinigi.jpg',
                'https://grinto.it/wp-content/uploads/2016/06/fom-stupinigi-vista-lato-parco-4.jpg',
                'https://i.pinimg.com/originals/48/a4/d9/48a4d9d84146c23d78eec01b8e6ffcc7.jpg'
            ],
            season: 'Summer',
            start_date: '2022-03-19',
            end_date: '2022-10-08',
            pointOfInterestId: 1
        },
        {
            name: 'Storie dal tornio',
            practical_info:
                '10 May from 17.00 to 18.30. The ceramic of Greeks. 14 April from 17.00 to 18.30. The ceramic of Cipro. 12 May dalle  17:00 The ceramic of Etruscans',
            description:
                'Stories from the lathe. The ceramics of the Museum of Antiquities a new cycle of meetings and workshops to learn about and deepen the archaeological collections of the Royal Museums!', // Ceramics had in ancient times a diffusion comparable to that of todays plastic, but with a much greater environmental sustainability!', //troppo lungo se no All archaeological museums are overflowing with vases, distinguishable by appearance, shape, function, decoration...Do you already know what bucchero is? What is the difference between black-figure and red-figure vases? What does sealed earth mean? How was the slat polishing made? If yes, welcome colleague! Otherwise you can participate in the series of meetings Stories from the lathe and discover it together with the archaeologists of the Royal Museums.Each event includes an interactive behind-the-scenes workshop to familiarize yourself with techniques and materials used for the main ceramic classes of the Mediterranean, and a guided tour in the new Archaeological Gallery to discover the most prestigious vases of the Turin collections.',
            address: 'Piazzetta Reale 1, TO',
            image_links: [
                'https://museireali.beniculturali.it/wp-content/uploads/2017/07/museo-antichita-musei-reali-torino-5.jpg',
                'https://www.museionline.info/images/gallerie/musantictorino/Foto_5.jpg',
                'https://www.guidatorino.com/wp-content/uploads/2015/02/museo-archeologico-torino-interno.jpg'
            ],
            season: 'Winter',
            start_date: '2022-03-10',
            end_date: '2022-06-16',
            pointOfInterestId: 1
        },
        {
            name: 'Frida Kahlo',
            practical_info: 'practical info',
            description:
                'The most beautiful picture from Nickolas Muray come back to Palazzina di Caccia Stupinigi',
            address: 'Piazza Principe Amedeo 7, Nichelino TO',
            image_links: [
                'https://www.themammothreflex.com/wp-content/uploads/2020/02/frida-khalo-foto-Nickolas-Muray-mostra-torino-1-5.jpg',
                'https://www.guidatorino.com/wp-content/uploads/2019/12/frida-kahlo-torino-mostra-2020.jpg',
                'https://www.guidatorino.com/wp-content/uploads/2020/02/notte-stupinigi-club-silencio-2020-633x400.jpg'
            ],
            season: 'Summer',
            start_date: '2022-03-12',
            end_date: '2022-06-05',
            pointOfInterestId: 1
        },
        {
            name: 'Passepartout',
            practical_info: 'practical info',
            description:
                'Passepartout is the program of extraordinary guided tours to the discovery of the secret spaces, normally closed to the public, of the Palazzina di Caccia di Stupinigi',
            address: 'Piazza Principe Amedeo 7, Nichelino TO',
            image_links: [
                'https://i.pinimg.com/originals/6e/e1/cf/6ee1cfba97cbfe5d1ac5be5b2f905707.jpg',
                'https://www.colazionedaaugusta.it/wp-content/uploads/2015/06/palazzina-di-caccia-di-stupinigi.jpg',
                'https://thumbs.dreamstime.com/b/casetta-di-caccia-reale-palazzina-stupinigi-nichelino-127590822.jpg',
                'https://i.pinimg.com/originals/c8/5b/36/c85b3619fbca762ade57930d34b254d8.jpg'
            ],
            season: 'Summer',
            start_date: '2022-04-24',
            end_date: '2022-04-25',
            pointOfInterestId: 1
        },
        {
            name: 'Lyric and musical',
            practical_info: 'practical info',
            description:
                'the Salone of Onour of the Palazzina di Caccia di Stupinigi will host five appointments of the Sunday review of the Teatro Superga with the great opera and musicals that have made history',
            address: 'Piazza Principe Amedeo 7, Nichelino TO',
            image_links: [
                'https://www.guidatorino.com/wp-content/uploads/2020/06/maghi-oz-musical-stupinigi-2020.jpg',
                'https://1.bp.blogspot.com/-PCg6kCYBNbc/WuGbO__CV6I/AAAAAAAALgs/7_QkG0ri4ik_tYX_f0Bn8qx2lUUDow-pwCLcBGAs/s1600/Stupinigi%252C%2B29-4-2017.jpg',
                'https://citynews-torinotoday.stgy.ovh/~media/original-hi/7699112452265/my-fair-ladies-and-gentlemen-per-musical-a-corte.jpg',
                'https://www.guidatorino.com/wp-content/uploads/2019/07/una-notte-palazzina-caccia-stupinigi-2019.jpg'
            ],
            season: 'Summer',
            start_date: '2022-03-13',
            end_date: '2022-04-10',
            pointOfInterestId: 1
        }
    ]

    const poiList = [
        {
            name: 'Piazza San Carlo',
            type: 'Piazza',
            visit_info: 'Always open',
            address: 'Via E. Fermi 19',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut ' +
                'labore et dolore magna aliqua.',
            image_links: [
                'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Mole_Antonelliana_Torino.JPG/1200px-Mole_Antonelliana_Torino.JPG',
                'https://www.informagiovani-italia.com/mole_antonelliana3.jpg'
            ],
            latitude: 45.0679,
            longitude: 7.68276
        },
        {
            name: 'Piazza Carlo Felice',
            type: 'Piazza',
            visit_info: 'Just on Sunday',
            address: 'Via E. Fermi 19',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut ' +
                'labore et dolore magna aliqua.',
            image_links: [
                'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Mole_Antonelliana_Torino.JPG/1200px-Mole_Antonelliana_Torino.JPG',
                'https://www.informagiovani-italia.com/mole_antonelliana3.jpg'
            ],
            latitude: 45.0638,
            longitude: 7.67975
        },
        {
            name: 'Piazza della Repubblica',
            type: 'Piazza',
            visit_info: 'Closed forever',
            address: 'Via E. Fermi 19',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut ' +
                'labore et dolore magna aliqua.',
            image_links: [
                'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Mole_Antonelliana_Torino.JPG/1200px-Mole_Antonelliana_Torino.JPG',
                'https://www.informagiovani-italia.com/mole_antonelliana3.jpg'
            ],
            latitude: 45.07654,
            longitude: 7.68372
        },
        {
            name: 'Mole Antonelliana 1',
            type: 'TYPE 1',
            visit_info: 'Visit Info 1',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut ' +
                'labore et dolore magna aliqua.',
            image_links: [
                'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Mole_Antonelliana_Torino.JPG/1200px-Mole_Antonelliana_Torino.JPG',
                'https://www.informagiovani-italia.com/mole_antonelliana3.jpg'
            ],
            latitude: 45.07654,
            longitude: 7.68372
        },
        {
            name: 'Palazzina di Caccia stupinigi',
            type: 'TYPE 2',
            visit_info: 'Visit Info 2',
            address: 'Via E. Fermi 19',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut ' +
                'labore et dolore magna aliqua.',
            image_links: [
                'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Mole_Antonelliana_Torino.JPG/1200px-Mole_Antonelliana_Torino.JPG',
                'https://www.informagiovani-italia.com/mole_antonelliana3.jpg'
            ],
            latitude: 45.07654,
            longitude: 7.68372
        },
        {
            name: 'Mole antonelliana 3',
            type: 'TYPE 3',
            visit_info: 'Visit Info 3',
            address: 'Via E. Fermi 19',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut ' +
                'labore et dolore magna aliqua.',
            image_links: [
                'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Mole_Antonelliana_Torino.JPG/1200px-Mole_Antonelliana_Torino.JPG',
                'https://www.informagiovani-italia.com/mole_antonelliana3.jpg'
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
            itineraryId: 2,
            pointOfInterestId: 1
        },
        {
            number: 3,
            itineraryId: 3,
            pointOfInterestId: 1
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
    models.ServiceType.bulkCreate(serviceTypes, {
        include: [models.Service]
    }).then(() => process.stdout.write('Service Types created\n'))
}

initializeDatabaseConnection(true).then((models) => insertData(models))
