<template>
    <div class="justify-content-center container">
        <!-- Section with the links to the 3 parts of the "Travel Info" page -->
        <div class="container">
            <ul class="nav nav-pills mt-2">
                <li class="nav-item">
                    <NuxtLink
                        ref="navLinks"
                        class="nav-link"
                        aria-current="page"
                        to="/travel-info"
                    >
                        Reach the city
                    </NuxtLink>
                </li>

                <li class="nav-item">
                    <NuxtLink
                        ref="navLinks"
                        class="nav-link"
                        to="/travel-info/move-around"
                    >
                        Move around the city
                    </NuxtLink>
                </li>

                <li class="nav-item">
                    <NuxtLink
                        ref="navLinks"
                        class="nav-link"
                        to="/travel-info/luggage-deposit"
                    >
                        Deposit your luggage
                    </NuxtLink>
                </li>
            </ul>

            <hr />
        </div>

        <NuxtChild class="mt-3" />
    </div>
</template>

<script>
/**
 * Page containing 3 structural links to the sections of "Travel Info"
 */
export default {
    name: 'TravelInfoPage',
    layout: 'single-topic',
    head() {
        return {
            title: 'Travel Information - Turin',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: `Everything you need to know about how to reach and move around the city of Turin`
                }
            ]
        }
    },
    // Set page information in store to render it
    created() {
        this.$store.commit('setPageInfo', { title: 'Travel info' })
    }
}
</script>

<style scoped>
.nav {
    font-size: larger;
}
</style>
