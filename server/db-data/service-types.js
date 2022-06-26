const serviceList = [
    {
        type: 'Hospital',
        cover_link: '/images/service-hospital.png',
        services: [
            {
                name: 'Ospedale Mauriziano Umberto I',
                address: 'Largo Filippo Turati, 62',
                opening_hours: {
                    Sunday: [[0.0, 24.0]],
                    Monday: [[0.0, 24.0]],
                    Tuesday: [[0.0, 24.0]],
                    Wednesday: [[0.0, 24.0]],
                    Thursday: [[0.0, 24.0]],
                    Friday: [[0.0, 24.0]],
                    Saturday: [[0.0, 24.0]]
                }
            },
            {
                name: 'Ospedale Martini',
                address: 'Via Tofane, 71',
                opening_hours: {
                    Sunday: [[0.0, 24.0]],
                    Monday: [[0.0, 24.0]],
                    Tuesday: [[0.0, 24.0]],
                    Wednesday: [[0.0, 24.0]],
                    Thursday: [[0.0, 24.0]],
                    Friday: [[0.0, 24.0]],
                    Saturday: [[0.0, 24.0]]
                }
            },
            {
                name: 'Ospedale Maria Vittoria',
                address: 'Via Luigi Cibrario, 72',
                opening_hours: {
                    Sunday: [[0.0, 24.0]],
                    Monday: [[0.0, 24.0]],
                    Tuesday: [[0.0, 24.0]],
                    Wednesday: [[0.0, 24.0]],
                    Thursday: [[0.0, 24.0]],
                    Friday: [[0.0, 24.0]],
                    Saturday: [[0.0, 24.0]]
                }
            }
        ]
    },
    {
        type: 'Pharmacy',
        cover_link: '/images/service-pharmacy.png',
        services: [
            {
                name: 'Farmacia San Francesco Da Paola',
                address: 'Via S. Francesco da Paola, 10',
                opening_hours: {
                    Sunday: [],
                    Monday: [
                        [9.0, 13.0],
                        [15.3, 19.3]
                    ],
                    Tuesday: [
                        [9.0, 13.0],
                        [15.3, 19.3]
                    ],
                    Wednesday: [
                        [9.0, 13.0],
                        [15.3, 19.3]
                    ],
                    Thursday: [
                        [9.0, 13.0],
                        [15.3, 19.3]
                    ],
                    Friday: [
                        [9.0, 13.0],
                        [15.3, 19.3]
                    ],
                    Saturday: [
                        [9.0, 13.0],
                        [15.3, 19.3]
                    ]
                }
            },
            {
                name: 'Farmacia San Camillo',
                address: 'Via Pio VII, 164',
                opening_hours: {
                    Sunday: [],
                    Monday: [[8.0, 19.3]],
                    Tuesday: [[8.0, 19.3]],
                    Wednesday: [[8.0, 19.3]],
                    Thursday: [[8.0, 19.3]],
                    Friday: [[8.0, 19.3]],
                    Saturday: [[8.0, 19.3]]
                }
            },
            {
                name: 'Farmacia Millefonti',
                address: 'Via Nizza, 249',
                opening_hours: {
                    Sunday: [[9.0, 19.3]],
                    Monday: [[8.45, 19.3]],
                    Tuesday: [[8.45, 19.3]],
                    Wednesday: [[8.45, 19.3]],
                    Thursday: [[8.45, 19.3]],
                    Friday: [[8.45, 19.3]],
                    Saturday: [[8.45, 19.3]]
                }
            }
        ]
    },
    {
        type: 'Bank',
        cover_link: '/images/service-bank.png',
        services: [
            {
                name: 'BPER Banca',
                address: 'Corso Unione Sovietica, 153',
                opening_hours: {
                    Sunday: [],
                    Monday: [
                        [8.4, 12.5],
                        [15.0, 16.0]
                    ],
                    Tuesday: [
                        [8.4, 12.5],
                        [15.0, 16.0]
                    ],
                    Wednesday: [
                        [8.4, 12.5],
                        [15.0, 16.0]
                    ],
                    Thursday: [
                        [8.4, 12.5],
                        [15.0, 16.0]
                    ],
                    Friday: [
                        [8.4, 12.5],
                        [15.0, 16.0]
                    ],
                    Saturday: []
                }
            },
            {
                name: 'Intesa Sanpaolo S.p.A.',
                address: 'Corso Bramante, 82',
                opening_hours: {
                    Sunday: [],
                    Monday: [
                        [8.3, 13.3],
                        [14.45, 16.55]
                    ],
                    Tuesday: [
                        [8.3, 13.3],
                        [14.45, 16.55]
                    ],
                    Wednesday: [
                        [8.3, 13.3],
                        [14.45, 16.55]
                    ],
                    Thursday: [
                        [8.3, 13.3],
                        [14.45, 16.55]
                    ],
                    Friday: [
                        [8.3, 13.3],
                        [14.45, 16.55]
                    ],
                    Saturday: []
                }
            },
            {
                name: 'Banca Popolare di Sondrio SpA',
                address: 'Via Luigi Cibrario, 17/A BIS',
                opening_hours: {
                    Sunday: [],
                    Monday: [
                        [8.3, 13.3],
                        [14.45, 16.15]
                    ],
                    Tuesday: [
                        [8.3, 13.3],
                        [14.45, 16.15]
                    ],
                    Wednesday: [
                        [8.3, 13.3],
                        [14.45, 16.15]
                    ],
                    Thursday: [
                        [8.3, 13.3],
                        [14.45, 16.15]
                    ],
                    Friday: [
                        [8.3, 13.3],
                        [14.45, 16.15]
                    ],
                    Saturday: []
                }
            }
        ]
    },
    {
        type: 'Water Supply Point',
        cover_link: '/images/service-water.png',
        services: [
            {
                name: 'Punto Acqua SMAT',
                address: 'Piazza Galimberti',
                opening_hours: {
                    Sunday: [[0.0, 24.0]],
                    Monday: [[0.0, 24.0]],
                    Tuesday: [[0.0, 24.0]],
                    Wednesday: [[0.0, 24.0]],
                    Thursday: [[0.0, 24.0]],
                    Friday: [[0.0, 24.0]],
                    Saturday: [[0.0, 24.0]]
                }
            },
            {
                name: 'Punto Acqua Smat',
                address: 'Via Gian Battista Vico, 4',
                opening_hours: {
                    Sunday: [[6.0, 24.0]],
                    Monday: [[6.0, 24.0]],
                    Tuesday: [[6.0, 24.0]],
                    Wednesday: [[6.0, 24.0]],
                    Thursday: [[6.0, 24.0]],
                    Friday: [[6.0, 24.0]],
                    Saturday: [[6.0, 24.0]]
                }
            },
            {
                name: 'Punto Acqua Smat presso Politecnico',
                address: 'Corso Castelfidardo, 39',
                opening_hours: {
                    Sunday: [[8.0, 20.0]],
                    Monday: [[8.0, 24.0]],
                    Tuesday: [[8.0, 24.0]],
                    Wednesday: [[8.0, 24.0]],
                    Thursday: [[8.0, 24.0]],
                    Friday: [[8.0, 24.0]],
                    Saturday: [[8.0, 24.0]]
                }
            }
        ]
    },
    {
        type: 'Police Station',
        cover_link: '/images/service-police.png',
        services: [
            {
                name: 'Questura di Torino',
                address: 'Corso Vinzaglio, 10',
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
                name: 'Commissariato Torino Mirafiori',
                address: 'Via Pier Domenico Olivero, 15',
                opening_hours: {
                    Sunday: [],
                    Monday: [[8.3, 19.3]],
                    Tuesday: [[8.3, 19.3]],
                    Wednesday: [[8.3, 19.3]],
                    Thursday: [[8.3, 19.3]],
                    Friday: [[8.3, 19.3]],
                    Saturday: [[8.3, 19.3]]
                }
            },
            {
                name: 'Commissariato Centro',
                address: 'Via Pier Domenico Olivero, 15',
                opening_hours: {
                    Sunday: [],
                    Monday: [[8.3, 19.3]],
                    Tuesday: [[8.3, 19.3]],
                    Wednesday: [[8.3, 19.3]],
                    Thursday: [[8.3, 19.3]],
                    Friday: [[8.3, 19.3]],
                    Saturday: [[8.3, 19.3]]
                }
            }
        ]
    },
    {
        type: 'Library',
        cover_link: '/images/service-library.png',
        services: [
            {
                name: 'Biblioteca civica Centrale',
                address: 'Via della Cittadella, 5',
                opening_hours: {
                    Sunday: [],
                    Monday: [[14.0, 19.0]],
                    Tuesday: [[9.0, 19.0]],
                    Wednesday: [[9.0, 19.0]],
                    Thursday: [[9.0, 19.0]],
                    Friday: [[9.0, 19.0]],
                    Saturday: [[9.0, 15.0]]
                }
            },
            {
                name: 'Biblioteca civica Primo Levi',
                address: 'Via Ruggero Leoncavallo, 17',
                opening_hours: {
                    Sunday: [],
                    Monday: [[14.0, 19.0]],
                    Tuesday: [[9.0, 19.0]],
                    Wednesday: [[9.0, 19.0]],
                    Thursday: [[9.0, 19.0]],
                    Friday: [[9.0, 19.0]],
                    Saturday: [[9.0, 15.0]]
                }
            },
            {
                name: "Biblioteca civica A. Passerin d'Entrèves",
                address: 'Via Guido Reni, 102',
                opening_hours: {
                    Sunday: [],
                    Monday: [[14.0, 19.0]],
                    Tuesday: [[9.0, 15.0]],
                    Wednesday: [[13.0, 19.0]],
                    Thursday: [[13.0, 19.0]],
                    Friday: [[9.0, 15.0]],
                    Saturday: []
                }
            }
        ]
    }
]

module.exports = serviceList
