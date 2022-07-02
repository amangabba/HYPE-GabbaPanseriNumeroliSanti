<template>
    <div class="justify-content-center container-fluid">
        <div id="content" class="container">
            <div class="row m-2">
                <BootstrapCarousel
                    id="poi-carousel"
                    :images="image_links"
                    class="col-md-3"
                />
                <div class="col-md-9 text-left p-3">
                    <i>Type:</i> {{type}} <br>
                    <pre><i>Opening Hours:</i> {{ visit_info }}</pre>
                    <pre><i>Address of the Point of Interest</i>: {{ address }}</pre>
                    <p>{{ description }}</p>
                </div>
            </div>

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

        return {
            name: data.name,
            type: data.type,
            visit_info: data.visit_info,
            address: data.address,
            description: data.description,
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
