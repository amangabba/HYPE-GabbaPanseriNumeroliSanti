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
                <NuxtLink v-if="i !== elements.length - 1" :to="el.link">{{
                    el.title
                }}</NuxtLink>
                <span v-else>{{ el.title }}</span>
            </li>
        </ol>
    </nav>
</template>

<script>
export default {
    name: 'BootstrapBreadcrumbs',
    props: {
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
