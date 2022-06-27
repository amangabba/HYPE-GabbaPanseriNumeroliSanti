<template>
    <iframe
        :id="id"
        class="row justify-content-center mx-auto mt-2"
        :height="height"
        :width="width"
        :src="
            'https://www.openstreetmap.org/export/embed.html?bbox=' +
            String(center_long - diff_long) +
            '%2C' +
            String(center_lat - diff_lat) +
            '%2C' +
            String(center_long + diff_long) +
            '%2C' +
            String(center_lat + diff_lat) +
            '&layer=mapnik&marker=' +
            marker_lat +
            '%2C' +
            marker_long
        "
    >
    </iframe>
</template>

<script>
export default {
    name: 'CustomCard',
    props: {
        id: {
            type: String,
            required: false,
            default: ''
        },
        height: {
            type: String,
            default: '300px'
        },
        width: {
            type: String,
            default: '700px'
        },
        center_long: {
            type: Number,
            required: true
        },
        center_lat: {
            type: Number,
            required: true
        },
        diff_long: {
            type: Number,
            default: 0.0069
        },
        diff_lat: {
            type: Number,
            default: 0.00248
        },
        marker_long: {
            type: Number,
            required: false,
            default: 0
        },
        marker_lat: {
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
