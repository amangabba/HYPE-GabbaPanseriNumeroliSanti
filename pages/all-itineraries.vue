<template>
    <div class="page container mt-5 text-center">
        <h1 class="display-4">All Itineraries</h1>
        <div class="row mt-3">
            <CardItinerary
                v-for="itinerary of itineraryList"
                class="col-sm-2 m-2 img-thumbnail"
                :key="itinerary.id"
                :id="itinerary.id"
                :title="itinerary.title"
                :duration="itinerary.duration"
                :description="itinerary.description"
                :map_link="itinerary.map_link"
            />
        </div>
    </div>
</template>

<script>
// import CardItinerary from '~/components/CardItinerary'
export default {
    name: 'ItinerariesPage',
    components: {
    //    CardItinerary,
    },
    data() {
        return {}
    },

    async asyncData({ $axios }) {
        const { data } = await $axios.get('/api/itineraries')
        console.log(data)
        return {
            itineraryList: data,
        }
    },

}
</script>
