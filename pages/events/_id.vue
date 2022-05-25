<template>
    <div class="justify-content-center container-fluid">
        <div
            class="title-row row p-5 text-center bg-primary bg-opacity-50 mb-5"
        >
            <h6 class="display-4">{{ name }}</h6>
        </div>
        <div class="row m-2">
            <img
                class="col-md-6 h-auto text-center"
                :src="image_links[0]"
                alt="Image"
            />
            <div class="col-md-6 text-left p-2">
                <b>{{ practical_info }}</b>
                <!-- in che senso? io non le metterei--->
                <p>The event starts on: {{ start_date }}</p>
                <p>The event ends on: {{ end_date }}</p>
                <p>Address: {{ address }}</p>
                <p>Location: (link of a poi)</p>
                <!--link of a poi-->
                <p>{{ season }}</p>
            </div>
        </div>
        <div class="row justify-content-center mx-auto mt-2">
            <p>{{ description }}</p>
        </div>
        <div class="row justify-content-center mx-auto mt-2">
            <p>Other event in this location</p>
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
            end_date: data.end_date
        }
    },
    data() {
        return {}
    }
}
</script>

<style scoped></style>
