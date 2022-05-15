<template>
    <div class="main-page">
        <the-header />
        <div class="container-fluid">
            <div class="row">
                <div class="col-1">
                    <h4>Sidebar</h4>
                </div>
                <div class="col">
                    <nuxt />
                </div>
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
    },
}
</script>
