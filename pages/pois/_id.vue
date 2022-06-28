<template>
    <div class="justify-content-center container-fluid">
        <div id="content" class="container">
            <div class="row m-2">
                <BootstrapCarousel
                    id="poi-carousel"
                    :images="image_links"
                    class="img-fluid h-auto col-md-3 p-3"
                />
                <div class="col-md-9 text-left p-3">
                    <p><i>Visit Information</i>: {{ visit_info }}</p>
                    <p>
                        <i>Address of the Point of Interest</i>: {{ address }}
                    </p>
                    <p>{{ description }}</p>
                </div>
            </div>
        </div>
        <div class="row bg-primary bg-opacity-10 p-2 bi-text-left mt-2 mb-2">
            <h2 ref="map-title" class="display-3">
                See correlated Itineraries:
            </h2>
        </div>
        <BootstrapCarousel
            id="itineraries-carousel"
            :images="itinerary_images"
            :titles="itinerary_names"
            :links="itineraryLinks"
            class="w-25 mx-auto text-left m-4"
        />
        <div class="row bg-primary bg-opacity-10 p-2 bi-text-left mt-2 mb-2">
            <h2 ref="map-title" class="display-3">
                See Events that will be host in this Point of Interest:
            </h2>
        </div>
        <BootstrapCarousel
            id="events-carousel"
            :images="event_images"
            :titles="event_names"
            :links="eventLinks"
            class="w-25 mx-auto text-left m-4"
        />
    </div>
</template>

<script>
import BootstrapCarousel from '~/components/BootstrapCarousel'

export default {
    name: 'POIPage',
    components: { BootstrapCarousel },
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
