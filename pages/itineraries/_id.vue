<template>
    <div class="justify-content-center container-fluid">
        <div id="content" class="container">
            <div class="row m-2">
                <!-- Itinerary Map Picture -->
                <img
                    class="col-md-3 h-auto text-center"
                    :src="map_link"
                    alt="Itinerary Map Picture"
                />
                <!-- Itinerary Description -->
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

            <!-- Itinerary Interactive Map -->
            <SectionTitle ref="map-title">Interactive Map</SectionTitle>
            <div class="row text-center">
                <h4 v-if="poi_list.length > 0" ref="map-marker-info">
                    ({{ poi_list[0].number }}) {{ poi_list[0].name }} -
                    {{ poi_list[0].address }}
                </h4>
                <h4 v-else>
                    No points of interest in this itinerary, no map to show!
                </h4>
            </div>
            <OSMMap
                v-if="poi_list.length > 0"
                ref="map"
                :center-long="poi_list[0].longitude"
                :center-lat="poi_list[0].latitude"
                :marker-long="poi_list[0].longitude"
                :marker-lat="poi_list[0].latitude"
            >
            </OSMMap>

            <!-- List of POIs -->
            <SectionTitle>List of Points of Interest</SectionTitle>
            <div class="row justify-content-center mx-auto mt-2">
                <div v-if="poi_list.length === 0" class="row text-center">
                    <h4>
                        No Point of Interest in this itinerary, nothing to see
                        here!
                    </h4>
                </div>
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
                >
                    <div class="row g-0">
                        <div class="col-md-4 my-auto p-3">
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
                        <div class="col-md-8">
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
                                    <!-- Open the page regarding the POI -->
                                    <a
                                        class="col-md-2 btn btn-primary m-1 p-1"
                                        :href="'/pois/' + poi.id"
                                    >
                                        See Details
                                    </a>

                                    <!-- Button to show on map the selected POI and Scroll the map into view -->
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
import SectionTitle from '~/components/SectionTitle'

export default {
    name: 'ItineraryPage',
    components: { OSMMap, SectionTitle },
    layout: 'multiple-topic',
    async asyncData({ route, store, $axios }) {
        const { id } = route.params
        const { data } = await $axios.get('/api/itineraries/' + id)

        // Breadcrumbs for the page
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
        // Default map information
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
            this.$refs['map-title'].$el.scrollIntoView()
        }
    }
}
</script>

<style scoped>
.row > * {
    padding: 0;
}
</style>
