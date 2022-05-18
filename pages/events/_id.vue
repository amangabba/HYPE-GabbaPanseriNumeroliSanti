<template>
    <div class="text-center">
        <div class="row">
            <h1>{{ name }}</h1>
        </div>
        <div class="row">
            <b>{{ practical_info }}</b>
            <b>The event starts on {{ start_date }}</b>
            <b>The event ends on {{ end_date }}</b>
            <b>{{ address }}</b>
            <b>{{ season }}</b>
            <p>{{ description }}</p>
            <img class="w-50 mx-auto" :src="image_links" alt="Image" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'EventPage',
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
        }
    },
    data() {
        return {}
    },
}
</script>

<style scoped>
</style>
