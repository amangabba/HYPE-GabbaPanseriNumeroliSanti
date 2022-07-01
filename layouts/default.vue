<template>
    <div class="main-page">
        <TheHeader />
        <div
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
        this.footerHeight = this.$refs.footer.$el.offsetHeight + 10
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
</style>
