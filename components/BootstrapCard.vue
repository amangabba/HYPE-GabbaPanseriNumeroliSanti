<template>
    <div class="custom-card card mt-3 col-sm-2 m-2 shadow-sm">
        <!-- Image of the card -->
        <img :src="imageLink" class="card-img-top" :alt="title" />
        <div class="card-body d-flex flex-column align-items-center">
            <!-- Title of the card -->
            <h5 class="card-title">{{ title }}</h5>
            <!-- Subtitle of the card -->
            <h6 class="card-subtitle mb-2 text-muted">{{ subtitle }}</h6>
            <!-- Description of the card -->
            <p>
                {{ description }}
            </p>
            <!-- Link to see more about the card -->
            <NuxtLink :to="link" class="btn btn-primary mt-auto">
                See more
            </NuxtLink>
        </div>
    </div>
</template>

<script>
/**
 * Component for a Boostrap card with an image, a title, a subtitle, a description and a link
 */
export default {
    name: 'BootstrapCard',
    props: {
        /**
         * Link to the image to show in the card
         */
        imageLink: {
            type: String,
            required: true
        },
        /**
         * Title of the card
         */
        title: {
            type: String,
            required: true
        },
        /**
         * Subtitle of the card
         */
        subtitle: {
            type: String,
            default: ''
        },
        /**
         * Description of the card
         */
        description: {
            type: String,
            required: true
        },
        /**
         * Link to the topic that the card is describing
         */
        link: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.custom-card:hover {
    border: 2px solid var(--bs-primary);
}
.custom-card {
    border: 2px solid rgba(0, 0, 0, 0);
}
</style>
