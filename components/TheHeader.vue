<template>
    <nav
        class="navbar sticky-top shadow navbar-expand-lg navbar-light px-3 header bg-primary"
    >
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

                <li class="nav-item dropdown">
                    <a
                        id="navbarDropdownMenuLink"
                        class="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        All Events
                    </a>

                    <ul
                        class="dropdown-menu"
                        aria-labelledby="navbarDropdownMenuLink"
                    >
                        <li>
                            <a class="dropdown-item" href="all-events">
                                All events</a
                            >
                        </li>
                        <li>
                            <a class="dropdown-item" href="summer-events"
                                >Summer events</a
                            >
                        </li>
                        <li>
                            <a class="dropdown-item" href="winter-events"
                                >Winter events</a
                            >
                        </li>
                    </ul>
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
                }
            ]
        }
    }
}
</script>

<style lang="scss"></style>
