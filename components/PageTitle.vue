<template>
    <div
        class="row justify-content-center text-center p-5 bg-primary bg-opacity-50"
    >
        <img v-if="iconUrl" :src="iconUrl" :alt="title" />
        <h1 class="display-4">{{ title }}</h1>
        <span v-if="subtitle">{{ subtitle }}</span>
    </div>
</template>

<script>
/**
 * Component for a row containing an icon, a title and a subtitle.
 * This is meant as the cover for the pages.
 */
export default {
    name: 'PageTitle',
    props: {
        /**
         * The title of the page
         */
        title: {
            type: String,
            required: true
        },
        /**
         * The subtitle of the page
         */
        subtitle: {
            type: String,
            required: false,
            default: null
        },
        /**
         * The URL to the icon of the page
         */
        iconUrl: {
            type: String,
            required: false,
            default: null
        }
    }
}
</script>

<style scoped></style>
