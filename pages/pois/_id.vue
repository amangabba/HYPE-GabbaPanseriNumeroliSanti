<template>
    <div class="text-center">
        <div class="row">
            <h1>{{ name }}</h1>
        </div>
        <div class="row">
            <b>{{ type }}</b>
            <b>{{ visit_info }}</b>
            <p>{{ description }}</p>
            <img class="w-50 mx-auto" :src="image_links[0]" alt="Image" />
            <img class="w-50 mx-auto" :src="image_links[1]" alt="Image" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'POIPage',
    async asyncData({ route, $axios }) {
        const { id } = route.params
        const { data } = await $axios.get('/api/pois/' + id)
        return {
            name: data.name,
            type: data.type,
            visit_info: data.visit_info,
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
