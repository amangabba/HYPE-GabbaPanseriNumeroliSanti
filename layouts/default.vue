<template>
    <div class="main-page">
        <TheHeader />
        <div class="container-fluid">
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
        TheHeader
    }
}
</script>
