<template>
    <div class="card" style="width: 18rem">
        <div
            class="card-img-top card-image"
            :style="{ 'background-image': 'url(' + map_link + ')' }"
        ></div>
        <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <p class="card-text">{{ duration }} minutes</p>
            <div class="btn btn-primary btn-orange" @click="goToItinerary()">
                Open
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardItineraryComponent',
    props: {
        id: {
            type: Number,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        duration: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        map_link: {
            type: String,
            required: true,
        },
    },
    methods: {
        goToItinerary() {
            this.$router.push(`/itineraries/${this.id}`)
        },
    },
}
</script>

<style scoped>
.card {
    border: 2px solid lightgray;
}

.card:hover {
    border: 2px solid orange;
}

.btn-orange {
    background-color: orange;
    border: 2px solid orange;
}

.card-image {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 160px;
}
</style>
