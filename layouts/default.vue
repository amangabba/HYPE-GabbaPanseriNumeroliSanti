<template>
    <div class="main-page">
        <TheHeader />
        <div
            ref="content"
            class="page-content container-fluid"
            :style="`padding-bottom: ${footerHeight}px`"
        >
            <!-- If this is used directly as a layout: display the page -->
            <Nuxt v-if="!$slots.default" />
            <!-- If this is used as the base template for a sub-template: display the content of the slot -->
            <slot />
        </div>
        <TheFooter ref="footer" class="page-footer" />
    </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'

/**
 * Default layout for pages, can be used to build other layouts thanks to the slot
 */
export default {
    name: 'DefaultLayout',
    components: {
        TheHeader,
        TheFooter
    },
    data() {
        return {
            footerHeight: 0
        }
    },
    mounted() {
        const contentElement = this.$refs.content
        const footerElement = this.$refs.footer.$el

        // Set the bottom padding of the content container to the total height of the footer to prevent
        // overlapping
        const setContentPadding = () => {
            contentElement.style.paddingBottom = `${
                footerElement.offsetHeight + 10
            }px`
        }

        // Calculate the padding on page load and whenever the window is resized
        setContentPadding()
        window.onresize = setContentPadding
    }
}
</script>

<style>
.main-page {
    position: relative;
    min-height: 100vh;
}
.page-footer {
    position: absolute;
    width: 100%;
    bottom: 0;
}
.navbar-light .navbar-nav .nav-link {
    font-weight: 500;
}
</style>
