<template>
    <DefaultLayout>
        <div class="introductory-page">
            <PageTitle
                :title="title"
                :subtitle="subtitle"
                class="title-row w-100 m-0"
                :style="`background-image: url('${coverImage}');`"
            />
            <!-- Row containing cards generated from 'elementList' -->
            <div class="row mt-3 justify-content-center w-100">
                <BootstrapCard
                    v-for="(element, index) of elementList"
                    :key="`card-${index}`"
                    :title="element.title"
                    :subtitle="element.subtitle"
                    :description="
                        element.description ? element.description : ''
                    "
                    :link="element.link"
                    :image-link="element.imageLink"
                />
            </div>

            <Nuxt />
        </div>
    </DefaultLayout>
</template>

<script>
import DefaultLayout from '~/layouts/default'
import BootstrapCard from '~/components/BootstrapCard'

export default {
    name: 'IntroductoryLayout',
    components: { DefaultLayout, BootstrapCard },
    computed: {
        title() {
            return this.$store.state.pageTitle
        },
        subtitle() {
            return this.$store.state.pageSubtitle
        },
        coverImage() {
            return this.$store.state.pageImageUrl
        },
        elementList() {
            return this.$store.state.introductoryPageElements
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
