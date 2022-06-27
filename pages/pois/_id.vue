<template>
    <div class="justify-content-center container-fluid">
        <div
            class="title-row row p-5 text-center bg-primary bg-opacity-50 mb-1"
        >
            <h1 class="display-4">{{ name }}</h1>
        </div>
        <BootstrapBreadcrumbs :elements="breadcrumbs" />
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
            <h2 ref="map-title" class="display-3">See correlated Itineraries: </h2>
        </div>
        <BootstrapCarousel
            id="itineraries-carousel"
            :images="itinerary_images"
            :titles="itinerary_names"
            :links="itinerary_links"
            class="w-25 mx-auto text-left m-4"
        />
        <div class="row bg-primary bg-opacity-10 p-2 bi-text-left mt-2 mb-2">
            <h2 ref="map-title" class="display-3">See Events that will be host in this Point of Interest: </h2>
        </div>
        <BootstrapCarousel
            id="events-carousel"
            :images="event_images"
            :titles="event_names"
            :links="event_links"
            class="w-25 mx-auto text-left m-4"
        />
    </div>
</template>

<script>
import BootstrapCarousel from '~/components/BootstrapCarousel'
import BootstrapBreadcrumbs from '~/components/BootstrapBreadcrumbs';

export default {
    name: 'POIPage',
    components: {
        BootstrapCarousel,
        BootstrapBreadcrumbs
    },
    async asyncData({ route, $axios }) {
        const { id } = route.params
        const { data } = await $axios.get('/api/pois/' + id)

        const itinerary_links = []
        for (const id of data.correlated_itinerary_IDs) {
            itinerary_links.push(`/itineraries/${id}`)
        }

        const event_links = []
        for (const id of data.correlated_event_IDs) {
            event_links.push(`/events/${id}`)
        }

        return {
            name: data.name,
            type: data.type,
            visit_info: data.visit_info,
            address: data.address,
            description: data.description,
            image_links: data.image_links,
            itinerary_links,
            itinerary_names: data.correlated_itinerary_names,
            itinerary_images: data.correlated_itinerary_images,
            event_links,
            event_names: data.correlated_event_names,
            event_images: data.correlated_event_images,
            breadcrumbs: [
                {
                    title: 'All Points Of Interest',
                    link: '/all-pois'
                },
                {
                    title: data.type,
                    link: `/pois/${id}`
                }
            ]
        }
    },
    data() {
        return {}
    }
}
</script>

<style scoped></style>
