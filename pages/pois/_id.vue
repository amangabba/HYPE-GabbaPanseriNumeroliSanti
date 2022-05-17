<template>
    <div class="text-center">
        <div class="row">
            <h1>{{ name }}</h1>
        </div>
        <div class="row">
            <b>{{ visit_information }}</b>
            <p>{{ description }}</p>
            <img class="w-50 mx-auto" :src="poi_link" alt="Map" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'POIPage',
    data () {
        return {

        }
    },
    async asyncData({ route, $axios }) {
        const { id } = route.params
        const { data } = await $axios.get('/api/pois/' + id)
        return {
            name: data.name,
            visit_information: data.visit_information,
            description: data.description,
            poi_link: data.poi_link,
        }
    },
}
</script>

<style scoped></style>
