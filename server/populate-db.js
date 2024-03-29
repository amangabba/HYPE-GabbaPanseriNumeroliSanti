const { initializeDatabaseConnection } = require('./database')

const serviceTypes = require('./db-data/service-types')

/**
 * Insert data into the DB tables
 * @param models object containing the ORM models for the DB tables
 */
function insertData(models) {
    const itineraryList = [
        {
            title: 'Palaces and Squares of Turin',
            duration: '292',
            description: `The itinerary includes five magical palaces of Turin. Starting from 'Palazzo Madama', then 'Palazzina di Caccia di Stupingi', 'Palazzo Reale di Torino', 'Piazza San Carlo' and ending in the 'Piazza Castello'.`,
            map_link: '/images/itinerary-palaces.png'
        },
        {
            title: 'Church and monuments',
            duration: '375',
            description: `The itinerary starts from Santuario della Consolata, in the center of the city and moves towards 'La Basilica di Superga', visiting the famous 'Duomo di Torino', 'Cappella della Sacra Sindone' and 'Mole Antonelliana'`,
            map_link: '/images/itinerary-church.png'
        },
        {
            title: 'Museums and History',
            duration: '320',
            description: `The city of Turin offers to visitors more than 40 museums, some of which are of world importance. We'll visit: The Egyptian Museum, second for importance and quantity of pieces after that of Cairo, Museo dell'Automobile, Parco del Valentino, Musei Reali and Villa della Regina.`,
            map_link: '/images/itinerary-museums.png'
        }
    ]
    const eventList = [
        {
            name: 'Invitation to Pompeii',
            practical_info:
                'Monday, and from Wednesday to Sunday: 10.00 a.m - 18.00 p.m.\n' +
                'Closed on Tuesday.',
            description:
                'Exhibition Invitation to Pompeii, curated by the Parco Archeologico of Pompeii and by Palazzo Madama.\n' +
                'An invitation to enter into the homes of Pompeii, to discover their atmospheres, their furnishings, the objects used daily by their inhabitants, their decorations and embellishments, through a journey into the Pompeiian world.\n' +
                'The exhibition itinerary, in the majestic Sala del Senato, where Italy was founded, unfolds across the environments that best represent the most lavish dwellings in Pompeii from the first century AD.\n' +
                'The Roman domus, for the first time in Turin, opens its doors wide to visitors, welcoming them into the domestic intimacy and displaying ordinary daily life on the slopes of the Vesuvius.\n' +
                'A plunge into the past, which offers the opportunity to experience those environments where the eruption of the Vesuvius in 79 AD suddenly extinguished the life of its inhabitants.\n' +
                'Today’s Pompeii is nothing but a mere memory of the ancient city, stripped of all forms of life caused by the natural disaster and emptied of those objects that could allow us to imagine it as it once was./n' +
                'The exhibition opens with the beautiful model of the late nineteenth century of the House of the Tragic Poet, one of those that have most stimulated the imagination of travelers and artists of the Grand Tour,' +
                'so as to be the setting of many scenes of the novel The last days of Pompeii by Edward Bulwer-Lytton, which inspired the work of Federico Maldarelli Ione and Nidia of the Museum of Antiquities – Royal Museums of Turin, that closes the path.\n' +
                'A rich selection of over 120 works, including furnishings, statues, jewelry, bronzes, glass and decorative equipment, is presented to the visitor in an itinerary through the domestic spaces' +
                '(the atrium, the triclinium, the peristyle with the garden, the bedrooms), ending with the dramatic casts of some victims.',
            address: 'Piazza Castello, TO',
            image_links: [
                '/images/event-Invitation-to-Pompei1.jpg',
                '/images/event-Invitation-to-Pompei2.jpg',
                '/images/event-Invitation-to-Pompei3.jpg'
            ],
            season: 'Summer',
            start_date: '2022-04-08',
            end_date: '2022-09-29',
            pointOfInterestId: 2
        },
        {
            name: 'Read the garden',
            practical_info:
                'Reservation required.\n' +
                'PROGRAM:\n' +
                '2nd April, 10:30 am \n' +
                '21th May, 10:30 am \n' +
                '5th June, 3:30 pm \n' +
                '18th June, 10:30 am \n' +
                '17th September, 10:30 am \n' +
                '8th October, 10:30 am',
            description:
                'Guided tour of parco della Palazzina di Caccia di Stupinigi' +
                'once a month on Saturday morning, the Mauritian Order Foundation with "Reading the garden" ' +
                ' exceptionally opens to the public the gates of the large park of the Palazzina di Caccia di Stupinigi.' +
                ' Equipped with a protective helmet, visitors can visit the gardens of Stupinigi, from the courtyard of honor,' +
                ' to the central pavilion, to the eastern garden, to discover the evolution of the park inside the Palazzina.' +
                'Through maps and historical documents the walks will retrace the phases and styles of the garden, from taste' +
                ' to French of the eighteenth century to the evolution of romantic taste, up to the twentieth-century' +
                ' garden dating back to the holiday period of Queen Margherita.\n' +
                'The garden of the Palazzina di Caccia di Stupinigi was designed on the model French in 1740 by Michel Bénard,' +
                'director of the Royal Gardens, who managed to elaborate the Juvarrian thought of aulic space dynamically connected' +
                'with the surrounding hunting environment. In the nineteenth century it adapted to the new romantic taste of landscape park,' +
                'without losing the original geometric structure. Paths were created with a sinuous course, a pond with an island with a belvedere,' +
                'a wooden bridge and even a greenhouse was built in the eastern part.',
            address: 'Piazza Principe Amedeo 7, Nichelino TO',
            image_links: [
                '/images/event-read-the-garden1.jpg',
                '/images/event-read-the-garden2.jpg',
                '/images/event-read-the-garden3.jpg',
                '/images/event-read-the-garden4.jpg'
            ],
            season: 'Summer',
            start_date: '2022-04-02',
            end_date: '2022-10-08',
            pointOfInterestId: 3
        },
        {
            name: 'Stories from the lathe',
            practical_info:
                '10 January from 17:00 to 18:30: The ceramic of Greeks.\n' +
                '14 January from 17:00 to 18:30: The ceramic of Cipro.\n' +
                '12 February dalle  17:00: The ceramic of Etruscans.\n' +
                '16 February 17:00: The ceramic of Romans.\n' +
                'Duration 90 minutes, max 20 people.\n',
            description:
                'Stories from the lathe. The ceramics of the Museum of Antiquities a new cycle of meetings and workshops to learn about and deepen the archaeological collections of the Royal Museums!' +
                'Ceramics had in ancient times a diffusion comparable to that of todays plastic, but with a much greater environmental sustainability!' +
                'All archaeological museums are overflowing with vases, distinguishable by appearance, shape, function, decoration...' +
                'Do you already know what bucchero is? What is the difference between black-figure and red-figure vases? What does sealed earth mean?' +
                'How was the slat polishing made? If yes, welcome colleague! Otherwise you can participate in the series of meetings Stories from' +
                'the lathe and discover it together with the archaeologists of the Royal Museums.\n' +
                'Each event includes an interactive behind-the-scenes' +
                'workshop to familiarize yourself with techniques and materials used for the main ceramic classes of the Mediterranean, and a guided tour' +
                'in the new Archaeological Gallery to discover the most prestigious vases of the Turin collections.',
            address: 'Piazzetta Reale 1, TO',
            image_links: [
                '/images/event-stories-from-the-lathe1.jpg',
                '/images/event-stories-from-the-lathe2.jpg',
                '/images/event-stories-from-the-lathe3.jpg'
            ],
            season: 'Winter',
            start_date: '2023-01-10',
            end_date: '2023-02-16',
            pointOfInterestId: 4
        },
        {
            name: 'Frida Kahlo',
            practical_info:
                'Opening hours:\n' +
                'From Monday to Thursday: 10:00 a.m.-6:00 p.m.\n' +
                'From Friday to Sunday: 10:00 a.m.-20:00 p.m.\n' +
                'Cost of the ticket: 16€',
            description:
                ' The exhibition, presented for the first time in Europe, promoted by Next Exhibition and ONO arte,' +
                'organized by the Nickolas Muray archive through Guest Curator Traveling Exhibitions, LLC,' +
                'consists of 60 photographs and tells, following the chronology of Nickolas Murays photos,' +
                'the professional and personal path of Frida Kahlo, starting from the 1937 shots in Tizapan in Mexico,' +
                'to close with those of 1948 in Pedregal and Coyoacan.\n' +
                'In this period of time some of the most important photos ever taken of Frida Kahlo were born, such as' +
                'those taken in 1939 in Murays studio and in 1946 in New York, exhibited in the exhibition as if to reconstruct a family photo album.\n' +
                'The exhibition presents, compared to the previous edition, further and interesting contents: the visitor will have the opportunity to immerse' +
                'himself in the feelings and emotions that have characterized the path of the artist. Reproductions of environments, clothes, jewelry and correspondence with the beloved Nickolas Muray.\n' +
                'allows the public to get to know the woman behind the artist, to know her essence, made of strength,' +
                'courage, talent and immense love.\n' +
                'Photographs, letters, furnishings, reproductions of clothes and jewelry, combined with important' +
                'multimedia elements make up a unique exhibition for its strong artistic value and high emotional value.',
            address: 'Piazza Principe Amedeo 7, Nichelino TO',
            image_links: [
                '/images/event-frida1.jpg',
                '/images/event-frida2.jpg',
                '/images/event-frida3.jpg'
            ],
            season: 'Summer',
            start_date: '2022-03-12',
            end_date: '2022-06-05',
            pointOfInterestId: 3
        },
        {
            name: 'The Flora of Ancient Egypt',
            practical_info:
                'From Thursday to Saturday, starting at 10:00 p.m. until midnight.\n' +
                'Four video mapping performances per hour are scheduled, each lasting about 8 minutes.',
            description:
                'One of the facades of the inner courtyard of the Museum and its garden will turn into a dynamic screen. With a video-mapping technique, flowers and plants of ancient Egypt will bloom.' +
                'three trees will recount a love lyric, and lastly, the fauna of ancient Egypt will populate the garden, all this to the rhythm of an engaging melody.\n' +
                'video contributions made through the videomapping technique will be projected, capable of enriching the sensory perception of the observer.' +
                ' To the rhythm of an engaging melody, the garden, as if by magic, will also seem to be populated by typical specimens of the fauna of Ancient Egypt.\n' +
                'Furthermore in view of the bicentenary in 2024, the Egyptian Museum of Turin presents Cortile aperto: Flora dell antico Egitto, a green space accessible' +
                ' to all (free admission, for the entire month of July) located in the courtyard of the Collegio dei Nobili. An intervention conceived and realized by the' +
                'international group of Egyptologists of the museum composed of Johannes Auenmüller, Divina Centore and Cédric Gobeil.',
            address: 'Via Accademia delle Scienze 6, TO',
            image_links: [
                '/images/event-flora1.jpg',
                '/images/event-flora.jpg'
            ],
            season: 'Summer',
            start_date: '2022-06-30',
            end_date: '2022-07-30',
            pointOfInterestId: 1
        },
        {
            name: 'The table by Ugo Da Capri for the altar of the holy face',
            practical_info:
                'It will be possible to take guided tours only on sunday at 3:00 p.m.\n' +
                'Duration: 1h\n' +
                'Cost of the ticket: 4.00€ + guided visit: 6.00€',
            description:
                'The work is exhibited to the general public thanks to the support of Reale Mutua and the technical contribution of Targetti Sankey Spa' +
                'through lighting technologies with diversified ignition for a combined visual narration. In the prestigious exhibition space of Palazzo Madama,' +
                ' visitors will be able to admire the altarpiece by Ugo da Carpi with Veronica unfolding the veil of the Holy Face between the Apostles Peter and Paul-' +
                ' a work of extraordinary importance for art and faith.\n' +
                'In the city of the Shroud comes a table made for the altar of the Holy Face in the Vatican Basilica by Ugo da Carpi, a skilled carver of woodcut matrices.' +
                'Giorgio Vasari quotes it and had the opportunity to see it together with Michelangelo: he describes it by reporting a particular detail,' +
                ' already specified by the artist next to his signature: "painted in oil without using a brush".\n' +
                'The visit offers numerous ideas: from the scientific analyses conducted in the Vatican laboratories, to the insights on the techniques of execution,' +
                'up to the comparison with other prestigious works united by the iconography of the True Icon, including, to mention, the woodcut of 1510 by Albrecht Dürer.' +
                'The setting is engaging: you are immersed in the imposing architecture of the ancient Vatican basilica. In the center, and in direct relation to the Shroud' +
                'fresco of the Medieval Court, there is the protagonist work: Ugo da Carpi. Veronica unfolding the veil of the Holy Face between the Apostles Peter and Paul. Holy Year 1525.',
            address: 'Piazza Castello, TO',
            image_links: ['/images/event-ugo1.jpg', '/images/event-ugo2.jpg'],
            season: 'Winter',
            start_date: '2022-12-08',
            end_date: '2022-12-24',
            pointOfInterestId: 2
        },
        {
            name: 'Objective identities',
            practical_info:
                'On Tuesday and Wednesday. At 6:00 p.m.\n' +
                'Lecture held by Bettina Bader.\n' +
                'Conference in English.',
            description:
                'This talk will raise awareness of somewhat hidden prejudices and preconceived ideas about the identities of ancient people, based on material culture in various forms.' +
                'Often such ideas cannot really be substantiated from current knowledge of objects, and textual references, if they exist, are also not as straight forward as we would wish.\n' +
                'Firstly, individuals may have had more identities than immediately apparent and not each one is easily recognisable in the archaeological record.' +
                'Further, research shows that some ideas about ancient Egypt and its inhabitants are rooted in antiquated culture-historical paradigms, which go back to ideological narratives.\n' +
                'It is time to highlight those problems and avoid simplistic historical narratives in favour of more complex reconstructions. The lecture will provide some theoretical background' +
                'of archaeological thinking with a proposal to reconstruct ancient life’s circumstances and realities, with a case study set in the late Middle Kingdom (c. 1800-1700 BC).\n' +
                'Bettina Bader is head of the research group Archaeology in Egypt and Sudan, Department of Prehistory and Archaeology of West Asia and Northeast Africa, Austrian Academy of Sciences.\n' +
                'After finishing his doctorate (2004) at the Institute of Egyptology, University of Vienna, he continued with several post-docs funded by the Austrian Scientific Fund,' +
                'the Austrian National Bank and the European Commission (2004-2009).' +
                'Since 2015 she is principal researcher of the START-project Beyond Politics: Material Culture of Second Intermediate Period Egypt and Nubia (FWF, Y754-G19)' +
                'culture in Egypt and Nubia. Since 2021 he is head of the research group of Archaeology in Egypt and Sudan, Department of Prehistory and Archaeology of West Asia and Northeast Africa, Austrian Academy of Sciences.\n',
            address: 'Via Accademia delle Scienze 6, TO',
            image_links: [
                '/images/event-objective1.jpg',
                '/images/event-objective2.jpg'
            ],
            season: 'Summer',
            start_date: '2022-06-07',
            end_date: '2022-07-07',
            pointOfInterestId: 1
        },
        {
            name: 'Passepartout',
            practical_info:
                'The guided tours will be on:\n' +
                '27th,28th of March\n' +
                '24th,25 April\n' +
                '28th,29th of May\n' +
                '24th,25th of September\n' +
                '29th, 30th Octtober\n' +
                'starting at 10:30 a.m., 12:00 p.m, 2:30 p.m and 4:00 p.m.',
            description:
                'Passepartout is the program of extraordinary guided tours to the discovery of the secret spaces, normally closed to the public, of the Palazzina di Caccia di Stupinigi' +
                'With six appointments, one weekend a month, from March to November, the Mauritian Order Foundation organizes extraordinary guided tours to (re)discover the secret spaces,' +
                'normally closed public, of the Palazzina di Caccia di Stupinigi. The apartment of Ponente, the rooms of the servants and the Juvarrian dome are the spaces of the court,' +
                'in some cases open for the first time to visitors, which tell the story of the Palazzina in its different housing phases and the architectural project at the base of its construction.\n' +
                '\n' +
                'It starts on March 26-27 with the first guided tour entitled The closed rooms of the king, which opens the doors of the royal rooms then expanded under the direction of Benedetto Alfieri' +
                'in the eighteenth century to accommodate the rooms of Vittorio Emanuele, Duke of Aosta and son of King Vittorio Amedeo III.\n' +
                '\n' +
                'It continues with: Behind the secret doors, on 24-25 April and 29-30 October: the visit leads right behind the secret doors, in the hidden spaces where the servants moved and where there' +
                'is still the picture of automatic bells that allows you to closely understand the functioning of a residence like that of Stupinigi.\n' +
                '\n' +
                'Finally with: Under the deer, scheduled for 28-29 May and 24-25 September: from the grandiose central hall you walk 50 steps to reach the characteristic balcony and finally arrive,' +
                'through a narrow spiral staircase of a further 50 steps, to the top of the Juvarrian dome.',

            address: 'Piazza Principe Amedeo 7, Nichelino TO',
            image_links: [
                '/images/event-passpartout1.jpg',
                '/images/event-passpartout2.jpg',
                '/images/event-passpartout3.jpg',
                '/images/event-passpartout4.jpg'
            ],
            season: 'Summer',
            start_date: '2022-03-26',
            end_date: '2022-10-30',
            pointOfInterestId: 3
        },
        {
            name: 'Lyric and musical',
            practical_info:
                '\n' +
                '20th June: ABBA musical.\n' +
                '27th June: Cavalleria Rusticana.\n' +
                '8th July: I fantasmi dell opera.\n' +
                '10th July : Pagliacci.\n' +
                'The shows start at 7:00 p.m',

            description:
                'Until July 10, 2022, in the Hall of Honor of the Palazzina di Caccia di Stupinigi, the appointments with the lyric Opera and Musical at Court are in place.' +
                'The festival is four appointments with the great opera and musicals that have made history. Below is the complete program:\n' +
                '\n' +
                'ABBA MUSICAL\n' +
                'It was inevitable that ABBA would enter the musical galaxy' +
                'for the infallibility of the melodies, the variety in the arrangements, the ambivalence between disco hedonism and Bergmanian gloom,' +
                'the alternation of soloist-duet-chorus that opens up multiple narrative possibilities.\n' +
                '\n' +
                'CAVALLERIA RUSTICANA\n' +
                'Cavalleria rusticana (Rome, Teatro Costanzi, 1890) is the first and most famous work by Pietro Mascagni, winner of the Sonzogno Prize for' +
                'young composers of 1888. The dramatic story, taken from the homonymous novel by Giovanni Verga, sets to music the rawness of jealousy and' +
                'revenge that characterized the human relationships of the harsh agricultural and wild world of nineteenth-century Sicily.\n' +
                '\n' +
                'I FANTASMI DELL OPERA\n' +
                'In the 80s, at the height of the worldwide expansion of mega-musicals born in London' +
                '- Les Miserables, Starlight Express... -  - the need to reconnect to the operatic world has returned, for gigantism and luxury in productions, for' +
                'the elimination of spoken lines in honor of a continuous song, for the stories told (Miss Saigon is in fact a remake of Madama Butterfly as Rent will be of Bohème)' +
                'or for the setting of the stories. I Fantasmi dell Opera compares the two compositions\n' +
                '\n' +
                'PAGLIACCI\n' +
                'The work of Ruggero Leoncavallo Pagliacci represents the ideal completion of the verist experience in Italian music of the late nineteenth century.' +
                'Set in the world of street theater, the dramatic story tells of suspicions, betrayals and revelations that result in an honor killing, consumed between' +
                ' fictions of comedy and raw reality of the facts. A window wide open on the torment of the human soul that leads to murder and self-annihilation.',
            address: 'Piazza Principe Amedeo 7, Nichelino TO',
            image_links: [
                '/images/event-lirica1.jpg',
                '/images/event-lirica2.jpg',
                '/images/event-lirica3.jpg',
                '/images/event-lirica4.jpg'
            ],
            season: 'Summer',
            start_date: '2022-06-20',
            end_date: '2022-07-10',
            pointOfInterestId: 3
        },
        {
            name: 'Transforming the Egyptian Museum in Cairo.',
            practical_info:
                'Lecture held  held by Heba Abd el Gawad, Corinna Rossi and Irene Morfini, starting at 6:00 p.m.' +
                'The conference will be held in english.',
            description:
                'Heba Abd el Gawad, Corinna Rossi and Irene Morfini guide us to discover the reorganization project of the Egyptian Museum in Cairo.\n' +
                'The imminent opening of the Grand Egyptian Museum and other regional museums in Egypt has caused a redistribution of objects, affecting the installations of the Cairo Museum.' +
                'This circumstance proved to be an opportunity to reflect on the future of this Museum and to identify suitable directions for its development.\n' +
                'Each museum participating in the project was assigned a gallery with the aim of partially renovating it: the Egyptian Museum focused on the section of the Old Kingdom.\n' +
                'Heba Abd el Gawad, Irene Morfini and Corinna Rossi will present this work that has almost reached completion, the challenges that the project has had to face, the criteria' +
                'identified to suggest the rearrangement project and the preliminary results of conservation performed on selected objects.\n' +
                '\n' +
                'Heba Abd el Gawad is an Egyptologist and curator/coordinator of the Transforming the Egyptian Museum project in Cairo for the Egyptian Museum in Turin.' +
                'Recently she was guest curator for the exhibition Listen to her! Turning up the Volume on Egypt Ordinary Women at the Petrie Museum of Egyptian and Sudanese Archaeology.\n' +
                '\n' +
                'Corinna Rossi is Associate Professor of Egyptology at the Politecnico di Milano and is Director of the Italian archaeological mission at um al-Dabadib (Kharga Oasis).' +
                'She is director of the LIFE project focused on the archaeological site of um al-Dabadib based at the Politecnico di Milano in partnership with the University of Naples Federico I\n' +
                '\n' +
                'Irene Morfini is an Egyptologist and archaeologist. Since 2013 she has been co-director of the Min Project in Luxor. Since 2011 he has been vice-president of the Canarian Association of' +
                'Egyptology and since 2017 he has been part of the staff of CAMNES. He has been working within the Transforming the Egyptian Museum project in Cairo since 2019.',
            address: 'Via Accademia delle Scienze 6, TO',
            image_links: [
                '/images/event-tranforming-egyptian1.jpg',
                '/images/event-tranforming-egyptian2.jpg',
                '/images/event-tranforming-egyptian3.jpg'
            ],
            season: 'Winter',
            start_date: '2023-01-27',
            end_date: '2023-01-29',
            pointOfInterestId: 1
        },
        {
            name: 'Cycle of conferences: Splendors of the table',
            practical_info:
                'PROGRAM:\n' +
                '13th January:The silverware service of Charle Odiot.' +
                '10th February: The food of the Gods.' +
                '7th March: Public lunches and private lunches.' +
                '13th March:The theater of the table.' +
                '\n' +
                'Opening hours: from 5:00 p.m to 7:00 p.m',
            description:
                'The practices related to the lunches in use in the House of Savoy between the kingdoms of Vittorio Amedeo II and Carlo Alberto change over time. The meeting explores the theme on the basis of archival documents.\n' +
                '\n' +
                'The silverware service of Charle Odiot.\n' +
                'Author of numerous studies, he identified in Charles-Nicolas Odiot the silversmith who created for Carlo Alberto the precious service exhibited in the Dining Room of palazzo Reale for the exhibition Splendori della Tavola.\n' +
                'The catalogue edited by Enrica Pagella and Franco Gualano for silvana Editoriale, will be presented during the meeting.\n' +
                '\n' +
                'The food of the Gods.\n' +
                'Defined as the "dark couple of Italian food writing", Clara and Gigi Padovani are the authors of over twenty titles dedicated' +
                'to the material culture of food, translated into six languages: from chocolate, to street food, to tiramisu, to hazelnut, to the' +
                'history of Italian agri-food products. Gigi is a professional journalist, for 30 years at La Stampa; Clara is a historian of cuisine and a gastronomic storyteller.\n' +
                '\n' +
                'Public lunches and private lunches.\n' +
                'The practices related to the lunches in use in the House of Savoy between the reigns of Vittorio Amedeo II and Carlo Alberto change over time.' +
                'The meeting explores the theme on the basis of archival documents.n' +
                '\n' +
                'The theater of the table.\n' +
                'Esperta di buone maniere e di storia del galateo, Barbara Ronchi della Rocca ha pubblicato vari titoli di successo. Insegna all’Università La Sapienza di Roma e tiene corsi di galateo aziendale e arte del ricevere.',
            address: 'Piazzetta Reale 1, TO',
            image_links: [
                '/images/event-galateo1.jpg',
                '/images/event-galateo2.jpg'
            ],
            season: 'Winter',
            start_date: '2023-01-13',
            end_date: '2023-03-13',
            pointOfInterestId: 4
        }
    ]

    const poiList = [
        {
            name: 'Museo Egizio',
            type: 'Museum',
            visit_info:
                '9-18.30\t\t\t\t\tfrom Tuesday to Sunday\n' +
                '9-14\t\t\t\t\t\t\t\t\ton Monday',
            address: 'Via Accademia delle Scienze, 6, 10123 Torino TO',
            description:
                'The origins of the museum trace back to 1630, when Charles Emmanuel I, Duke of Savoy, assembled a small ' +
                'collection of Egyptian antiquities. The collection was thereafter expanded during the 18th century through ' +
                'archaeological expeditions and acquisitions, and publicly displayed since 1824 into the new Museum of ' +
                'Egyptian Antiquities in Turin. The museum is housed in the Palazzo dell’Accademia delle Scienze. ' +
                'One of the most interesting characteristics of this museum is the great diversity of the artifacts on ' +
                'view, including:\n· a series of mummies of the 5th Dynasty wrapped in linen clothes;\n· the Toilet Box of ' +
                'Merit, still retaining the original ointments inside their alabaster and glass vessels;\n· the Anthropoid ' +
                'Sarcophagus of Butehamon, the Canopic Vessels of Wah-ib-ra, once containing internal organs removed ' +
                'during mummification;\n· the entire content of the Tomb of Kha and of Merit;\n· a large monument from the ' +
                'Temple of Ellesyia;\n· the famous Turin Papyrus Map;\n· the Bembine Table of Isis bronze tablet, and the ' +
                'oldest known version of the Egyptian Book of the Dead, among many others.',
            image_links: [
                '/images/poi-museoegizio1.png',
                '/images/poi-museoegizio2.png',
                '/images/poi-museoegizio3.png',
                '/images/poi-museoegizio4.png',
                '/images/poi-museoegizio5.png',
                '/images/poi-museoegizio6.png',
                '/images/poi-museoegizio7.png',
                '/images/poi-museoegizio8.png',
                '/images/poi-museoegizio9.png'
            ],
            latitude: 45.068493986677595,
            longitude: 7.684330920195937
        },
        {
            name: 'Palazzo Madama',
            type: 'Palace',
            visit_info:
                'closed\t\t\t\t\t\ton Tuesday\n' +
                '10-18\t\t\t\t\t\t\ton all other days',
            address: 'P.za Castello, 10122 Torino TO',
            description:
                'Palazzo Madama was the first Senate of the Kingdom of Italy, and takes its traditional name from the embellishments ' +
                'it received under two queens (madama) of the House of Savoy.\n' +
                'It is a large historic building that now houses the collections of the Museo Civico d’Arte Antica ' +
                'which covers four floors: in the basement, down by the Roman foundations, there is the Lapidario ' +
                'Medievale – the medieval stonework collection – with stone sculptures and jewellery. ' +
                'From there you can reach the Medieval Garden, a heaven of nature and silence in the heart of Turin. ' +
                'The ground floor is mainly devoted to the fifteenth-century castle and to the art of the Middle Ages ' +
                'and of the Renaissance. In the Treasure Tower, you will find the Portrait of a Man by Antonello da Messina. ' +
                'The Baroque rooms on the first floor contain the art of the seventeenth and eighteenth centuries, ' +
                'with paintings and with furniture by Pifetti and Prunotto in lavishly decorated settings. ' +
                'Lastly, on the second floor, you will be able to see the decorative arts of all ages: ' +
                'ceramics, ivories, jewellery, fabrics, glasswork, and much more besides.\n' +
                'The Museum was set up in 1861 by the City of Turin to bring together and house the heritage of Piedmont.',

            image_links: [
                '/images/poi-madama1.png',
                '/images/poi-madama2.png',
                '/images/poi-madama3.png',
                '/images/poi-madama4.png',
                '/images/poi-madama5.png',
                '/images/poi-madama6.png',
                '/images/poi-madama7.png',
                '/images/poi-madama8.png'
            ],
            latitude: 45.07100820681161,
            longitude: 7.685898362523839
        },
        {
            name: 'Palazzina di Caccia di Stupinigi',
            type: 'Palace',
            visit_info:
                'closed\t\t\t\t\t\t\ton Monday\n' +
                '10-17.30\t\t\t\tfrom Tuesday to Friday\n' +
                '10-18.30\t\t\t\tSaturday and Sunday',
            address: 'Piazza Principe Amedeo, 7, 10042 Stupinigi, Nichelino TO',
            description:
                'A hunting lodge for a European Court, a place of leisure and hunting. During the 18th and 19th ' +
                'centuries this was the favourite spot of the Savoy family for spectacular parties and solemn ' +
                'marriages, as well as being the residence of Napoleon in the early 19th century.\n' +
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
                '/images/poi-stupinigi1.png',
                '/images/poi-stupinigi2.png',
                '/images/poi-stupinigi3.png',
                '/images/poi-stupinigi4.png',
                '/images/poi-stupinigi5.png',
                '/images/poi-stupinigi6.png',
                '/images/poi-stupinigi7.png',
                '/images/poi-stupinigi8.png'
            ],
            latitude: 44.99535401434939,
            longitude: 7.604519933685234
        },
        {
            name: 'Palazzo Reale di Torino',
            type: 'Palace',
            visit_info:
                'closed\t\t\t\t\t\t\ton Monday\n' +
                '8.30-18\t\t\t\t\ton all other days',
            address: 'Piazzetta Reale, 1, 10122 Torino TO',
            description:
                'The Royal Palace of Turin (Palazzo Reale di Torino) is a sixteenth-century palace built for the ' +
                'House of Savoy, which ruled Turin until the late nineteenth century. ' +
                'Originally built in the 16th century, it was modernized by Christine Marie of France in the 17th ' +
                'century with designs by Baroque architect Filippo Juvarra.' +
                'In 1946, the palace was claimed by the ' +
                'Italian Republic and turned into a "Museum of the Life and Works of the House of Savoy".\nIts rooms ' +
                'are decorated with rich tapestries and a collection of Chinese and Japanese vases. The Royal Armoury ' +
                'houses an extensive array of arms, including examples from the 16th and 17th centuries. ' +
                'The palace houses the Scala delle Forbici, a staircase by Filippo Juvarra. The Chapel of the Holy ' +
                'Shroud, with its spiral dome, was built in the west wing of the palace, joining the apse ' +
                '(a semicircular recess) of the Cathedral of St. John the Baptist, to house the famous Shroud of Turin, ' +
                'which belonged to the family from 1453 until 1946. The royal gates of the palace have a golden ' +
                'Medusa symbol embossed on them, in order to fend off intruders.',
            image_links: [
                '/images/poi-palazzoreale1.png',
                '/images/poi-palazzoreale2.png',
                '/images/poi-palazzoreale3.png',
                '/images/poi-palazzoreale4.png',
                '/images/poi-palazzoreale5.png',
                '/images/poi-palazzoreale6.png',
                '/images/poi-palazzoreale7.png',
                '/images/poi-palazzoreale8.png'
            ],
            latitude: 45.07291323526096,
            longitude: 7.686283418343486
        },
        {
            name: "Museo dell'Automobile di Torino",
            type: 'Museum',
            visit_info:
                '10-14\t\t\t\t\t\t\ton Monday\n' +
                '10-19\t\t\t\t\t\t\ton all other days',
            address: "Corso Unità d'Italia, 40, 10126 Torino TO",
            description:
                'The MAUTO - National Automobile Museum, which covers an area of 19.000 square meters, was founded ' +
                'in 1932 by an idea of Cesare Goria Gatti and Roberto Biscaretti di Ruffia (first President of the ' +
                'Automobile Club of Turin and one of the founders of Fiat). The futuristic renovation, completed in ' +
                '2011 and introduced in 2013 by the English newspaper The Times in the ranking of the 50 best in the ' +
                'world, is spread over three floors. A journey through the history of the automotive to tell its ' +
                'evolution, a bridge between the past and the present, with one of the most rare and interesting ' +
                'collections of its kind, consisting of over 200 original cars of 80 different brands.\n' +
                'At the museum exhibition, in addition to the large Open Garage that can be visited by appointment, ' +
                'which houses the cars that are not in the permanent collection and is the heart of the ' +
                'MAUTO Restoration Center, there is an area dedicated to temporary exhibitions, an event space, a ' +
                'convention center, educational center, the bookshop, the café-restaurant and the Documentation ' +
                'Center which is among the most precious in Europe for the importance of its collections. The enormous ' +
                'wealth of data, historical insights, archival images, technical data on cars and coach-builders are in ' +
                'fact available throughout the visit through smartphone through the app of the Museum.',
            image_links: [
                '/images/poi-auto1.png',
                '/images/poi-auto2.png',
                '/images/poi-auto3.png',
                '/images/poi-auto4.png',
                '/images/poi-auto5.png',
                '/images/poi-auto6.png',
                '/images/poi-auto7.png',
                '/images/poi-auto8.png'
            ],
            latitude: 45.031902252410255,
            longitude: 7.6735669336864625
        },
        {
            name: 'Parco del Valentino',
            type: 'Tower',
            visit_info: 'Always open',
            address: "Corso Massimo d'Azeglio, 10126 Torino TO",
            description:
                'The Parco del Valentino is located on the banks of the Po river a few kilometers south of Turin. ' +
                'It hosts famous attractions such as a medieval village, called Borgo Medievale which has been ' +
                'transformed into an open-air museum where you can immerse yourself in the magic of centuries past. ' +
                'The sight was recreated in the 19th century for an expo in the medieval style and resembles an ' +
                'archaeological site from the 15th century. Borgo Medievale has a couple of small medieval boutiques ' +
                'selling wrought iron, basketry and wines. It’s especially nice to sit in the bar on the riverside. ' +
                'The wrought iron tree in the courtyard and the exhibitions on medieval paper scooping and forging ' +
                'techniques are well worth seeing. At the weekends, guided tours are offered to visit the Castello, ' +
                'del Valentino, the former residence of the Savoy royal family, which was modeled on the castles ' +
                'from Piedmont. Finally, the fountain of the twelve months and the beautiful botanical and rock ' +
                'garden represent two unmissable attractions in the Parco del Valentino.',
            image_links: [
                '/images/poi-valentino1.png',
                '/images/poi-valentino2.png',
                '/images/poi-valentino3.png',
                '/images/poi-valentino4.png',
                '/images/poi-valentino5.png',
                '/images/poi-valentino6.png',
                '/images/poi-valentino7.png',
                '/images/poi-valentino8.png'
            ],
            latitude: 45.054843089514605,
            longitude: 7.686730733687203
        },
        {
            name: 'Musei Reali',
            type: 'Museum',
            visit_info:
                'closed\t\t\t\t\t\ton Monday\n' +
                '10-19\t\t\t\t\t\t\tfrom Tuesday to Friday\n' +
                '10-21\t\t\t\t\t\t\ton Saturday and Sunday',
            address: 'Piazzetta Reale, 1',
            description:
                'The Royal Museums of Turin (Musei Reali di Torino) were established in 2014 under the name of ' +
                '“Polo Reale di Torino” and subsequently denominated “Musei Reali” in 2016. The Royal Museums are an ' +
                'institute of the Italian Ministry of Culture and Tourism that has special ' +
                '(scientific, financial, accounting, administrative) autonomy.\n' +
                'The Royal Museums are a museum complex equal, in terms of size and value of its collections, ' +
                'to the most famous royal residences of Europe. It offers an itinerary that comprises history, arts ' +
                'and natural environments and that develops through a path of 3 kilometers and on 30,000 square ' +
                'meters of exhibition spaces and 7 hectares of park.\n' +
                'The Royal Museums merge five State institutes whose heritage originates from the legacy of dynastic ' +
                'collection of the Savoy family: Royal Palace, Royal Armory, Royal Library, Galleria Sabauda, and ' +
                'Museum of Antiquities. The Royal Museums develop around the area of the Royal Palace, and they ' +
                'include also some of the environments around the Museum of Antiquities, as well as the Orangeries, ' +
                'the Royal Park, the exhibition hall in Palazzo Chiablese and the Sacra Sindone Chapel.',
            image_links: [
                '/images/poi-museo1.png',
                '/images/poi-museo2.png',
                '/images/poi-museo3.png',
                '/images/poi-museo4.png',
                '/images/poi-museo5.png',
                '/images/poi-museo6.png',
                '/images/poi-museo7.png',
                '/images/poi-museo8.png'
            ],
            latitude: 45.07410129682033,
            longitude: 7.686117673254131
        },
        {
            name: 'Mole Antonelliana',
            type: 'Park',
            visit_info:
                'closed\t\t\t\t\t\ton Tuesday\n' +
                '9-21\t\t\t\t\t\t\t\t\ton Monday, Wednesday, Thursday and Sunday\n' +
                '9-20\t\t\t\t\t\t\t\t\ton Friday and Saturday',
            address: 'Via Montebello, 20, 10124 Torino TO',
            description:
                'An architectural landmark of the city of Turin, it was initially conceived as a synagogue, ' +
                'before being bought by the Municipality of Turin and made into a monument to national unity. ' +
                'Planned and begun by architect Alessandro Antonelli in 1863, it was only completed in 1889. ' +
                'With a height of 167.5 metres, it was the tallest brick building in Europe at the time. ' +
                'The panoramic lift was inaugurated in 1961, during the celebrations for the centenary of the Italian ' +
                'Unification and it was renovated in 1999. Today it still allows visitors to go up to the panoramic ' +
                'terrace which is 85 metres high and take in the amazing views of the city and the surrounding Alps. ' +
                'Visitors can also climb on foot along the cavity of the dome stairs, up to the panoramic terrace.\n' +
                'Mole Antonelliana also hosts the National Museum of Cinema. The exhibits begin with gadgets that ' +
                'pre-date films, like shadow puppets, magic lanterns, and zoetropes. There are film sets to explore, ' +
                'movie posters, photographs, and film clips to admire and lots of masks, costumes, and other memorabilia.\n' +
                'The collection is so big that true film nerds will need a whole afternoon to explore.',
            image_links: [
                '/images/poi-mole1.png',
                '/images/poi-mole2.png',
                '/images/poi-mole3.png',
                '/images/poi-mole4.png',
                '/images/poi-mole5.png',
                '/images/poi-mole6.png',
                '/images/poi-mole7.png',
                '/images/poi-mole8.png'
            ],
            latitude: 45.06905771317454,
            longitude: 7.693314433687716
        },
        {
            name: 'Santuario della Consolata',
            type: 'Shrine',
            visit_info:
                '7.45-19.45\t\tfrom Monday to Friday\n' +
                '7.45-19\t\t\t\t\t\ton Saturday\n' +
                '7.45-20.30\t\ton Sunday',
            address: 'Piazza della Consolata, 10122 Torino TO',
            description:
                'The sanctuary of Mary the Comforter, closely linked to the worship of the Virgin Mary, ' +
                'has very ancient origins. Dedicated originally to Sant’Andrea, it was already in existence in ' +
                'the 10th century. Of the medieval period there remain the bell-tower and perhaps the underground ' +
                'chapel of Madonna delle Grazie. The radical extensions were designed by Guarino Guarini (1678), ' +
                'while Filippo Juvarra added the oval presbytery (1729). The neoclassical facade dates from 1860. ' +
                'Further additions were made in 1899-1904 under the guidance of Carlo Ceppi. The interior is designed ' +
                'to enhance the sumptuous high altar by Juvarra on which there are two adoring angels in white marble ' +
                'by Carlo Antonio Tantardini and the painting of the miraculous Virgin Mary.\nThe church serves as ' +
                'a burial place for a number of saints affiliated with Turin: Giuseppe Cafasso and Leonardo Murialdo, ' +
                'as well as the Blessed Giuseppe Allamano, rector (1880-1926) and founder of the Mission Institute of ' +
                'the Consolata. Every June 20, a procession of the icon of the Virgin takes place in the ' +
                'streets of the city.',
            image_links: [
                '/images/poi-consolata1.png',
                '/images/poi-consolata2.png',
                '/images/poi-consolata3.png',
                '/images/poi-consolata4.png',
                '/images/poi-consolata5.png',
                '/images/poi-consolata6.png'
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
                'one of the most significant statues of the early nineteenth century (nicknamed El Caval d’brons).\n' +
                'The short side of the square, to the south-west, is bordered by the facades of almost twin churches ' +
                'of Santa Cristina and San Carlo.\n' +
                'There are many palaces overlooking Piazza San Carlo, among which the building ' +
                'Solaro del Borgo, home of the Philharmonic Accademy from 1839, in which was joined in 1947 the Circolo ' +
                'del Whist, founded in 1841 by Camillo Benso, the Count of Cavour.\n' +
                'Don’t forget to visit the traditional Caffè San Carlo, which opened in 1842, the Caffè Torino and ' +
                'the pastry Fratelli Stratta, with the original furnishings of 1836, also famous for its chocolate.',
            image_links: [
                '/images/poi-sancarlo1.png',
                '/images/poi-sancarlo2.png',
                '/images/poi-sancarlo3.png',
                '/images/poi-sancarlo4.png',
                '/images/poi-sancarlo5.png',
                '/images/poi-sancarlo6.png',
                '/images/poi-sancarlo7.png'
            ],
            latitude: 45.06763172278214,
            longitude: 7.6829681336876385
        },
        {
            name: 'La Basilica di Superga',
            type: 'Church',
            visit_info:
                '10-17\t\t\t\t\t\t\t\tfrom Monday to Friday\n' +
                '10-18.30\t\t\t\tSaturday and Sunday',
            address: 'Strada Basilica di Superga, 73, 10132 Torino TO',
            description:
                'Victor Amadeus II, Duke of Savoy, commissioned the Basilica of Superga on the site of a hilltop ' +
                'chapel overlooking the city of Turin to celebrate the victory of Austrian troops—under the command ' +
                'of Prince Eugene of Savoy—over Franco-Spanish invaders in 1706. It took 25 years to finish the ' +
                "complex, which echoes a number of architectural elements of St. Peter's Basilica in Rome and " +
                "includes the church and cloister, royal crypt, and Hall of Popes. You'll marvel at the sheer scale, " +
                'as this imposing monument to Savoyard power can be seen from miles around.\n' +
                'In addition to the church and crypt, visitors can tour the royal apartments and take the 131 ' +
                'steps to the top of the dome for sweeping views as far as the Alps. The Basilica of Superga is one ' +
                'of the most important churches in Turin, and a visit can easily be combined with a Turin walking ' +
                'tour that takes in other city highlights such as the Royal Palace, Piazza Castello, and ' +
                'Mole Antonelliana.',
            image_links: [
                '/images/poi-superga1.png',
                '/images/poi-superga2.png',
                '/images/poi-superga3.png',
                '/images/poi-superga4.png',
                '/images/poi-superga5.png',
                '/images/poi-superga6.png'
            ],
            latitude: 45.080821218410506,
            longitude: 7.767671933688086
        },
        {
            name: 'Il Duomo di Torino',
            type: 'Church',
            visit_info:
                '10–12:30, 16–19\t\t\tfrom Monday to Friday\n' +
                '09–13, 15–19:30\t\t\ton Saturday\n' +
                '09–13, 15–19:30\t\t\ton Sunday',
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
                "of Savoy, Charles Emmanuel II's widow.\n" +
                'The cathedral is the burial place of Blessed Pier Giorgio Frassati (1901–1925), Turin native, ' +
                'avid athlete, and benefactor of the poor, called the "saint for youth of the Third Millennium." ' +
                'He was beatified by John Paul II in 1990.',
            image_links: [
                '/images/poi-duomo1.png',
                '/images/poi-duomo2.png',
                '/images/poi-duomo3.png',
                '/images/poi-duomo4.png',
                '/images/poi-duomo5.png',
                '/images/poi-duomo6.png'
            ],
            latitude: 45.07339264416224,
            longitude: 7.685221433687851
        },
        {
            name: 'Villa della Regina',
            type: 'Palace',
            visit_info:
                'closed\t\t\t\t\t\ton Monday\n' +
                '10–18\t\t\t\t\t\t\tfrom Monday to Thursday\n' +
                '10-20\t\t\t\t\t\t\ton Friday and Saturday\n' +
                '10-21\t\t\t\t\t\t\ton Sunday\n',
            address: 'Strada Comunale Santa Margherita, 79, 10131 Torino TO',
            description:
                'Villa della Regina was built in 1615 by Cardinal Maurizio di Savoia, son of Duke Carlo Emanuele I,' +
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
                'places of great scenic impact from where it is possible to enjoy the panoramic view of Turin and the Alps. ',
            image_links: [
                '/images/poi-regina1.png',
                '/images/poi-regina2.png',
                '/images/poi-regina3.png',
                '/images/poi-regina4.png',
                '/images/poi-regina5.png',
                '/images/poi-regina6.png',
                '/images/poi-regina7.png'
            ],
            latitude: 45.05802506221488,
            longitude: 7.708311433687335
        },
        {
            name: 'Cappella della Sacra Sindone',
            type: 'Church',
            visit_info:
                'closed\t\t\t\t\t\ton Monday\n' +
                '9-19\t\t\t\t\t\t\t\ton all other days',
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
                '/images/poi-sindone1.png',
                '/images/poi-sindone2.png',
                '/images/poi-sindone3.png',
                '/images/poi-sindone4.png',
                '/images/poi-sindone5.png'
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
                "Turin’s most central square, dating back to the 14th century, it takes it’s name 'castello' from " +
                "the 'Palazzo Madama' an ancient castle located in the square itself.\n" +
                'The busiest phase in developing the square and the buildings enclosing it was the 16th - 18th centuries. ' +
                'Porticoed buildings line the western perimeter, redesigned extensively by Ascanio Vittozzi. ' +
                'Architects Amedeo di Castellamonte and Filippo Juvarra played their parts too, the latter redesigning ' +
                'the castle’s façade in a Baroque style (completed in 1721) under the instruction of Marie Jeanne ' +
                "of Savoy, who was known as 'Madama Reale', and for whom the building is named. The Palazzo Madama " +
                'now hosts the Museo Civico d’Arte Antica.\n' +
                'Found in and around the square are major opera house Teatro Regio, the Armeria Reale ' +
                '(one of the world’s most important collections of armoury amassed by the Savoy family), ' +
                'Palazzo Reale (the royal palace built for Carlo Emanuele II in the mid-1600s including ' +
                'the Royal Gardens), via Po (an elegant arcaded street connecting the square to the river) ' +
                'and nearby the church of San Lorenzo. Take a break from sightseeing and indulge in a yummy ' +
                'ice cream or dessert at Gelateria Abela (Piazza Castello, n. 70).',
            image_links: [
                '/images/poi-castello1.png',
                '/images/poi-castello2.png',
                '/images/poi-castello3.png',
                '/images/poi-castello4.png'
            ],
            latitude: 45.07070853003831,
            longitude: 7.685113762523864
        }
    ]

    const involvedList = [
        {
            number: 1,
            itineraryId: 1,
            pointOfInterestId: 2
        },
        {
            number: 2,
            itineraryId: 1,
            pointOfInterestId: 3
        },
        {
            number: 3,
            itineraryId: 1,
            pointOfInterestId: 4
        },
        {
            number: 4,
            itineraryId: 1,
            pointOfInterestId: 10
        },
        {
            number: 5,
            itineraryId: 1,
            pointOfInterestId: 15
        },
        {
            number: 1,
            itineraryId: 2,
            pointOfInterestId: 9
        },
        {
            number: 2,
            itineraryId: 2,
            pointOfInterestId: 12
        },
        {
            number: 3,
            itineraryId: 2,
            pointOfInterestId: 14
        },
        {
            number: 4,
            itineraryId: 2,
            pointOfInterestId: 8
        },
        {
            number: 5,
            itineraryId: 2,
            pointOfInterestId: 11
        },

        {
            number: 1,
            itineraryId: 3,
            pointOfInterestId: 6
        },
        {
            number: 2,
            itineraryId: 3,
            pointOfInterestId: 5
        },
        {
            number: 3,
            itineraryId: 3,
            pointOfInterestId: 1
        },
        {
            number: 4,
            itineraryId: 3,
            pointOfInterestId: 7
        },
        {
            number: 5,
            itineraryId: 3,
            pointOfInterestId: 13
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
