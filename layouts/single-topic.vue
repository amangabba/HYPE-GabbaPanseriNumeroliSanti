<template>
    <DefaultLayout>
        <!-- Row containing the title of the page -->
        <PageTitle
            class="title-row"
            :title="title"
            :subtitle="subtitle"
            :icon-url="iconUrl"
        />

        <!-- Content of this page -->
        <Nuxt />
    </DefaultLayout>
</template>

<script>
import DefaultLayout from '~/layouts/default'

export default {
    name: 'SingleTopicLayout',
    components: {
        DefaultLayout
    },
    computed: {
        title() {
            return this.$store.state.pageTitle
        },
        subtitle() {
            return this.$store.state.pageSubtitle
        },
        iconUrl() {
            return this.$store.state.pageImageUrl
        },
        breadcrumbs() {
            return this.$store.state.pageBreadcrumbs
        }
    }
}
</script>

<style scoped></style>
