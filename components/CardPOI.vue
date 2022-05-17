<template>
    <div class="card" style="width: 18rem">
        <div
            class="card-img-top card-image"
            :style="{ 'background-image': 'url(' + image_links[0] + ')' }"
        ></div>
        <div class="card-body">
            <h5 class="card-title">{{ name }}</h5>
            <p class="card-text">
                {{ type }}
            </p>
            <p class="card-text">
                {{ visit_info }}
            </p>
            <div class="btn btn-primary btn-orange" @click="goToDetails()">
                Open
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'CardPOIComponent',
    props: {
        id: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        visit_info: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        image_links: {
            type: Array,
            required: true,
        },
    },
    methods: {
        goToDetails() {
            this.$router.push(`/pois/${this.id}`)
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
