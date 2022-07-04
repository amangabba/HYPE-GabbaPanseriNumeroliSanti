<template>
    <div
        class="row justify-content-center text-center p-5 bg-primary bg-opacity-50"
    >
        <img v-if="iconUrl" :src="iconUrl" :alt="title" />
        <h1 class="display-4">
            <span class="title-background" :style="titleBGStyle">{{
                title
            }}</span>
        </h1>
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
        },
        /**
         * A valid css color for the background of the title
         * Can be used to improve contrast and text readability
         */
        titleBackground: {
            type: String,
            required: false,
            default: null
        }
    },
    computed: {
        titleBGStyle() {
            return '{' + this.titleBackground
                ? `background-color: ${this.titleBackground};`
                : '' + '}'
        }
    }
}
</script>

<style scoped>
.title-background {
    padding: 10px;
    display: inline-block;
}
</style>
