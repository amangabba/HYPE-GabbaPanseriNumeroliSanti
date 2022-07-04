<template>
    <div class="justify-content-center container-fluid">
        <div id="content" class="container">
            <div id="introduction" class="mx-auto">
                <div>
                    Turin is served by a small airport, Citta di Torino-Sandro
                    Pertini, with flights to and from Europe. The closest
                    airport for flights from the United States is in Milan, a
                    little over an hour away by train. Trains and intercity
                    buses provide transportation to and from Turin from other
                    towns.
                    <br />
                    The most common ways to reach Turin are listed below:
                </div>
            </div>
            <!-- Each section contains the information about a specific mean of transport -->
            <SectionTitle>By plane</SectionTitle>

            <div id="airports" class="list-group mx-auto">
                <div
                    class="list-group-item list-group-item-action flex-column align-items-start"
                >
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">Aeroporto Torino – Caselle</h5>
                    </div>
                    <p class="mb-1">
                        <!-- Airports and train stations have a Google Maps link associated, so users can
                        see their position-->
                        Strada Aeroporto, 12, 10072 Caselle Torinese TO (<a
                            href="https://goo.gl/maps/7cw8SDVdWGeh6LJS6"
                            target="_blank"
                            >Get directions</a
                        >)
                    </p>
                </div>
            </div>

            <SectionTitle>By train</SectionTitle>

            <div id="train-stations" class="list-group mx-auto">
                <div
                    class="list-group-item list-group-item-action flex-column align-items-start"
                >
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">Torino Dora</h5>
                    </div>
                    <p class="mb-1">
                        10149 Torino TO (<a
                            href="https://goo.gl/maps/5C3nQa4jcMdf17N49"
                            target="_blank"
                            >Get directions</a
                        >)
                    </p>
                </div>
                <div
                    class="list-group-item list-group-item-action flex-column align-items-start"
                >
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">Torino Lingotto</h5>
                    </div>
                    <p class="mb-1">
                        10127 Torino TO (<a
                            href="https://goo.gl/maps/9Kdsc4TpW2BGjdiT8"
                            target="_blank"
                            >Get directions</a
                        >)
                    </p>
                </div>
                <div
                    class="list-group-item list-group-item-action flex-column align-items-start"
                >
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">Torino Porta Nuova</h5>
                    </div>
                    <p class="mb-1">
                        Corso Vittorio Emanuele II, 58, 10121 Torino TO (<a
                            href="https://goo.gl/maps/PHpKoQYPNr6DUM1U9"
                            target="_blank"
                            >Get directions</a
                        >)
                    </p>
                </div>
                <div
                    class="list-group-item list-group-item-action flex-column align-items-start"
                >
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">Torino Porta Susa</h5>
                    </div>
                    <p class="mb-1">
                        Corso Bolzano, 10121 Torino TO (<a
                            href="https://goo.gl/maps/DHnGGHXo9sVA9NkX9"
                            target="_blank"
                            >Get directions</a
                        >)
                    </p>
                </div>
                <div
                    class="list-group-item list-group-item-action flex-column align-items-start"
                >
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">Torino Rebaudengo Fossata</h5>
                    </div>
                    <p class="mb-1">
                        Via Fossata, 10147 Torino TO (<a
                            href="https://goo.gl/maps/9Sj3Mb3xVvVacchY7"
                            target="_blank"
                            >Get directions</a
                        >)
                    </p>
                </div>
                <div
                    class="list-group-item list-group-item-action flex-column align-items-start"
                >
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">Torino Stura</h5>
                    </div>
                    <p class="mb-1">
                        Corso Romania, 501, 10156 Torino TO (<a
                            href="https://goo.gl/maps/fqJ1SwoLugWFfTcKA"
                            target="_blank"
                            >Get directions</a
                        >)
                    </p>
                </div>
            </div>

            <SectionTitle>By car</SectionTitle>

            <div id="by-car" class="list-group mx-auto">
                <p>
                    Five motorways come to the city via the ring road that runs
                    along the north, west and south sides of the town:
                </p>
                <ul>
                    <li>A4 Trieste-Venezia-Milano-Torino</li>
                    <li>T1/T2-A5 Tunnel Monte Bianco-Aosta-Torino</li>
                    <li>A6 Savona-Torino</li>
                    <li>A21 Piacenza-Torino</li>
                    <li>T4-A32 Tunnel Fréjus-Torino</li>
                </ul>
                <p class="mt-2">
                    There are a number of slip roads off the A55 ring road for
                    the areas just outside the city (airport, Lingotto, Juventus
                    Stadium, Rivoli, Venaria Reale, Stupinigi included).
                    <br />
                    For the town centre, the main exits are Corso Regina
                    Margherita (North) and Corso Allamano (South).
                    <br />
                    An extensive road network connects Torino with the province
                    and, from there, to the main national and trans-European
                    roads.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import SectionTitle from '~/components/SectionTitle'
/**
 * Page containing information on how to reach the city
 */
export default {
    name: 'TravelInfoReachPage',
    components: { SectionTitle },
    head() {
        return {
            title: 'Travel Info - Turin',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: `How to reach the city.`
                }
            ]
        }
    }
}
</script>

<style scoped></style>
