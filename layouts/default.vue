<template>
    <div class="main-page">
        <the-header />
        <div class="container">
            <div class="row">
                <Nuxt />
            </div>
        </div>
    </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'

export default {
    name: 'DefaultLayout',
    components: {
        TheHeader,
    }
}
</script>
