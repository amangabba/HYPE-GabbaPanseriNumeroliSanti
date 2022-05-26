<template>
    <div
        :id="id"
        class="carousel carousel-dark slide"
        data-bs-ride="carousel"
    >
        <div class="carousel-indicators">
            <button
                v-for="index of Array(coverImageLinks.length).keys()"
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
            <div v-for="(img,index) of coverImageLinks" :key="'carousel-'+index" :class="index==0 ? 'carousel-item active' : 'carousel-item'" data-bs-interval="10000">
                <img
                    :src="img"
                    class="d-block w-100"
                    alt="..."
                />
                <div class="carousel-caption d-none d-md-block">
                    <!--ToDo: metti a posto bottone per il carosello-->
                    <button class="btn btn-primary" href="baseUrl + elements_id[index]" role="button">Open</button>
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
        coverImageLinks: {
            type: Array,
            required: true
        },
        elements_id: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped></style>
