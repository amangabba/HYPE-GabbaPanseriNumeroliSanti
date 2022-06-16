<template>
    <div class="text-center container-fluid">
        <div
            class="title-row row p-5 text-center bg-primary bg-opacity-50 mb-5"
        >
            <h1>{{ name }}</h1>
        </div>
        <div class="row">
            <p><i>Visit Information</i>: {{ visit_info }}</p>
            <p><i>Address of the Point of Interest</i>: {{ address }}</p>
            <p>{{ description }}</p>

            <h3 class="title-row row m-2 mb-3">Gallery</h3>
            <div class="row m-2 justify-content-md-center">
                <img
                    class="w-25 mh-auto p-2 border border-dark rounded"
                    :src="image_links[0]"
                    alt="Image"
                />
                <img
                    class="w-25 mh-auto p-2 border border-dark rounded"
                    :src="image_links[0]"
                    alt="Image"
                />
                <img
                    class="w-25 mh-auto p-2 border border-dark rounded"
                    :src="image_links[0]"
                    alt="Image"
                />
                <img
                    class="w-25 mh-auto p-2 border border-dark rounded"
                    :src="image_links[0]"
                    alt="Image"
                />
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
        <Footer></Footer>
    </div>
</template>

<script>
import CarouselComponent from '~/components/CustomCarousel'
import Footer from '~/components/Footer'
export default {
    name: 'POIPage',
    components: {
        CarouselComponent,
        Footer,
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
