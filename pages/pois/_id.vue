<template>
    <div class="justify-content-center container-fluid">
        <div id="content" class="container">
            <div class="row m-2">
                <BootstrapCarousel
                    v-if="image_links.length"
                    id="poi-carousel"
                    :images="image_links"
                    class="col-md-8"
                />
                <div class="col-md-4 text-left p-3">
                    <p><i><b>Type: </b></i><br><br>{{ type }}</p>
                    <br><br>
                    <p><i><b>Opening Hours:</b></i></p>
                    <p v-html="visit_info"></p>
                    <br><br>
                    <p><i><b>Address:</b></i><br><br>{{ address }}</p>
                </div>
            </div>
            <SectionTitle class="row m-2 mt-4 mb-4">Description</SectionTitle>
            <div class="row m-2 mt-4 mb-4" v-html="description"></div>

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
        </div>
    </div>
</template>

<script>
import BootstrapCarousel from '~/components/BootstrapCarousel'
import SectionTitle from '~/components/SectionTitle'

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

        const itineraryLinks = []
        for (const id of data.correlated_itinerary_IDs) {
            itineraryLinks.push(`/itineraries/${id}`)
        }

        const eventLinks = []
        for (const id of data.correlated_event_IDs) {
            eventLinks.push(`/events/${id}`)
        }

        const temp1 = data.visit_info.replace(/\n/g, "<br />")
        const visitWithBr = temp1.replace(/\t/g, "&nbsp")
        const descriptionWithBr = data.description.replace(/\n/g, "<br />")

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
            event_images: data.correlated_event_images
        }
    }
}
</script>

<style scoped></style>
