<template>
    <div class="container-fluid text-center">
        <div
            class="title-row row p-5 justify-content-center"
            :style="`background-image: url(${coverImageLink});`"
        >
            <h1 class="display-4">{{ title }}</h1>
            {{ subtitle }}
        </div>
        <div class="row mt-3 justify-content-center">
            <Card
                v-for="(element, index) of elementList"
                :key="`card-${index}`"
                :title="element.title"
                :description="element.description ? element.description : ''"
                :link="element.link"
                :image-link="element.imageLink"
            />
        </div>
    </div>
</template>

<script>
import Card from '~/components/Card'

export default {
    name: 'IntroductoryPage',
    components: {Card},
    props: {
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            required: true
        },
        coverImageLink: {
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

<style scoped></style>
