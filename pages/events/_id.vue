<template>
    <div class="justify-content-center container-fluid">
        <div
            class="title-row row p-3 text-center bg-primary bg-opacity-50 mb-5r"
        >
            <h2 class="display-5">{{ name }}</h2>
        </div>
        <div class="title-row row p-1 text-left bg-primary bg-opacity-10 mb-3">
            <h6-small class="display-7"> Evento </h6-small>
        </div>
        <div id="content" class="container">
            <div class="row m-1">
                <carousel-component
                    :id="'events-only-images'"
                    class="img-thumbnail w-50 col-md-3 h-auto text-center"
                    :elements="image_links"
                ></carousel-component>
                <div class="col-6 text-left p-4">
                    <font size="4px">
                        <p><i> Practical info: </i> {{ practical_info }}</p>
                        <!-- in che senso? io non le metterei--->
                        <p><i> The event starts on: </i> {{ start_date }}</p>
                        <p><i> The event ends on: </i> {{ end_date }}</p>
                        <p><i> Address: </i> {{ address }}</p>
                        <p>
                            <i> Location:</i>
                            <a href="/pois/5">
                                Palazzina di Caccia Stupinigi
                            </a>
                        </p>
                        <!--link of a poi, ma non è dinamico cosi-->
                        <p>{{ season }}</p>
                    </font>
                </div>
            </div>
            <div class="row justify-content-center mx-auto mt-2">
                <font face="Arial" size="4px">
                    <p>{{ description }}</p>
                </font>
            </div>
            <div class="row justify-content-center mx-auto mt-2">
                <p>Other event in this location</p>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import CarouselComponent from '~/components/CustomCarousel'
import Footer from '~/components/Footer'
export default {
    name: 'EventPage',
    components: {
        Footer,
        CarouselComponent
    },
    async asyncData({ route, $axios }) {
        const { id } = route.params
        const { data } = await $axios.get('/api/events/' + id)
        return {
            name: data.name,
            practical_info: data.practical_info,
            description: data.description,
            address: data.address,
            image_links: data.image_links,
            season: data.season,
            start_date: data.start_date,
            end_date: data.end_date,
            pois_link: data.correlated_poi
        }
    },
    data() {
        return {}
    }
}
</script>

<style scoped></style>
