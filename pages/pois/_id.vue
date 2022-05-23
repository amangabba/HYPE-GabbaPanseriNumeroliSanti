<template>
    <div class="text-center">
        <div class="row">
            <h1>{{ name }}</h1>
        </div>
        <div class="row">
            <b>{{ type }}</b>
            <b>{{ visit_info }}</b>
            <b>{{ address }}</b>
            <p>{{ description }}</p>
            <img class="w-50 mx-auto" :src="image_links[0]" alt="Image" />
            <img class="w-50 mx-auto" :src="image_links[1]" alt="Image" />
        <br>
        </div>
        <h3 class="text-left">See correlated Points of Interest:</h3>
        <carousel-component
            class="w-25 mx-auto text-left" :cover-image-links="image_links"
        ></carousel-component>
    </div>
</template>

<script>
import CarouselComponent from '~/components/CustomCarousel'
export default {
    name: 'POIPage',
    components: {CarouselComponent},
    async asyncData({ route, $axios }) {
        const { id } = route.params
        const { data } = await $axios.get('/api/pois/' + id)
        return {
            name: data.name,
            type: data.type,
            visit_info: data.visit_info,
            address: data.address,
            description: data.description,
            image_links: data.image_links
        }
    },
    data() {
        return {}
    }
}
</script>

<style scoped></style>
