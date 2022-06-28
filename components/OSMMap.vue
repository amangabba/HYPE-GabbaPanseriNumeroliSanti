<template>
    <iframe
        class="row justify-content-center mx-auto mt-2"
        :height="height"
        :width="width"
        :src="
            'https://www.openstreetmap.org/export/embed.html?bbox=' +
            String(centerLong - diffLong) +
            '%2C' +
            String(centerLat - diffLat) +
            '%2C' +
            String(centerLong + diffLong) +
            '%2C' +
            String(centerLat + diffLat) +
            '&layer=mapnik&marker=' +
            markerLat +
            '%2C' +
            markerLong
        "
    >
    </iframe>
</template>

<script>
/**
 * Component to show an interactive OSM map centered on the given coordinates and with an optional marker
 */
export default {
    name: 'OSMMap',
    props: {
        /**
         * The height of the IFrame containing the map
         */
        height: {
            type: String,
            default: '300px'
        },
        /**
         * The width of the IFrame containing the map
         */
        width: {
            type: String,
            default: '700px'
        },
        /**
         * The longitude of the center point
         */
        centerLong: {
            type: Number,
            required: true
        },
        /**
         * The latitude of the center point
         */
        centerLat: {
            type: Number,
            required: true
        },
        diffLong: {
            type: Number,
            default: 0.0069
        },
        diffLat: {
            type: Number,
            default: 0.00248
        },
        /**
         * The longitude of the marker point
         */
        markerLong: {
            type: Number,
            required: false,
            default: 0
        },
        /**
         * The latitude of the marker point
         */
        markerLat: {
            type: Number,
            required: false,
            default: 0
        }
    }
}
</script>

<style scoped>
iframe {
    border: 1px solid black;
    min-width: 200px;
    max-width: 100%;
}
</style>
