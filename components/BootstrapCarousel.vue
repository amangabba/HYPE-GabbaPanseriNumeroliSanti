<template>
    <div
        :id="id"
        ref="carousel"
        class="carousel slide p-0"
        data-bs-ride="carousel"
    >
        <!-- Indicators to quickly navigate between non-adjacent slides -->
        <div class="carousel-indicators">
            <button
                v-for="index of Array(images.length).keys()"
                :key="'button-' + index"
                type="button"
                :data-bs-target="'#' + id"
                :data-bs-slide-to="index"
                :class="index === 0 ? 'active' : ''"
                aria-current="true"
                :aria-label="'Slide ' + index"
            ></button>
        </div>

        <!-- Slides of the carousel -->
        <div ref="carouselImageContainer" class="carousel-inner">
            <div
                v-for="(image, index) of images"
                :key="'carousel-' + index"
                :class="
                    'h-100 position-relative ' +
                    (index === 0 ? 'carousel-item active' : 'carousel-item')
                "
                data-bs-interval="10000"
            >
                <!-- Image of the slide -->
                <nuxt-img
                    ref="carouselImages"
                    :src="image"
                    class="d-block w-100 carousel-image"
                    :alt="titles ? titles[index] : `Slide ${index}`"
                    format="webp"
                    loading="lazy"
                />
                <!-- Caption for the slide, shown only if titles or links are available -->
                <div v-if="titles || links" class="carousel-caption">
                    <!-- Title of the slide -->
                    <h3 v-if="titles" class="h5">{{ titles[index] }}</h3>
                    <!-- Link to see more about the slide -->
                    <NuxtLink v-if="links" :to="links[index]">
                        <button type="button" class="btn btn-primary">
                            See more
                        </button>
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
         * Flag to vertically align images that are not tall enough to fill the carousel slide
         */
        centerImages: {
            type: Boolean,
            required: false,
            default: true
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
    },
    mounted() {
        // Set the height of the slide container to the height of the first image
        // to prevent resizing when images have different heights.
        // Taller images will be cropped to fit in this height
        const firstSlideImg = this.$refs.carouselImages[0].$el

        const resizeCarouselImageContainer = () => {
            // Need to check if the carousel element is still defined because this will be called by the
            // load event listener even when switching pages before that the image has finished loading
            if (this.$refs.carousel)
                this.$refs.carousel.style.height = `${firstSlideImg.offsetHeight}px`
        }

        // Resize the container when the page is loaded and whenever the window is resized
        firstSlideImg.onload = resizeCarouselImageContainer
        window.onresize = resizeCarouselImageContainer

        if (this.centerImages) {
            // Center the image vertically if it is not tall enough to fill the container
            // We need to do this when the image is loaded to ensure correct positioning
            for (const image of this.$refs.carouselImages) {
                const imgEl = image.$el
                imgEl.addEventListener('load', () => {
                    imgEl.style.position = 'absolute'
                    imgEl.style.top = '50%'
                    imgEl.style.transform = 'translateY(-50%)'
                })
            }
        }
    }
}
</script>

<style scoped>
.carousel-inner {
    height: 100%;
}
.carousel-image {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
}
.carousel-indicators {
    background-color: rgba(0, 0, 0, 0.8);
}
.carousel-control-next {
    background-color: rgba(0, 0, 0, 0.8);
}
.carousel-control-prev {
    background-color: rgba(0, 0, 0, 0.8);
}
.carousel-caption h3 {
    background-color: rgba(0, 0, 0, 0.8);
    width: fit-content;
    margin: auto auto 5px;
    padding: 5px;
}
</style>
