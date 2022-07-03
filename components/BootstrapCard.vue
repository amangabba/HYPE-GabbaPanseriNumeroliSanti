<template>
    <div class="card-container">
        <!-- Horizontal Bootstrap card -->
        <div v-if="horizontal" class="custom-card card mb-3 m-2 shadow-sm">
            <div class="row no-gutters">
                <!-- Image of the card -->
                <div class="col-md-4">
                    <nuxt-img :src="imageLink" class="card-img" :alt="title" format="webp" loading="lazy" />
                </div>
                <!-- Body of the card -->
                <div class="col-md-8">
                    <div class="card-body d-flex flex-column h-100">
                        <!-- Title of the card -->
                        <h5 class="card-title">{{ title }}</h5>

                        <!-- Slot for customizing the content of the card -->
                        <p class="card-text">
                            <slot />
                        </p>

                        <!-- Link to see more about the card -->
                        <NuxtLink :to="link" class="btn btn-primary mt-auto align-self-center">
                            See more
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>

        <!-- Vertical Bootstrap card -->
        <div
            v-else
            class="custom-card custom-card-vertical card mt-3 m-2 shadow-sm"
        >
            <!-- Image of the card -->
            <nuxt-img :src="imageLink" class="card-img-top" :alt="title" format="webp" loading="lazy" />
            <div class="card-body d-flex flex-column align-items-center">
                <!-- Title of the card -->
                <h5 class="card-title">{{ title }}</h5>
                <!-- Subtitle of the card -->
                <h6 class="card-subtitle mb-2 text-muted">{{ subtitle }}</h6>

                <!-- Slot for customizing the content of the card -->
                <p class="card-text">
                    <slot />
                </p>

                <!-- Link to see more about the card -->
                <NuxtLink :to="link" class="btn btn-primary mt-auto">
                    See more
                </NuxtLink>
            </div>
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
         * Link to the topic that the card is describing
         */
        link: {
            type: String,
            required: true
        },
        horizontal: {
            type: Boolean,
            required: false,
            default: false
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
.custom-card-vertical {
    height: 96%;
}
.custom-card .card-body .btn {
    max-width: 150px;
}
</style>
