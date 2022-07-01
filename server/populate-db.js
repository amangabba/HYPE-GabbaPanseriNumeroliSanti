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
        },
        {
            name: 'Parco del Valentino',
            type: 'Tower',
            visit_info: 'Always open',
            address: 'Corso Massimo d\'Azeglio, 10126 Torino TO',
            description:
                'The Parco del Valentino is located on the banks of the Po river a few kilometers south of Turin.\n ' +
                'It hosts famous attractions such as a medieval village, called Borgo Medievale which has been\n ' +
                'transformed into an open-air museum where you can immerse yourself in the magic of centuries past.\n ' +
                'The sight was recreated in the 19th century for an expo in the medieval style and resembles an\n' +
                'archaeological site from the 15th century. Borgo Medievale has a couple of small medieval boutiques\n' +
                'selling wrought iron, basketry and wines. It’s especially nice to sit in the bar on the riverside.\n' +
                'The wrought iron tree in the courtyard and the exhibitions on medieval paper scooping and forging\n ' +
                'techniques are well worth seeing. At the weekends, guided tours are offered to visit the Castello,\n' +
                'del Valentino, the former residence of the Savoy royal family, which was modeled on the castles\n ' +
                'from Piedmont. Finally, the fountain of the twelve months and the beautiful botanical and rock\n' +
                'garden represent two unmissable attractions in the Parco del Valentino.',
            image_links: [
                'https://www.giovanigenitori.it/wp-content/uploads/2018/03/Parco-del-valentino1.jpg',
                'https://www.guidatorino.com/wp-content/uploads/2019/02/torino-parco-valentino-pedonalizzazione.jpg',
                'https://www.welcometoitalia.com/wp-content/uploads/2021/01/Parco-e-Castello-del-Valentino.jpg',
                'https://www.quotidianopiemontese.it/wp-content/2022/03/2-PARCO-DEL-VALENTINO_TORINO.jpg',
                'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Torino%2C_parco_del_Valentino_%2802%29.jpg/1200px-Torino%2C_parco_del_Valentino_%2802%29.jpg',
                'https://www.museotorino.it/images/39/ea/86/32/39ea863280a746178492c11ee66d563f-1.jpg?VSCL=100'
            ],
            latitude: 45.054843089514605,
            longitude: 7.686730733687203
        },
        {
            name: 'Musei Reali',
            type: 'Museum',
            visit_info: '\n' +
                        'closed      on Monsday\n' +
                        '10-19       from Tuesday to Friday\n' +
                        '10-21       on Saturday and Sunday',
            address: 'Piazzetta Reale, 1',
            description:
                'The Royal Museums of Turin (Musei Reali di Torino) were established in 2014 under the name of' +
                '“Polo Reale di Torino” and subsequently denominated “Musei Reali” in 2016. The Royal Museums are an' +
                'institute of the Italian Ministry of Culture and Tourism that has special' +
                '(scientific, financial, accounting, administrative) autonomy.\n' +
                'The Royal Museums are a museum complex equal, in terms of size and value of its collections, ' +
                'to the most famous royal residences of Europe. We offer an itinerary that comprises history, arts ' +
                'and natural environments and that develops through a path of 3 kilometers and on 30,000 square ' +
                'meters of exhibition spaces and 7 hectares of park.\n' +
                'The Royal Museums merge five State institutes whose heritage originates from the legacy of dynastic ' +
                'collection of the Savoia family: Royal Palace, Royal Armory, Royal Library, Galleria Sabauda, and ' +
                'Museum of Antiquities. The Royal Museums develop around the area of the Royal Palace, and they ' +
                'include also some of the environments around the Museum of Antiquities, as well as the Orangeries, ' +
                'the Royal Park, the exhibition hall in Palazzo Chiablese and the Sacra Sindone Chapel.',
            image_links: [
                'https://www.guidatorino.com/wp-content/uploads/2020/09/musei-reali-torino-aperture-straordinarie-settembre-2020.jpg',
                'https://martinaway.com/wp-content/uploads/2021/11/Musei-Reali-di-Torino.jpg',
                'https://artemagazine.it/wp-content/uploads/2021/04/9acda34517f879d836deddcda3e271bc.jpg',
                'https://museireali.beniculturali.it/wp-content/uploads/2017/07/palazzo-reale-torino-4.jpg'
            ],
            latitude: 45.07410129682033,
            longitude: 7.686117673254131
        },
        {
            name: 'Mole Antonelliana',
            type: 'Park',
            visit_info: '\n' +
                'closed      on Tuesday\n' +
                '9-21        on Monday, Wednesday, Thursday and Sunday\n' +
                '9-20        on Friday and Saturday',
            address: 'Via Montebello, 20, 10124 Torino TO',
            description:
                'An architectural landmark of the city of Turin, it was initially conceived as a synagogue,\n' +
                'before being bought by the Municipality of Turin and made into a monument to national unity.\n ' +
                'Planned and begun by architect Alessandro Antonelli in 1863, it was only completed in 1889.\n ' +
                'With a height of 167.5 metres, it was the tallest brick building in Europe at the time.\n ' +
                'The panoramic lift was inaugurated in 1961, during the celebrations for the centenary of the Italian\n ' +
                'Unification and it was renovated in 1999. Today it still allows visitors to go up to the panoramic\n ' +
                'terrace which is 85 metres high and take in the amazing views of the city and the surrounding Alps.\n ' +
                'Visitors can also climb on foot along the cavity of the dome stairs, up to the panoramic terrace.\n' +
                'Mole Antonelliana also hosts the National Museum of Cinema. The exhibits begin with gadgets that\n ' +
                'pre-date films, like shadow puppets, magic lanterns, and zoetropes. There are film sets to explore,\n ' +
                'movie posters, photographs, and film clips to admire and lots of masks, costumes, and other memorabilia.\n' +
                'The collection is so big that true film nerds will need a whole afternoon to explore.',
            image_links: [
                'https://www.latitudeslife.com/wp-content/uploads/Mole_antonelliana_Torino.jpg',
                'https://www.inthera.it/wp-content/uploads/2017/05/31-marzo-2017-panorama-d-italia.jpg',
                'https://www.viaggimust.it/wp-content/uploads/2022/01/mole-antonelliana-1.jpg',
                'https://www.torinofree.it/wp-content/uploads/2013/01/mole-antonelliana-torino.jpg',
                'https://www.inexhibit.com/wp-content/uploads/2014/01/Museo-Nazionale-Cinema-Mole-Antonelliana-Torino-Inexhibit-3-870x580.jpg',
                'https://siviaggia.it/wp-content/uploads/sites/2/2020/07/la_mole_antonelliana.jpg'
            ],
            latitude: 45.06905771317454,
            longitude: 7.693314433687716
        },
        {
            name: 'Santuario della Consolata',
            type: 'Shrine',
            visit_info: '\n' +
                        '7.45-19.45  from Monday to Friday\n' +
                        '7.45-19     on Saturday\n' +
                        '7.45-20.30  on Sunday',
            address: 'Piazza della Consolata, 10122 Torino TO',
            description:
                'The sanctuary of Mary the Comforter, closely linked to the worship of the Virgin Mary, ' +
                'has very ancient origins. Dedicated originally to Sant’Andrea, it was already in existence in ' +
                'the 10th century. Of the medieval period there remain the bell-tower and perhaps the underground ' +
                'chapel of Madonna delle Grazie. The radical extensions were designed by Guarino Guarini (1678), ' +
                'while Filippo Juvarra added the oval presbytery (1729). The neoclassical facade dates from 1860; ' +
                'further additions were made in 1899-1904 under the guidance of Carlo Ceppi. The interior is designed ' +
                'to enhance the sumptuous high altar by Juvarra on which there are two adoring angels in white marble ' +
                'by Carlo Antonio Tantardini and the painting of the miraculous Virgin Mary. The church serves as ' +
                'a burial place for a number of saints affiliated with Turin: Giuseppe Cafasso and Leonardo Murialdo, ' +
                'as well as the Blessed Giuseppe Allamano, rector (1880-1926) and founder of the Mission Institute of ' +
                'the Consolata. Every June 20, a procession of the icon of the Virgin takes place in the ' +
                'streets of the city.',
            image_links: [
                'https://www.museotorino.it/images/11/1d/51/cf/111d51cf3060427fbfc242a3ecf44bfe-1.jpg?VSCL=100',
                'https://vocetempo.it/vt2018/wp-content/uploads/2020/06/2020.06.20.Messa_.Consolata.Santuario.della_.Consolata-Torino-0364.jpg',
                'https://www.museotorino.it/images/34/a9/a4/13/34a9a41381ae483e81610ffeeea9cd9c-1.jpg',
                'https://www.guidatorino.com/wp-content/uploads/2014/09/santuario-consolata-torino.jpg'
            ],
            latitude: 45.07688431102633,
            longitude: 7.67915967786841
        },
        {
            name: 'Piazza San Carlo',
            type: 'Square',
            visit_info: 'Always Open',
            address: 'Piazza San Carlo',
            description:
                'The most beautiful square of Turin that preserves the harmonious and uniform seventeenth century look ' +
                'given by the royal architect Carlo di Castellamonte (1642-1650).\n' +
                'In the center you can see the equestrian statue of Emanuele Filiberto, represented by Carlo ' +
                'Marocchetti (1838) in the act of sheathe the sword after the battle of San Quintino in 1557, ' +
                'one of the most significant statues of the early nineteenth century (nicknamed El Caval d’brons) .\n' +
                'The short side of the square, to the south-west, is bordered by the facades of almost twin churches ' +
                'of Santa Cristina and San Carlo.\n' +
                'Many palaces overlooking Piazza San Carlo, among which should be mentioned at n. 183, the building ' +
                'Solaro del Borgo, home of the Philharmonic Accademy from 1839, in which was joined in 1947 the Circolo ' +
                'del Whist, founded in 1841 by Camillo Benso, the Count of Cavour.\n' +
                'You don’t forget to visit the traditional Caffè San Carlo, which opened in 1842, the Caffè Torino and ' +
                'the pastry Fratelli Stratta, with the original furnishings of 1836, also famous for its chocolate.',
            image_links: [
                'https://upload.wikimedia.org/wikipedia/commons/2/27/Turin_piazza_san_carlo_2009.JPG',
                'https://www.filodiritto.com/sites/default/files/styles/lg/public/2019-05/torino.jpg?itok=BnLglJ5w',
                'https://www.quotidianopiemontese.it/wp-content/2019/02/piazza-san-carlo-torino-qp.jpg',
                'https://www.museotorino.it/images/6b/c0/4e/34/6bc04e34fd6541709ee258553089cf90-1.jpg'
            ],
            latitude: 45.06763172278214,
            longitude: 7.6829681336876385
        },
        {
            name: 'La Basilica di Superga',
            type: 'Church',
            visit_info: '\n' +
                        '10-17       from Monday to Friday\n' +
                        '10-18.30    Saturday and Sunday',
            address: 'Strada Basilica di Superga, 73, 10132 Torino TO',
            description:
                'Victor Amadeus II, Duke of Savoy, commissioned the Basilica of Superga on the site of a hilltop ' +
                'chapel overlooking the city of Turin to celebrate the victory of Austrian troops—under the command ' +
                'of Prince Eugene of Savoy—over Franco-Spanish invaders in 1706. It took 25 years to finish the ' +
                'complex, which echoes a number of architectural elements of St. Peter\'s Basilica in Rome and ' +
                'includes the church and cloister, royal crypt, and Hall of Popes. You\'ll marvel at the sheer scale, ' +
                'as this imposing monument to Savoyard power can be seen from miles around.\n' +
                'In addition to the church and crypt, visitors can tour the royal apartments and take the 131 ' +
                'steps to the top of the dome for sweeping views as far as the Alps. The Basilica of Superga is one ' +
                'of the most important churches in Turin, and a visit can easily be combined with a Turin walking ' +
                'tour that takes in other city highlights such as the Royal Palace, Piazza Castello, and ' +
                'Mole Antonelliana.',
            image_links: [
                'https://www.guidatorino.com/wp-content/uploads/2014/09/basilica-superga-torino-1.jpg',
                'https://www.museotorino.it/images/dc/3d/d2/1c/dc3dd21c39b64abea053a4bbeb59b886-1.jpg?VSCL=100',
                'https://www.museotorino.it/images/9f/22/a1/af/9f22a1afe1924f0295689f7a3dbaeac4-1.jpg?VSCL=100',
                'https://caiframe.com/wp-content/uploads/2018/11/maxresdefault-1.jpg'
            ],
            latitude: 45.080821218410506,
            longitude: 7.767671933688086
        },
        {
            name: 'Il Duomo di Torino',
            type: 'Church',
            visit_info: '\n' +
                '10–12:30, 16–19       from Monday to Friday\n' +
                '09–13, 15–19:30       on Saturday' +
                '09–13, 15–19:30       on Sunday',
            address: 'P.za S. Giovanni, 10122 Torino TO',
            description:
                'Turin Cathedral (Cathedral of San Giovanni Battista) is a Roman Catholic cathedral in Turin, northern ' +
                'Italy. Dedicated to Saint John the Baptist (San Giovanni Battista), it is the seat of the ' +
                'Archbishops of Turin.\n' +
                'It was built during 1491–98 and is adjacent to an earlier campanile built in 1470. ' +
                'Designed by Guarino Guarini, the Chapel of the Holy Shroud (the current location of the Shroud of Turin) ' +
                'was added to the structure in 1668–94.' +
                'In 1667 Guarino Guarini was called in to complete the project. The dome, ' +
                'whose works dragged for 28 years, was completed in 1694 under the direction of Marie Jeanne ' +
                'of Savoy, Charles Emmanuel II\'s widow.' +
                'The cathedral is the burial place of Blessed Pier Giorgio Frassati (1901–1925), Turin native, ' +
                'avid athlete, and benefactor of the poor, called the "saint for youth of the Third Millennium." ' +
                'He was beatified by John Paul II in 1990.',
            image_links: [
                'https://mole24.it/wp-content/uploads/2019/08/duomo-torino.jpg',
                'https://www.metroitalia.info/img/place/duomo-di-torino.webp',
                'https://upload.wikimedia.org/wikipedia/commons/e/ed/Torino%2C_duomo%2C_interno%2C_01.JPG',
                'https://upload.wikimedia.org/wikipedia/commons/d/d3/DuomoTorino.jpg'
            ],
            latitude: 45.07339264416224,
            longitude: 7.685221433687851
        },
        {
            name: 'Villa della Regina',
            type: 'Palace',
            visit_info: '\n' +
                        'closed      on Monday' +
                        '10–18       from Monday to Thursday\n' +
                        '10-20       on Friday and Saturday' +
                        '10-21       on Sunday',
            address: 'Strada Comunale Santa Margherita, 79, 10131 Torino TO',
            description:
                'Villa della Regina was built in 1615 by Cardinal Maurizio di Savoia, son of Duke Carlo Emanuele I, ' +
                'for his young wife Ludovica di Savoia. During the summer months the couple loved to plunge into the ' +
                'silence of the hills, woods and gardens as it was a way to escape from Turin’s city  crowd. Here, the ' +
                'Royal family used to organize gatherings on art, science, philosophy and mathematics with many famous ' +
                'people and intellectuals of the time.\n' +
                'Like most 17th century buildings, the Villa was constructed symmetrically, following a theme that ' +
                'all things on the right also have to be on the left. In fact, there are two apartments: the King’s ' +
                'and the Queen’s apartment, with rooms to be used during daytime opening towards the gardens and ' +
                'rooms during the night looking towards the city.\n' +
                'Today visitors are lead, as were visitors in ancient times, by this fictive guiding line through ' +
                'an extremely scenic path through the building encountering symmetric staircases, fountains with ' +
                'water games, the Grand Dance Hall opening towards the Grand Garden, which has the form of an ' +
                'amphitheater and is built on the hillside. The paths are created thus to lead the visitor to ' +
                'places of great scenic impact from where it is possible to enjoy the panoramic view of Turin and the Alps.',
            image_links: [
                'https://upload.wikimedia.org/wikipedia/commons/b/b8/Villa_della_Regina_-_belvedere_superiore18_36_56_488000.jpeg',
                'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/85/a7/74/20160814-123129-largejpg.jpg?w=1200&h=-1&s=1',
                'https://www.consultaditorino.it/static/media/uploads/realizzazioni/2008%20Villa%20della%20Regina%20Mostra%20Giaquinto/2008-villa-della-regina-mostra-giaquinto-galleria.jpg',
                'https://www.viaggiacorte.it/wp-content/uploads/2018/09/villa-della-regina-cosa-vedere.jpg'
            ],
            latitude: 45.05802506221488,
            longitude: 7.708311433687335
        },
        {
            name: 'Cappella della Sacra Sindone',
            type: 'Church',
            visit_info: '\n' +
                'closed      on Monday' +
                '9-19        on all other days',
            address: 'Piazza San Giovanni, 10122 Torino TO',
            description:
                'The task of designing and creating the Chapel to house the Holy Shroud was entrusted in 1667 to ' +
                'Guarino Guarini, one of the leading architects of Baroque in Piedmont, who concluded the work in 1690. ' +
                'The project was based on the idea of the Shroud as the extreme evidence of the mystery of Redemption, ' +
                'death and resurrection of Jesus Christ. Architecture itself thus becomes the experience of "ascending ' +
                'within death" to the light of divine glory.\n' +
                'From 1694 until the early nineties of the twentieth century, the Chapel of the Holy Shroud has guarded ' +
                'the precious relic, now preserved in the transept of Turin’s Cathedral.\n' +
                'During the night between 11 and 12 April 1997, the Chapel was affected by a large ' +
                'fire which seriously damaged the building.',
            image_links: [
                'https://museireali.beniculturali.it/wp-content/uploads/2017/07/cappella-sacra-sindone-torino.jpg',
                'https://www.architetti.com/wp-content/uploads/2018/10/IMG_6129_crediti-Daniele-Bottallo-1024x683.jpg',
                'https://www.tripguru.it/wp-content/uploads/2019/08/duomo-di-torino.jpg',
                'https://www.ilvaloreitaliano.it/wp-content/uploads/2021/03/Altare-Cappella-della-Sindone_03_Credits-Musei-Reali-Torino.jpg'
            ],
            latitude: 45.07318449073021,
            longitude: 7.685854033687847
        },
        {
            name: 'Piazza Castello',
            type: 'Square',
            visit_info: 'Always Open',
            address: 'Piazza Castello, 10122 Torino TO',
            description:
                'Turin’s most central square, dating back to the 14th century, it takes it’s name \'castello\' from ' +
                'the \'Palazzo Madama\' an ancient castle located in the square itself.\n' +
                'The busiest phase in developing the square and the buildings enclosing it was the 16th - 18th centuries. ' +
                'Porticoed buildings line the western perimeter, redesigned extensively by Ascanio Vittozzi. ' +
                'Architects Amedeo di Castellamonte and Filippo Juvarra played their parts too, the latter redesigning ' +
                'the castle’s façade in a Baroque style (completed in 1721) under the instruction of Marie Jeanne ' +
                'of Savoy, who was known as \'Madama Reale\', and for whom the building is named. The Palazzo Madama ' +
                'now hosts the Museo Civico d’Arte Antica.\n' +
                'Found in and around the square are major opera house Teatro Regio, the Armeria Reale ' +
                '(one of the world’s most important collections of armoury amassed by the Savoy family), ' +
                'Palazzo Reale (the royal palace built for Carlo Emanuele II in the mid-1600s including ' +
                'the Royal Gardens), via Po (an elegant arcaded street connecting the square to the river) ' +
                'and nearby the church of San Lorenzo. Take a break from sightseeing and indulge in a yummy ' +
                'ice cream or dessert at Gelateria Abela (Piazza Castello, n. 70).',
            image_links: [
                'https://www.yourlocalguides.net/wp-content/uploads/Piazza-Castello-1024x685.jpg',
                'https://mywowo.net/media/images/cache/torino_piazza_castello_01_introduzione_jpg_1200_630_cover_85.jpg',
                'https://www.museotorino.it/images/12/9b/0d/9e/129b0d9eafc24a2aa57c71e977489b10-1.jpg?VSCL=100',
                'https://img.grouponcdn.com/seocms/epQE88T1ZwPkJNTvXaAFsh/Palazzo_reale-1600x1069-1600x1069.jpeg'
            ],
            latitude: 45.07070853003831,
            longitude: 7.685113762523864
        },
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
            pointOfInterestId: 6
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
