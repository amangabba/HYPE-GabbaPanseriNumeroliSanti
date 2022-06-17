<template>
    <!-- Footer -->
    <footer
        class="text-center text-lg-start bg-primary"
    >
        <div class="container text-center text-md-start mt-1">
            <div class="row mt-3">
                <div
                    v-for="(navItem, navItemIndex) of footerList"
                    :key="`navItem${navItemIndex}`"
                    class="text-center col-md-2 col-lg-2 col-xl-2 mx-auto mb-4"
                >
                    <nuxt-link :to="navItem.path" class="nav-link text-black">
                        {{ navItem.name }}
                    </nuxt-link>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer",
    data() {
        return {
            footerList: [
                {
                    name: 'The Town',
                    path: '/the-town'
                },
                {
                    name: 'Travel Information',
                    path: '/travel-information'
                },
                {
                    name: 'Privacy',
                    path: '/privacy'
                },
                {
                    name: 'Contacts',
                    path: '/contacts'
                },
                {
                    name: 'Coronavirus Update',
                    path: '/coronavirus-update'
                },
            ]
        }
    }
}
</script>

<style lang="scss">

</style>
