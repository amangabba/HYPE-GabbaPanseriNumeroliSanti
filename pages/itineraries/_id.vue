<template>
    <div class="text-center container-fluid">
        <div class="row">
            <h1>{{ title }}</h1>
        </div>
        <div class="row">
            <b>The itinerary lasts {{ duration }} minutes</b>
            <p>{{ description }}</p>
            <img class="w-25 mx-auto" :src="map_link" alt="Map"/>
        </div>

        <div class="row justify-content-center mx-auto">
            <div class="col-md-6 p-5">
                <table class="table table-hover">
                    <thead>
                    <tr>
                        <th colspan="4">Points of Interest</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="poi in poi_list" :key="poi.number">
                        <td>{{ poi.number }} - {{ poi.name }}</td>
                        <td><a class="btn btn-primary" :href="baseUrl + poi.id" target="_blank">Open the page</a></td>
                        <td>
                            <button class="btn btn-primary" @click="putMarker(poi.latitude, poi.longitude)">Show on
                                Map
                            </button>
                        </td>
                        <!--                        <td colspan="3">
                                                    {{ poi.number }} - {{ poi.name }} <br>
                                                    <a class="btn btn-primary m-1" :href="baseUrl + poi.id" target="_blank">Open the page</a>
                                                    <button class="btn btn-primary m-1" @click="putMarker(poi.latitude, poi.longitude)">Show on Map</button>
                                                </td>-->
                    </tr>
                    </tbody>
                </table>
            </div>
            <!--            <div class="col p-5">
                            <h4 class="row">Points of Interest</h4>
                            <div v-for="poi in poi_list" :key="poi.number">
                                <p class="col-sm-6">{{poi.number}} - {{poi.name}}</p>
                                <p class="col-sm-3">Link 1</p>
                                <p class="col-sm-3">Link 2</p>
                            </div>
                        </div>-->
            <div id="map-parent" class="col-md-6 p-5" style="display: none;">
                <iframe
                    id="map"
                    height="100%" width="740px"
                    :src="'https://www.openstreetmap.org/export/embed.html?bbox='+ String(map_center[1]-long_diff) +'%2C' + String(map_center[0]-lat_diff) + '%2C' + String(map_center[1]+long_diff) + '%2C' + String(map_center[0]+lat_diff) + '&amp;layer=mapnik'"
                    style="border: 1px solid black; max-width: 100%; min-width: 200px">
                </iframe>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'ItineraryPage',
    async asyncData({route, $axios}) {
        const {id} = route.params
        const {data} = await $axios.get('/api/itineraries/' + id)
        return {
            title: data.title,
            duration: data.duration,
            description: data.description,
            map_link: data.map_link,
            poi_list: data.poi_list
        }
    },
    data() {
        return {
            map_center: [45.07654, 7.68372],
            api_key: 'AIzaSyCpJuxtJ0sCVOLCTFUyfWbOPPzRqPbyf-c',
            map_marker: [],
            lat_diff: 0.00248,
            long_diff: 0.00690,
            // TODO: Find a better way to use baseUrl
            baseUrl:
                process.env.NODE_ENV === 'production'
                    ? 'https://lambrate-hypermedia.herokuapp.com/pois/'
                    : 'http://localhost:3000/pois/'
        }
    },
    methods: {
        putMarker(lat, long) {
            const map = document.getElementById('map')
            map.src = 'https://www.openstreetmap.org/export/embed.html?bbox=' + String(long - this.long_diff) + '%2C' + String(lat - this.lat_diff) + '%2C' + String(long + this.long_diff) + '%2C' + String(lat + this.lat_diff) + '&layer=mapnik&marker=' + lat + '%2C' + long
            map.parentElement.style.display = null
        },
    }
}
</script>

<style scoped></style>
