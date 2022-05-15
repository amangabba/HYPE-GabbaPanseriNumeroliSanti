<template>
    <div class="text-center">
        <div class="row">
            <h1>{{ title }}</h1>
        </div>
        <div class="row">
            <b>The itinerary lasts {{ duration }} minutes</b>
            <p>{{ description }}</p>
            <img class="w-50 mx-auto" :src="map_link" alt="Map" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'ItineraryPage',
    data () {
        return {

        }
    },
    async asyncData({ route, $axios }) {
        const { id } = route.params
        const { data } = await $axios.get('/api/itineraries/' + id)
        return {
            title: data.title,
            duration: data.duration,
            description: data.description,
            map_link: data.map_link,
        }
    },
}
</script>

<style scoped></style>
