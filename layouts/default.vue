<template>
    <div class="main-page">
        <TheHeader />
        <div class="container-fluid">
            <div class="row">
                <Nuxt />
            </div>
        </div>
        <footer-component></footer-component>
    </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'
import FooterComponent from '~/components/FooterComponent.vue'

export default {
    name: 'DefaultLayout',
    components: {
        TheHeader,
        FooterComponent
    }
}
</script>

<style>
</style>
