<template>
    <DefaultLayout>
        <!-- Row containing the title of the page -->
        <PageTitle
            class="title-row"
            :title="title"
            :subtitle="subtitle"
            :icon-url="iconUrl"
        />

        <!-- Breadcrumbs for this page -->
        <BootstrapBreadcrumbs :elements="breadcrumbs" />

        <!-- Content of this page -->
        <Nuxt />
    </DefaultLayout>
</template>

<script>
import DefaultLayout from '~/layouts/default'

/**
 * Layout for multiple topic pages.
 * Data for the page title and breadcrumbs components must be set in the store when
 * using this template.
 */
export default {
    name: 'MultipleTopicLayout',
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
