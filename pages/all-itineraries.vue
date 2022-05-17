<template>
    <div class="page container mt-5 text-center">
        <h1 class="display-4">All Itineraries</h1>
        <div class="row mt-3 justify-content-center">
            <CardItinerary
                v-for="itinerary of itineraryList"
                :id="itinerary.id"
                :key="itinerary.id"
                class="col-sm-2 m-2 img-thumbnail"
                :title="itinerary.title"
                :duration="itinerary.duration"
                :description="itinerary.description"
                :map_link="itinerary.map_link"
                :poi_list="itinerary.poi_list"
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

    async asyncData({ $axios }) {
        const { data } = await $axios.get('/api/itineraries')
        return {
            itineraryList: data,
        }
    },
    data() {
        return {}
    },
}
</script>
