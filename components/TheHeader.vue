<template>
    <nav class="navbar navbar-expand-lg navbar-light px-3 header bg-primary">
        <a class="navbar-brand" href="/">Lambrate</a>
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggler"
            aria-controls="navbarToggler"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>

        <div id="navbarToggler" class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li
                    v-for="(navItem, navItemIndex) of headerList"
                    :key="`navItem${navItemIndex}`"
                    class="nav-item text-primary"
                >
                    <nuxt-link :to="navItem.path" class="nav-link">
                        {{ navItem.name }}
                    </nuxt-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'TheHeader',
    data() {
        return {
            headerList: [
                {
                    name: 'Home',
                    path: '/'
                },
                {
                    name: 'All Itineraries',
                    path: '/all-itineraries'
                },
                {
                    name: 'All Point Of Interests',
                    path: '/all-pois'
                },
                {
                    name: 'Main Services',
                    path: '/all-service-types'
                },
                {
                    name: 'All Events',
                    path: '/all-events'
                }
            ]
        }
    }
}
</script>

<style lang="scss">


</style>
