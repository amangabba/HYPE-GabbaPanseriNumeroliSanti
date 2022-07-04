<template>
    <div class="justify-content-center container-fluid">
        <div id="content" class="container">
            <!-- Section containing the information about luggage deposits -->
            <div id="introduction" class="mx-auto">
                <div>
                    Luckily, most airports have a left luggage service where for
                    a fee bags can be stored at the airport and retrieved before
                    a flight.
                    <br />
                    In case this is not possible or it is uncomfortable, there
                    are several deposits across the town which can be used.
                    <br />
                    In order to organize your trip around the city, check the
                    list below if you need a deposit.
                </div>
            </div>
            <div id="luggage-deposit" class="list-group mx-auto mt-3">
                <div
                    class="list-group-item list-group-item-action flex-column align-items-start"
                >
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">
                            Bounce Luggage Storage - Porta Nuova
                        </h5>
                    </div>
                    <p class="mb-1">
                        <!-- Luggage deposits have a Google Maps link associated, so users can
                        see their position-->
                        Via Assietta, 6/E, 10128 Torino TO (<a
                            href="https://goo.gl/maps/RR4TCUxQntwabZpB6"
                            target="_blank"
                            >Get directions</a
                        >)
                    </p>
                </div>
                <div
                    class="list-group-item list-group-item-action flex-column align-items-start"
                >
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">
                            Stow Your Bags - Luggage Storage - Porta Nuova Train
                            Station
                        </h5>
                    </div>
                    <p class="mb-1">
                        Via Alessandro Volta, 1G, 10121 Torino TO (<a
                            href="https://goo.gl/maps/p5AwnMyfyF1NF9G69"
                            target="_blank"
                            >Get directions</a
                        >)
                    </p>
                </div>
                <div
                    class="list-group-item list-group-item-action flex-column align-items-start"
                >
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">Stasher - Luggage Storage Torino</h5>
                    </div>
                    <p class="mb-1">
                        Piazza Pietro Paleocapa, 2, 10121 Torino TO (<a
                            href="https://goo.gl/maps/65mKt1WUgv6NNNEv5"
                            target="_blank"
                            >Get directions</a
                        >)
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
/**
 * Page containing information on where to deposit your luggage
 */
export default {
    name: 'TravelInfoLuggagePage',
    head() {
        return {
            title: 'Travel Info - Turin',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: `Where to deposit the luggages in Turin.`
                }
            ]
        }
    }
}
</script>

<style scoped></style>
