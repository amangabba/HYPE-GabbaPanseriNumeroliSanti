<template>
    <div class="text-center container-fluid">
        <div class="row">
            <h1>{{ title }}</h1>
        </div>
        <div class="row">
            <b>The itinerary lasts {{ duration }} minutes</b>
            <p>{{ description }}</p>
            <img class="w-25 mx-auto" :src="map_link" alt="Map" />
        </div>
        <div class="row justify-content-center p-1">
            <client-only>
                <l-map
                    style="width: 500px; height: 400px; max-width: 90%"
                    :zoom="map_zoom"
                    :center="map_center"
                >
                    <l-tile-layer
                        :url="map_url"
                        :attribution="map_attribution"
                    ></l-tile-layer>
                    <l-marker
                        v-for="(poi, index) of poi_list"
                        :key="index"
                        :lat-lng="poi.lat_long"
                    >
                        <l-popup>
                            <a :href="baseUrl + poi.id"
                                >{{ poi.number }} - {{ poi.name }}</a
                            >
                        </l-popup>
                    </l-marker>
                </l-map>
            </client-only>
        </div>
        <div>
            <li v-for="poi in poi_list" :key="poi.number">
                {{ poi.number }} - {{ poi.name }}
            </li>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ItineraryPage',
    async asyncData({ route, $axios }) {
        const { id } = route.params
        const { data } = await $axios.get('/api/itineraries/' + id)
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
            map_url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            map_attribution:
                '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            map_zoom: 13,
            map_center: [45.07654, 7.68372],
            // TODO: Find a better way to use baseUrl
            baseUrl:
                process.env.NODE_ENV === 'production'
                    ? 'https://lambrate-hypermedia.herokuapp.com/pois/'
                    : 'http://localhost:3000/pois/'
        }
    }
}
</script>

<style scoped></style>
