<template>
    <div class="justify-content-center container-fluid">
        <div
            class="title-row row p-5 text-center bg-primary bg-opacity-50 mb-5"
        >
            <h1>{{ name }}</h1>
        </div>
        <div id="content" class="container">
            <div class="row m-1">
                <carousel-component
                    :id="'events-only-images'"
                    class="img-thumbnail w-50 col-md-3 h-auto text-center"
                    :elements="image_links"
                ></carousel-component>
                <div class="col-6 text-left p-4">
                    <p><i>Visit Information</i>: {{ visit_info }}</p>
                    <p>
                        <i>Address of the Point of Interest</i>: {{ address }}
                    </p>
                    <p>{{ description }}</p>
                </div>
            </div>
        </div>
        <h3 class="title-row row m-2">
            See Itineraries for this Point of Interest:
        </h3>
        <carousel-component
            :id="'itineraries'"
            class="w-25 mx-auto text-left"
            :elements="itineraries_links"
        ></carousel-component>
        <h3 class="title-row row m-2">
            See Events that will be host in this Point of Interest:
        </h3>
        <carousel-component
            :id="'events'"
            class="w-25 mx-auto text-left"
            :elements="events_links"
        ></carousel-component>
    </div>
</template>

<script>
import CarouselComponent from '~/components/CustomCarousel'
export default {
    name: 'POIPage',
    components: {
        CarouselComponent
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
            itineraries_links: data.correlated_itineraries,
            events_links: data.correlated_events,
            pois_links: data.correlated_pois
        }
    },
    data() {
        return {}
    }
}
</script>

<style scoped></style>
