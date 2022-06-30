<template>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li
                v-for="(el, i) in elements"
                :key="`breadcrumb${i}`"
                :class="`p-2 breadcrumb-item${
                    i === elements.length - 1 ? ' active' : ''
                }`"
            >
                <!-- Show a link to the page if this is not the current page (last element in the array) -->
                <NuxtLink
                    v-if="i !== elements.length - 1"
                    class="breadcrumb-link"
                    :to="el.link">{{ el.title}}
                </NuxtLink>
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
/* Da togliere se non convince */
.breadcrumb-link {
    color: black;
    padding: 2px 5px 2px 5px;
    border-radius: 3px;
    text-decoration: none;
    background-color: rgba(0,0,0, 0.2);
}
.breadcrumb-link:hover {
    background-color: rgba(0,0,0, 0.35);
}
</style>
