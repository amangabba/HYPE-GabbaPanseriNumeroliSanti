<template>
    <div class="main-page">
        <TheHeader />
        <div class="container-fluid">
            <div class="row">
                <Nuxt />
            </div>
        </div>
        <Footer class="fixed-bottom"></Footer>
    </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'
import Footer from '~/components/Footer.vue'

export default {
    name: 'DefaultLayout',
    components: {
        TheHeader,
        Footer
    }
}
</script>

<style lang="scss">
body,
nuxt-link {
    background-color: var(--bs-primary-background);
    color: var(--bs-primary-dark);
}
.btn {
    background-color: var(--bs-primary-light);
}
</style>
