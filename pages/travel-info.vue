<template>
    <div class="justify-content-center container">
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
export default {
    name: 'TravelInfoPage',
    layout: 'single-topic',
    head() {
        return {
            title: 'Turin - Travel Information',
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: `Everything you need to know about how to reach and move around the city of Turin`
                }
            ]
        }
    },
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
