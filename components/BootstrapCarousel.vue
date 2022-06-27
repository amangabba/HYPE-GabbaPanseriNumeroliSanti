<template>
    <div :id="id" class="carousel carousel-dark slide" data-bs-ride="carousel">
        <!-- Indicators to quickly navigate between non-adjacent slides -->
        <div class="carousel-indicators">
            <button
                v-for="index of Array(images.length).keys()"
                :key="'button-' + index"
                type="button"
                :data-bs-target="'#' + id"
                :data-bs-slide-to="index"
                class="active"
                aria-current="true"
                :aria-label="'Slide ' + index"
            ></button>
        </div>

        <!-- Slides of the carousel -->
        <div class="carousel-inner">
            <div
                v-for="(image, index) of images"
                :key="'carousel-' + index"
                :class="index === 0 ? 'carousel-item active' : 'carousel-item'"
                data-bs-interval="10000"
            >
                <!-- Image of the slide -->
                <img :src="image" class="d-block w-100" :alt="titles ? titles[index] : `Slide ${index}`" />
                <!-- Caption for the slide, shown only if titles or links are available -->
                <div
                    v-if="titles || links"
                    class="carousel-caption d-none d-md-block"
                >
                    <!-- Title of the slide -->
                    <h5 v-if="titles">{{titles[index]}}</h5>
                    <!-- Link to see more about the slide -->
                    <NuxtLink
                        v-if="links"
                        :to="links[index]"
                    >
                        <button type="button" class="btn btn-primary">See More</button>
                    </NuxtLink>
                </div>
            </div>
        </div>
        <!-- Controls for navigating the carousel back and forth -->
        <button
            class="carousel-control-prev"
            type="button"
            :data-bs-target="'#' + id"
            data-bs-slide="prev"
        >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button
            class="carousel-control-next"
            type="button"
            :data-bs-target="'#' + id"
            data-bs-slide="next"
        >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<script>
export default {
    name: 'BootstrapCarousel',
    props: {
        /**
         * Unique id of the carousel
         */
        id: {
            type: String,
            required: true
        },
        /**
         * List of image urls
         */
        images: {
            type: Array,
            required: true
        },
        /**
         * Optional list of titles for the images
         */
        titles: {
            type: Array,
            required: false,
            default: null
        },
        /**
         * Optional list of links associated with the images
         */
        links: {
            type: Array,
            required: false,
            default: null
        }
    }
}
</script>

<style scoped></style>
