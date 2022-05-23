<template>
    <div class="card mb-3" style="max-width: 80%;">
        <div class="row g-0">
            <div class="col-md-3">
                <img :src="imageLink" class="img-fluid rounded-start" :alt="imageAltText">
            </div>
            <div class="col-md-9">
                <div class="card-body">
                    <h5 class="card-title">{{ title }}</h5>
                    <p class="card-text text-muted">{{ subtitle }}</p>
                    <p class="card-text">{{ description }}</p>
                    <a class="btn btn-primary" :href="link">See Details</a>
                    <button>Show on Map</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'CustomGridCard',
    props: {
        imageLink: {
            type: String,
            required: true,
        },
        imageAltText: {
            type: String,
            default: '',
        },
        title: {
            type: String,
            required: true,
        },
        subtitle: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        link: {
            type: String,
            required: true,
        }
    }
}
</script>

<style scoped>
    .row > div {
        padding: 0;
    }
</style>
