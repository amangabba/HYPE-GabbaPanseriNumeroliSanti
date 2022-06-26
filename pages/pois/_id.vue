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
                <carousel-component
                    :id="'pois'"
                    :only_images="true"
                    class="img-fluid h-auto col-md-3 p-3"
                    :images="image_links"
                ></carousel-component>
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
        <carousel-component
            :id="'itineraries'"
            :only_images="false"
            :id_sub-element="itinerary_ids"
            :name="itinerary_names"
            class="w-25 mx-auto text-left m-4"
            :images="itinerary_images"
        ></carousel-component>
        <div class="row bg-primary bg-opacity-10 p-2 bi-text-left mt-2 mb-2">
            <h2 ref="map-title" class="display-3">See Events that will be host in this Point of Interest: </h2>
        </div>
        <carousel-component
            :id="'events'"
            :only_images="false"
            :id_sub-element="event_ids"
            :name="event_names"
            class="w-25 mx-auto text-left m-4"
            :images="event_images"
        ></carousel-component>
    </div>
</template>

<script>
import CarouselComponent from '~/components/CustomCarousel'
import BootstrapBreadcrumbs from '~/components/BootstrapBreadcrumbs';

export default {
    name: 'POIPage',
    components: {
        CarouselComponent,
        BootstrapBreadcrumbs
    },
    async asyncData({ route, $axios }) {
        const { id } = route.params
        const { data } = await $axios.get('/api/pois/' + id)
        return {
            name: data.name,
            type: data.type,
            visit_info: data.visit_info,
            address: data.address,
            description: data.description,
            image_links: data.image_links,
            itinerary_ids: data.correlated_itinerary_IDs,
            itinerary_names: data.correlated_itinerary_names,
            itinerary_images: data.correlated_itinerary_images,
            event_ids: data.correlated_event_IDs,
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
