<template>
    <div class="card" style="width: 18rem">
        <div
            class="card-img-top card-image"
            :style="{ 'background-image': 'url(' + image_links[0] + ')' }"
        ></div>
        <div class="card-body">
            <h5 class="card-title">{{ name }}</h5>
            <p class="card-text">
                {{ practical_info }}
            </p>
            <div class="btn btn-primary btn-orange" @click="goToEvents()">
                Open
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardEventComponent',
    props: {
        id: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        practical_info: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        image_links: {
            type: Array,
            required: true
        },
        season: {
            type: String,
            required: true
        },
        start_date: {
            type: String, // credo!
            required: true
        },
        end_date: {
            type: String, // credo!
            required: true
        }
    },
    methods: {
        goToEvents() {
            this.$router.push(`/events/${this.id}`)
        }
    }
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
