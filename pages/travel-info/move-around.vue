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
                    The most common ways to move around Turin are listed below:
                </div>
            </div>

            <!-- Each section contains the information about a specific mean of transport -->
            <SectionTitle>Bus</SectionTitle>

            <div id="by-bus" class="list-group mx-auto">
                <p>
                    Buses and trams are the easiest means of travelling in
                    Turin. They connect the city of Turin with its outskirts and
                    run from 5 am to midnight.
                    <br />
                    On Fridays and Saturdays, you can make use of a special
                    night service called ‘Night Buster’ that runs until 5 am. It
                    goes every hour and stops near the main night spots in
                    Turin.
                    <br />
                    Some of the main rules to follow when using a bus or tram in
                    Turin:
                </p>
                <ul>
                    <li>
                        Ring the bell before your stop to let your driver know
                        you need to step out
                    </li>
                    <li>
                        Similarly, indicate that you’d like to hop on to the
                        vehicle when standing at a tram/bus stop
                    </li>
                    <li>
                        Validate your ticket when boarding a tram/bus. To do
                        that, just place your ticket into the slot of the
                        validating machine inside the tram/bus.
                    </li>
                </ul>
            </div>

            <SectionTitle>Subway</SectionTitle>

            <div id="by-metro" class="list-group mx-auto">
                <p>
                    Subway is surely the fastest way to get from A to B in
                    Turin. As long as both A and B are located along the single
                    metro line though!
                    <br />
                    The subway system connects the suburb of Collegno to the
                    Lingotto Expo. It also passes through the city’s main
                    railway stations of Porta Nuova and Porta Susa. All in all,
                    you can cover an hour’s distance in only 20 minutes!
                    <br />
                    You can recognize metro stations of Metropolitana by a red
                    sign with the letter “M.” Then, similarly to other public
                    transport, just go down and buy your ticket at one of the
                    vending machines. You’ll validate your ticket when entering
                    the gates of the metro station.
                </p>
            </div>

            <SectionTitle>Taxi</SectionTitle>

            <div id="by-taxi" class="list-group mx-auto">
                <p>
                    You can grab a taxi in Turin at one of the designated taxi
                    stops or order it to a specific address. Though, of course,
                    the easiest way is to order a cab through one of the car
                    sharing apps.
                </p>
            </div>

            <SectionTitle>Car</SectionTitle>

            <div id="by-car" class="list-group mx-auto">
                <p>
                    Most of the city of Turin is accessible by car. The only
                    exception is the historical centre and the surrounding areas
                    which are considered restricted (ZTL). Driving into such an
                    area without an appropriate authorization will result in a
                    steep fine, so make sure you familiarise yourself with the
                    ZTL boundaries and timetables in advance.
                    <br />
                    You can find both underground and street parking in Turin.
                    You’ll deal with varying hourly rates ranging from €1.30 to
                    €2.50, depending on the area. You can purchase a parking
                    voucher from GTT retailers such as tobacconist, newspaper
                    shops and parking ticket machines.
                    <br />
                    In case of need, there are also several car rental companies
                    around the city.
                    <br />
                    For further details, check this
                    <a href="https://goo.gl/maps/2xQ4MzQpxRu6ZLrA9">link</a>
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
    name: 'TravelInfoMovePage',
    components: { SectionTitle },
    head() {
        return {
            title: 'Travel Info - Turin',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: `How to move around the city.`
                }
            ]
        }
    }
}
</script>
<style scoped></style>
