<template>
    <div class="page container mt-5 text-center">
        <h1 class="display-4">All Events</h1>
        <div class="row mt-3 justify-content-center">
            <CardEvent
                v-for="event of eventList"
                :id="event.id"
                :key="event.id"
                class="col-sm-2 m-2 img-thumbnail"
                :name="event.name"
                :practical_info="event.practical_info"
                :description="event.description"
                :address="event.address"
                :image_links="event.image_links"
                :season="event.season"
                :start_date="event.start_date"
                :end_date="event.end_date"
            />
        </div>
    </div>
</template>

<script>
// import CardEvent from '~/components/CardEvent'
export default {
    name: 'EventsPage',
    components: {
        //    CardEvent,
    },

    async asyncData({ $axios }) {
        const { data } = await $axios.get('/api/events')
        console.log(data)
        return {
            eventList: data
        }
    },
    data() {
        return {}
    }
}
</script>
