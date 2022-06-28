<template>
    <div class="justify-content-center container-fluid">
        <div id="content" class="container">
            <div class="row m-2">
                <img
                    class="col-md-3 h-auto text-center"
                    :src="map_link"
                    alt="Interactive Map"
                />
                <div class="col-md-9 text-left p-3">
                    <p><i>Duration:</i> {{ duration }} minutes</p>
                    <p v-if="poi_list.length">
                        <i>Starting point:</i> {{ poi_list[0].name }} ({{
                            poi_list[0].type
                        }})
                    </p>
                    <p v-if="poi_list.length > 1">
                        <i>Ending point:</i>
                        {{ poi_list[poi_list.length - 1].name }} ({{
                            poi_list[poi_list.length - 1].type
                        }})
                    </p>
                    <p><i>Description:</i> {{ description }}</p>
                </div>
            </div>
            <div class="row bg-primary bg-opacity-10 p-2 text-center mt-2 mb-2">
                <h2 ref="map-title" class="display-3">Interactive Map</h2>
            </div>
            <div class="row text-center">
                <h4 ref="map-marker-info">
                    ({{ poi_list[0].number }}) {{ poi_list[0].name }} -
                    {{ poi_list[0].address }}
                </h4>
            </div>
            <OSMMap
                ref="map"
                :center-long="poi_list[0].longitude"
                :center-lat="poi_list[0].latitude"
                :marker-long="poi_list[0].longitude"
                :marker-lat="poi_list[0].latitude"
            >
            </OSMMap>
            <div class="row bg-primary bg-opacity-10 p-2 text-center mt-2 mb-2">
                <h2 class="display-3">List of Points of Interest</h2>
            </div>
            <div class="row justify-content-center mx-auto mt-2">
                <div
                    v-for="(poi, index) in poi_list"
                    :id="`grid-card-${poi.number}`"
                    ref="grid-cards"
                    :key="'grid-card-' + index"
                    :class="
                        poi.number === 1
                            ? 'card mb-3 bg-primary bg-opacity-10'
                            : 'card mb-3'
                    "
                    style="max-width: 80%"
                >
                    <div class="row g-0">
                        <div class="col-md-3 my-auto p-3">
                            <img
                                :src="
                                    poi.image_links.length
                                        ? poi.image_links[0]
                                        : ''
                                "
                                class="img-fluid rounded-start rounded-2"
                                :alt="
                                    'Point of Interest ' + poi.name + ' image'
                                "
                            />
                        </div>
                        <div class="col-md-9">
                            <div class="card-body d-flex flex-column h-100">
                                <h5 class="card-title">
                                    ({{ poi.number }}/{{ poi_list.length }}) -
                                    {{ poi.name }}
                                </h5>
                                <p class="card-text text-muted">
                                    {{ poi.address }}
                                </p>
                                <p class="card-text">{{ poi.description }}</p>
                                <div class="row justify-content-end mt-auto">
                                    <a
                                        class="col-md-2 btn btn-primary m-1 p-1"
                                        :href="'/pois/' + poi.id"
                                        >See Details</a
                                    >
                                    <button
                                        class="col-md-2 btn btn-primary m-1 p-1"
                                        @click="
                                            putMarker(
                                                poi.number,
                                                poi.latitude,
                                                poi.longitude,
                                                poi.name,
                                                poi.address
                                            )
                                        "
                                    >
                                        Show on Map
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import OSMMap from '~/components/OSMMap'

export default {
    name: 'ItineraryPage',
    components: { OSMMap },
    layout: 'multiple-topic',
    async asyncData({ route, store, $axios }) {
        const { id } = route.params
        const { data } = await $axios.get('/api/itineraries/' + id)

        const breadcrumbs = [
            {
                title: 'All Itineraries',
                link: '/itineraries'
            },
            {
                title: data.title,
                link: `/itineraries/${id}`
            }
        ]
        // Set page information in store to render them in the page layout
        store.commit('setPageInfo', { title: data.title, breadcrumbs })

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
            map_marker: [],
            lat_diff: 0.00248,
            long_diff: 0.0069
        }
    },
    methods: {
        // Called to update the map, it's information and the selected grid card
        putMarker(key, lat, long, name, address) {
            // Update Map center
            this.$refs.map.centerLong = long
            this.$refs.map.centerLat = lat
            // Update Map marker
            this.$refs.map.markerLong = long
            this.$refs.map.markerLat = lat

            // Classes to update
            const selectedRowClasses = ['bg-opacity-10', 'bg-primary']
            for (const row of this.$refs['grid-cards']) {
                // Remove classes from all the grid cards
                row.classList.remove(...selectedRowClasses)
                if (row.id === `grid-card-${key}`) {
                    // Add classes to the selected grid card
                    row.classList.add(...selectedRowClasses)
                }
            }

            // Update the map marker information
            this.$refs['map-marker-info'].innerHTML =
                '(' + key + ') ' + name + ' - ' + address

            // Scroll into view the map
            this.$refs['map-title'].scrollIntoView()
        }
    }
}
</script>

<style scoped>
.row > * {
    padding: 0;
}
</style>
