<template>
    <div class="justify-content-center container-fluid">
        <div id="content" class="container">
            <div class="row m-2">
                <!-- Carousel displaying the images of the the point of interest -->
                <BootstrapCarousel
                    v-if="image_links.length"
                    id="poi-carousel"
                    :images="image_links"
                    class="col-md-8"
                />
                <!-- Section with all the useful information about the point of interest -->
                <div class="col-md-4 text-left p-3">
                    <p>
                        <i><b>Type: </b></i><br /><br />{{ type }}
                    </p>
                    <br /><br />
                    <p>
                        <i><b>Opening Hours:</b></i>
                    </p>
                    <p v-html="visit_info"></p>
                    <br /><br />
                    <p>
                        <i><b>Address:</b></i
                        ><br /><br />{{ address }}
                    </p>
                </div>
            </div>
            <!-- Section containing the description of the point of interest -->
            <SectionTitle class="row m-2 mt-4 mb-4">Description</SectionTitle>
            <div class="row m-2 mt-4 mb-4" v-html="description"></div>

            <!-- Carousel showing the links to the itineraries which contain the point of interest. In particular,
            directive "v-if" is useful in order to allow the carousel element only when there are itineraries
            correlated -->
            <div v-if="itinerary_images.length">
                <SectionTitle>Correlated Itineraries:</SectionTitle>
                <div class="row justify-content-center">
                    <BootstrapCarousel
                        id="itineraries-carousel"
                        :images="itinerary_images"
                        :titles="itinerary_names"
                        :links="itineraryLinks"
                        class="col-md-4 text-left m-4"
                    />
                </div>
            </div>

            <!-- Carousel showing the links to the events which are hosted in the point of interest. In particular,
            directive "v-if" is useful in order to allow the carousel element only when there are events
            correlated -->
            <div v-if="event_images.length">
                <SectionTitle>Events hosted here</SectionTitle>
                <div class="row justify-content-center">
                    <BootstrapCarousel
                        id="events-carousel"
                        :images="event_images"
                        :titles="event_names"
                        :links="eventLinks"
                        class="col-md-4 text-left m-4"
                    />
                </div>
            </div>

            <!-- Carousel showing the links to the points of interest of the same type of the specific point of interest.
            In particular, directive "v-if" is useful in order to allow the carousel element only when there are points
            of interest correlated -->
            <div v-if="poi_images.length">
                <SectionTitle>Similar Points of Interest</SectionTitle>
                <div class="row justify-content-center">
                    <BootstrapCarousel
                        id="pois-carousel"
                        :images="poi_images"
                        :titles="poi_names"
                        :links="poiLinks"
                        class="col-md-4 text-left m-4"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BootstrapCarousel from '~/components/BootstrapCarousel'
import SectionTitle from '~/components/SectionTitle'

/**
 * Page containing information about a certain Point Of Interest.
 * In particular, each Point Of Interest will have:
 * a small description, a set of images, a type, an address,
 * information about opening hours and links to : hosted events,
 * itineraries in which it will appear and Points Of Interest
 * of the same type.
 */
export default {
    name: 'POIPage',
    components: { BootstrapCarousel, SectionTitle },
    layout: 'multiple-topic',
    async asyncData({ route, store, $axios }) {
        const { id } = route.params
        const { data } = await $axios.get('/api/pois/' + id)

        const breadcrumbs = [
            {
                title: 'All Points of Interest',
                link: '/pois'
            },
            {
                title: data.name,
                link: `/pois/${id}`
            }
        ]
        // Set page information in store to render them in the page layout
        store.commit('setPageInfo', { title: data.name, breadcrumbs })


        // Populate a list with all itineraries links correlated to the specific point of interest
        const itineraryLinks = []
        for (const id of data.correlated_itinerary_IDs) {
            itineraryLinks.push(`/itineraries/${id}`)
        }

        // Populate a list with all events links correlated to the specific point of interest
        const eventLinks = []
        for (const id of data.correlated_event_IDs) {
            eventLinks.push(`/events/${id}`)
        }

        // Populate a list with all points of interest links with the same type of the specific point of interest
        const poiLinks = []
        for (const id of data.correlated_poi_IDs) {
            poiLinks.push(`/pois/${id}`)
        }

        // Use replace function in order to preserve "\n" and "\t" from the database
        const temp1 = data.visit_info.replace(/\n/g, '<br />')
        const visitWithBr = temp1.replace(/\t/g, '&nbsp')
        const descriptionWithBr = data.description.replace(/\n/g, '<br />')

        return {
            name: data.name,
            type: data.type,
            visit_info: visitWithBr,
            address: data.address,
            description: descriptionWithBr,
            image_links: data.image_links,
            itineraryLinks,
            itinerary_names: data.correlated_itinerary_names,
            itinerary_images: data.correlated_itinerary_images,
            eventLinks,
            event_names: data.correlated_event_names,
            event_images: data.correlated_event_images,
            poiLinks,
            poi_names: data.correlated_poi_names,
            poi_images: data.correlated_poi_images
        }
    },
    head() {
        return {
            title: this.name + ' - Points Of Interest in Turin'
        }
    }
}
</script>

<style scoped></style>
