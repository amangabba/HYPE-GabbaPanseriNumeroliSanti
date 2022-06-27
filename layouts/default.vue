<template>
    <div class="main-page">
        <TheHeader />
        <div class="page-content container-fluid">
            <div class="row">
                <Nuxt />
            </div>
        </div>
        <TheFooter class="page-footer" />
    </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'

export default {
    name: 'DefaultLayout',
    components: {
        TheHeader,
        TheFooter
    }
}
</script>

<style>
.main-page {
    position: relative;
    min-height: 100vh;
}
.page-content {
    padding-bottom: 56px;
}
.page-footer {
    position: absolute;
    width: 100%;
    height: 56px;
    bottom: 0;
}
</style>
