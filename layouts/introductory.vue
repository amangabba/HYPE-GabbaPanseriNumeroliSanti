<template>
    <DefaultLayout>
        <div class="introductory-page">
            <!-- Row containing the title of the page -->
            <PageTitle
                :title="title"
                :subtitle="subtitle"
                class="title-row w-100 m-0"
                :style="`background-image: url('${coverImage}');`"
            />

            <div class="container mt-3 mb-3">
                <!-- Row containing cards generated from 'elementList' -->
                <div
                    class="row row-cols-1 row-cols-md-2 row-cols-lg-4 justify-content-center w-100"
                >
                    <BootstrapCard
                        v-for="(element, index) of elementList"
                        :key="`card-${index}`"
                        :title="element.title"
                        :subtitle="element.subtitle"
                        :link="element.link"
                        :image-link="element.imageLink"
                        class="col"
                    >
                        {{ element.description ? element.description : '' }}
                    </BootstrapCard>
                </div>
            </div>

            <!-- Content of this page -->
            <Nuxt />
        </div>
    </DefaultLayout>
</template>

<script>
import DefaultLayout from '~/layouts/default'
import BootstrapCard from '~/components/BootstrapCard'

/**
 * Layout for introductory pages.
 * Data for the page title component and data for generating the cards representing the multiple topic instances
 * must be set in the store when using this template.
 */
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
