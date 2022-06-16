<template>
    <div
        :id="id"
        class="carousel carousel-dark slide"
        data-bs-ride="carousel"
    >
        <div class="carousel-indicators">
            <button
                v-for="index of Array(elements.length).keys()"
                :key="'button-'+index"
                type="button"
                :data-bs-target="'#'+id"
                :data-bs-slide-to="index"
                class="active"
                aria-current="true"
                :aria-label="'Slide '+index"
            ></button>
        </div>
        <div class="carousel-inner">
            <div v-if="id == 'itineraries'">
                <div v-for="(element,index) of elements"
                     :key="'carousel-'+index"
                     :class="index==0 ? 'carousel-item active' : 'carousel-item'" data-bs-interval="10000">
                    <img
                        :src="element.map_link"
                        class="d-block w-100"
                        alt="image"
                    />
                    <div class="carousel-caption d-none d-md-block">
                        <a class="btn btn-primary"
                                :href="'/' + id + '/' + element.id"
                                role="button">Open</a>
                    </div>
                </div>
            </div>
            <div v-if="id == 'events'">
                <div v-for="(element,index) of elements"
                     :key="'carousel-'+index"
                     :class="index==0 ? 'carousel-item active' : 'carousel-item'" data-bs-interval="10000">
                    <img
                        :src="element.image_links[0]"
                        class="d-block w-100"
                        alt="image"
                    />
                    <div class="carousel-caption d-none d-md-block">
                        <a class="btn btn-primary"
                           :href="'/' + id + '/' + element.id"
                           role="button">Open</a>
                    </div>
                </div>
            </div>
            <div v-if="id == 'events-only-images'">
                <div v-for="(element,index) of elements"
                     :key="'carousel-'+index"
                     :class="index==0 ? 'carousel-item active' : 'carousel-item'" data-bs-interval="10000">
                    <img
                        :src="element"
                        class="d-block w-100"
                        alt="image"
                    />
                </div>
            </div>
        </div>
        <button
            class="carousel-control-prev"
            type="button"
            :data-bs-target="'#'+id"
            data-bs-slide="prev"
        >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button
            class="carousel-control-next"
            type="button"
            :data-bs-target="'#'+id"
            data-bs-slide="next"
        >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<script>
export default {
    name: 'CustomCarousel',
    props: {
        id:{
            type: String,
            required: true,
        },
        elements: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped></style>
