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
            name: 'Museo Egizio',
            type: 'Museum',
            visit_info:
                '\n' +
                '9-18.30     from Tuesday to Sunday\n' +
                '9-14        on Monday',
            address: 'Via Accademia delle Scienze, 6, 10123 Torino TO',
            description:
                'The origins of the museum trace back to 1630, when Charles Emmanuel I, Duke of Savoy, assembled a small\n' +
                'collection of Egyptian antiquities; the collection was thereafter expanded during the 18th century through\n' +
                'archaeological expeditions and acquisitions, and publicly displayed since 1824 into the new Museum of\n' +
                'Egyptian Antiquities in Turin. The museum is housed in the Palazzo dell’Accademia delle Scienze.\n\n ' +
                'One of the most interesting characteristics of this museum is the great diversity of the artifact on\n' +
                'view, including a series of mummies of the 5th Dynasty wrapped in linen clothes; the Toilet Box of\n' +
                'Merit, still retaining the original ointments inside their alabaster and glass vessels; the Anthropoid\n' +
                'Sarcophagus of Butehamon, the Canopic Vessels of Wah-ib-ra, once containing internal organs removed\n' +
                'during mummification; the entire content of the Tomb of Kha and of Merit; a large monument from the\n' +
                'Temple of Ellesyia; the famous Turin Papyrus Map; the Bembine Table of Isis bronze tablet, and the\n' +
                'oldest known version of the Egyptian Book of the Dead, among many others.',
            image_links: [
                'https://api.museoegizio.it/wp-content/uploads/2021/11/DSF2001-1920x1080.jpg',
                'https://www.icis.it/wp-content/uploads/2017/09/museo-egizio-34-1600x900.jpg',
                'https://martinaway.com/wp-content/uploads/2021/07/Museo-Egizio-di-Torino.jpg',
                'https://api.museoegizio.it/wp-content/uploads/2021/04/Sala-con-pubblico_New_2021.jpg',
                'https://www.torinofree.it/wp-content/uploads/2013/01/sfinge-museo-egizio-Torino.jpg',
                'https://www.rsi.ch/rete-due/programmi/cultura/oggi-la-storia/KY_Papiro_geroglifici_Egitto_Museo_Torino.JPG-4617094.html/ALTERNATES/LANDSCAPE_1300/KY_Papiro_geroglifici_Egitto_Museo_Torino.JPG'
            ],
            latitude: 45.068493986677595,
            longitude: 7.684330920195937
        },
        {
            name: 'Palazzo Madama',
            type: 'Palace',
            visit_info:
                '\n' +
                'closed      on Tuesday\n' +
                '10-18       on all other days',
            address: 'P.za Castello, 10122 Torino TO',
            description:
                'Palazzo Madama was the first Senate of the Kingdom of Italy, and takes its traditional name from the embellishments\n' +
                'it received under two queens (madama) of the House of Savoy.\n' +
                'It is a large historic building that now houses the collections of the Museo Civico d’Arte Antica\n' +
                'which covers four floors: in the basement, down by the Roman foundations, there is the Lapidario\n ' +
                'Medievale – the medieval stonework collection – with stone sculptures and jewellery.\n ' +
                'From there you can reach the Medieval Garden, a heaven of nature and silence in the heart of Turin.\n' +
                'The ground floor is mainly devoted to the fifteenth-century castle and to the art of the Middle Ages\n' +
                'and of the Renaissance. In the Treasure Tower, you will find the Portrait of a Man by Antonello da Messina.\n ' +
                'The Baroque rooms on the first floor contain the art of the seventeenth and eighteenth centuries,\n ' +
                'with paintings and with furniture by Pifetti and Prunotto in lavishly decorated settings.\n ' +
                'Lastly, on the second floor, you will be able to see the decorative arts of all ages:\n ' +
                'ceramics, ivories, jewellery, fabrics, glasswork, and much more besides.\n' +
                'The Museum was set up in 1861 by the City of Turin to bring together and house the heritage of Piedmont.',

            image_links: [
                'https://mole24.it/wp-content/uploads/2019/07/Torino_Palazzo_Madama-1.jpg',
                'https://upload.wikimedia.org/wikipedia/commons/9/9c/Torino_-_Palazzo_Madama.jpg',
                'https://lasottilelineadombrablog.files.wordpress.com/2015/06/palazzo-madama-torino1.jpg?w=1024',
                'https://www.torinorete.it/wp-content/uploads/2021/03/palazzo-madama-interni-scaled.jpg',
                'https://1890056479.rsc.cdn77.org/rivista/immagini/2022/1905/camera-di-madama-reale.jpg',
                'https://www.viaggiacorte.it/wp-content/uploads/2018/09/pala-madama-2.jpg'
            ],
            latitude: 45.07100820681161,
            longitude: 7.685898362523839
        },
        {
            name: 'Palazzina di Caccia di Stupinigi',
            type: 'Palace',
            visit_info:
                '\n' +
                'closed      on Monday\n' +
                '10-17.30    from Tuesday to Friday\n' +
                '10-18.30    Saturday and Sunday',
            address: 'Piazza Principe Amedeo, 7, 10042 Stupinigi, Nichelino TO',
            description:
                'A hunting lodge for a European Court, a place of leisure and hunting, during the 18th and 19th ' +
                'centuries this was the favourite spot of the Savoy family for spectacular parties and solemn ' +
                'marriages, as well as being the residence of Napoleon in the early 19th century.' +
                'Building began in 1729 according to a project by Filippo Juvarra and continued up to the end of the ' +
                '19th century, with further extension and completion projects by Benedetto Alfieri and other architects. ' +
                'The structure is composed of a central core with a large hall from which four lower arms form a cross ' +
                "of Sant'Andrea where the royal apartments and accommodation for guests are located. The fulcrum of " +
                'the building is the magnificent elliptical salon where a large fresco, the work of the Valeriani ' +
                'brothers, represents the myth of Diana, goddess of hunting. From the elliptical salon you pass to ' +
                'the Anticamera della Regina, frescoed by the artists Corsato and Casolo, with four large paintings ' +
                'depicting some princesses of the House of Savoy. The Anticamera del Re is also connected to the ' +
                'elliptical salon, where frescoes and furniture in Louis XV and Louis XVI style admirably decorate ' +
                'the environment. Famous in the Palazzina, the Sala del Bonzanigo, so called for the cabinet with the ' +
                'dual function of bookcase and desk, presents classicist style furniture in contrast with the Baroque ' +
                'style and presents stuccos and frescoes by Pietro Domenico Olivero and Giovanni Battista Alberoni.',
            image_links: [
                'https://siviaggia.it/wp-content/uploads/sites/2/2019/05/cosa-visitare-allinterno-della-palazzina-stupinigi-a-torino.jpg',
                'https://upload.wikimedia.org/wikipedia/commons/4/40/Palazzina_di_caccia_di_Stupinigi_con_la_cancellata%2C_ingresso.jpg',
                'https://www.colazionedaaugusta.it/wp-content/uploads/2015/06/palazzina-di-caccia-di-stupinigi.jpg',
                'https://i.pinimg.com/originals/17/bc/25/17bc2543410c8abaebd64944f66a6dff.jpg',
                'https://c2.staticflickr.com/4/3872/14490748272_4e61973199_b.jpg',
                'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Palazzina_di_Stupinigi_-_Salone_centrale_03.jpg/1280px-Palazzina_di_Stupinigi_-_Salone_centrale_03.jpg'
            ],
            latitude: 44.99535401434939,
            longitude: 7.604519933685234
        },
        {
            name: 'Palazzo Reale di Torino',
            type: 'Palace',
            visit_info:
                '\n' +
                'closed      on Monday\n' +
                '8.30-18     on all other days',
            address: 'Piazzetta Reale, 1, 10122 Torino TO',
            description:
                'The Royal Palace of Turin (Palazzo Reale di Torino) is a sixteenth-century palace constructed for the ' +
                'House of Savoy, which ruled Turin until the late nineteenth century. ' +
                'Originally built in the 16th century, it was modernized by Christine Marie of France in the 17th ' +
                'century with designs by Baroque architect Filippo Juvarra.' +
                'In 1946, the palace was claimed by the ' +
                'Italian Republic and turned into a "Museum of the Life and Works of the House of Savoy". Its rooms ' +
                'are decorated with rich tapestries and a collection of Chinese and Japanese vases. The Royal Armoury ' +
                'houses an extensive array of arms, including examples from the 16th and 17th centuries.' +
                'The palace houses the Scala delle Forbici, a staircase by Filippo Juvarra. The Chapel of the Holy ' +
                'Shroud, with its spiral dome, was built in the west wing of the palace, joining the apse ' +
                '(a semicircular recess) of the Cathedral of St. John the Baptist, to house the famous Shroud of Turin, ' +
                'which belonged to the family from 1453 until 1946. The royal gates of the palace have a golden ' +
                'Medusa symbol embossed on them, in order to fend off intruders.',
            image_links: [
                'https://www.piemonteitalia.eu/sites/default/files/musei/immagini/MUSEI_REALI_DI_TORINO-PALAZZO_REALE.jpg',
                'https://museireali.beniculturali.it/wp-content/uploads/2017/07/Palazzo-Reale-Torino-visita-alle-sale.jpg',
                'https://museireali.beniculturali.it/wp-content/uploads/2017/07/palazzo-reale-torino-13.jpg',
                'https://mywowo.net/media/images/cache/torino_polo_reale_02_palazzo_reale_esterno_jpg_1200_630_cover_85.jpg',
                'https://museireali.beniculturali.it/wp-content/uploads/2019/01/mrt_pr_salapranzo_DSC6352.jpg',
                'https://www.somewhere.it/public/foto/SomeWhere-Tour-UnaFiabaDaRe-13.jpg'
            ],
            latitude: 45.07291323526096,
            longitude: 7.686283418343486
        },
        {
            name: "Museo dell'Automobile di Torino",
            type: 'Museum',
            visit_info:
                '\n' +
                '10-14       on Monday\n' +
                '10-19       on all other days',
            address: "Corso Unità d'Italia, 40, 10126 Torino TO",
            description:
                'The MAUTO - National Automobile Museum, which covers an area of 19.000 square meters, was founded ' +
                'in 1932 by an idea of Cesare Goria Gatti and Roberto Biscaretti di Ruffia (first President of the ' +
                'Automobile Club of Turin and one of the founders of Fiat). The futuristic renovation, completed in ' +
                '2011 and introduced in 2013 by the English newspaper The Times in the ranking of the 50 best in the ' +
                'world, is spread over three floors. A journey through the history of the automotive to tell its ' +
                'evolution, a bridge between the past and the present, with one of the most rare and interesting ' +
                'collections of its kind, consisting of over 200 original cars of 80 different brands.' +
                'At the museum exhibition, in addition to the large Open Garage that can be visited by appointment, ' +
                'which houses the cars that are not in the permanent collection and is the heart of the ' +
                'MAUTO Restoration Center, there is an area dedicated to temporary exhibitions, an event space, a' +
                ' convention center, educational center, the bookshop, the café-restaurant and the Documentation ' +
                'Center which is among the most precious in Europe for the importance of its collections. The enormous ' +
                'wealth of data, historical insights, archival images, technical data on cars and coachbuilders are in ' +
                'fact available throughout the visit through smartphone through the app of the Museum.\n',
            image_links: [
                'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/02/28/9f/esterno.jpg?w=1200&h=-1&s=1',
                'https://mole24.it/wp-content/uploads/2016/07/mauto6.jpg',
                'https://www.guidatorino.com/wp-content/uploads/2021/02/museo-automobile-torino-riapertura-febbraio-2021.jpg',
                'https://immagini.alvolante.it/sites/default/files/styles/image_gallery_big/public/news_galleria/2020/07/mauto-guardia-di-finanza_13.jpg?itok=UqYHIoQE',
                'https://zero-media.s3.amazonaws.com/uploads/2019/10/museo-dell-automobile-mauto-torino.jpg',
                'https://www.museoauto.com/wp-content/uploads/2019/10/084-mauto_all2.jpg'
            ],
            latitude: 45.031902252410255,
            longitude: 7.6735669336864625
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
        },
        {
            number: 1,
            itineraryId: 2,
            pointOfInterestId: 3
        },
        {
            number: 2,
            itineraryId: 2,
            pointOfInterestId: 1
        },
        {
            number: 3,
            itineraryId: 2,
            pointOfInterestId: 4
        },
        {
            number: 4,
            itineraryId: 2,
            pointOfInterestId: 5
        },

        {
            number: 1,
            itineraryId: 3,
            pointOfInterestId: 4
        },
        {
            number: 2,
            itineraryId: 3,
            pointOfInterestId: 1
        },
        {
            number: 3,
            itineraryId: 3,
            pointOfInterestId: 2
        },
        {
            number: 4,
            itineraryId: 3,
            pointOfInterestId: 3
        },

        {
            number: 1,
            itineraryId: 4,
            pointOfInterestId: 2
        },
        {
            number: 2,
            itineraryId: 4,
            pointOfInterestId: 1
        },
        {
            number: 3,
            itineraryId: 4,
            pointOfInterestId: 3
        },
        {
            number: 4,
            itineraryId: 4,
            pointOfInterestId: 5
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
