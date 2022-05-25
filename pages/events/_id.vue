<template>
    <div class="justify-content-center container-fluid">
        <div class="title-row row p-5 text-center bg-primary bg-opacity-50 mb-5">
            <h6 class="display-4">{{ name }}</h6>
        </div>
        <div class="row m-2">
            <carousel-component class="w-25 mx-auto text-left" :cover-image-links="image_links"></carousel-component>
            <!--<img class="col-md-6 h-auto text-center" :src="image_links[0]" alt="Image" /> -->
            <div class="col-md-6 text-left p-2">
                <font face="Arial" size="4px">
                    <p>{{ practical_info }}</p> <!-- in che senso? io non le metterei--->
                    <p> <i> The event starts on </i>: {{ start_date }}</p>
                    <p> <i> The event ends on </i>: {{ end_date }}</p>
                    <p> <i> Address </i>: {{ address }}</p>
                    <p> <i> Location </i>: <a href="/pois/5"> Palazzina di Caccia Stupinigi </a></p>
                    <!--link of a poi, ma non è dinamico cosi-->
                    <p>{{ season }}</p>
                </font>
            </div>
        </div>
        <div class="row justify-content-center mx-auto mt-2">
            <font face="Arial" size="4px">
                <p> {{ description }} </p>
            </font>
        </div>
        <div class="row justify-content-center mx-auto mt-2">
            <p> Other event in this location </p>
        </div>
    </div>
</template>

<script>
import CarouselComponent from '~/components/CustomCarousel'
export default {
    name: 'EventPage',
    components: {CarouselComponent},
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
            end_date: data.end_date
        }
    },
    data() {
        return {}
    }
}
</script>

<style scoped>
</style>
