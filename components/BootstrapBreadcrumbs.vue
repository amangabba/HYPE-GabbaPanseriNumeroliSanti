<template>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li
                v-for="(el, i) in elements"
                :key="`breadcrumb${i}`"
                :class="`breadcrumb-item${
                    i === elements.length - 1 ? ' active' : ''
                }`"
            >
                <!-- Show a link to the page if this is not the current page (last element in the array) -->
                <NuxtLink v-if="i !== elements.length - 1" :to="el.link">{{
                    el.title
                }}</NuxtLink>
                <span v-else>{{ el.title }}</span>
            </li>
        </ol>
    </nav>
</template>

<script>
/**
 * Component to show breadcrumbs using bootstrap styles
 */
export default {
    name: 'BootstrapBreadcrumbs',
    props: {
        /**
         * An array of objects, each object must have the attributes: 'title', 'link'
         */
        elements: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
nav {
    --bs-breadcrumb-divider: '>';
}
</style>
