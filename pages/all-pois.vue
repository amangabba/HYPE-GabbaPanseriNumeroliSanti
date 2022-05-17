<template>
    <div class="page container mt-5 text-center">
        <h1 class="display-4">All POIs</h1>
        <div class="row mt-3">
            <CardPOI
                v-for="poi of poiList"
                class="col-sm-2 m-2 img-thumbnail"
                :key="poi.id"
                :id="poi.id"
                :name="poi.name"
                :type="poi.type"
                :visit_information="poi.visit_information"
                :description="poi.description"
                :poi_link="poi.poi_link"
            />
        </div>
    </div>
</template>

<script>
// import CardPOI from '~/components/CardPOI'
export default {
    name: 'poisPage',
    components: {
        //    CardPOI,
    },
    data() {
        return {}
    },

    async asyncData({ $axios }) {
        const { data } = await $axios.get('/api/pois')
        console.log(data)
        return {
            poiList: data,
        }
    },

}
</script>
