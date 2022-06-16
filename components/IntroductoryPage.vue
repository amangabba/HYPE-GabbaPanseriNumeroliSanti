<template>
    <div class="container-fluid text-center">
        <div
            class="title-row row p-5 justify-content-center w-100 m-0"
            :style="`background-image: url('/images/${coverImage}');`"
        >
            <h1 class="display-4">{{ title }}</h1>
            {{ subtitle }}
        </div>
        <div class="row mt-3 justify-content-center w-100">
            <Card
                v-for="(element, index) of elementList"
                :key="`card-${index}`"
                :title="element.title"
                :subtitle="element.subtitle"
                :description="element.description ? element.description : ''"
                :link="element.link"
                :image-link="element.imageLink"
            />
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Card from '~/components/Card'
import Footer from '~/components/Footer'

export default {
    name: 'IntroductoryPage',
    components: {
        Card,
        Footer
    },
    props: {
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            required: true
        },
        coverImage: {
            type: String,
            required: true
        },
        elementList: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
.title-row {
    background-position-x: center;
    background-position-y: -50px;
    text-shadow: 2px 4px black;
    color: white;
    font-size: larger;
}
.row > * {
    padding-right: 0;
    padding-left: 0;
}
</style>
