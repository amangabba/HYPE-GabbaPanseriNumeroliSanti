<template>
    <nav
        class="navbar sticky-top shadow navbar-expand-lg navbar-light px-3 header bg-primary"
    >
        <!-- Name of the website -->
        <a class="navbar-brand" href="/">Torino</a>

        <!-- Button to toggle the navbar, only visible on small screens -->
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
                <!-- Add navigation links defined in 'data' -->
                <li
                    v-for="(navItem, navItemIndex) of headerList"
                    :key="`navItem${navItemIndex}`"
                    class="nav-item text-primary"
                >
                    <NuxtLink :to="navItem.path" class="nav-link">
                        {{ navItem.name }}
                    </NuxtLink>
                </li>

                <!-- Hardcoded navigation list for the events, because we need a dropdown -->
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
                            <NuxtLink class="dropdown-item" to="/events">
                                All events</NuxtLink
                            >
                        </li>
                        <li>
                            <NuxtLink class="dropdown-item" to="/summer-events"
                                >Summer events</NuxtLink
                            >
                        </li>
                        <li>
                            <NuxtLink class="dropdown-item" to="/winter-events"
                                >Winter events</NuxtLink
                            >
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
/**
 * Component for the header (main navbar) of the website
 */
export default {
    name: 'TheHeader',
    data() {
        return {
            /**
             * List of links to show in the header
             */
            headerList: [
                {
                    name: 'All Itineraries',
                    path: '/itineraries'
                },
                {
                    name: 'All Point Of Interests',
                    path: '/pois'
                },
                {
                    name: 'Main Services',
                    path: '/service-types'
                }
            ]
        }
    }
}
</script>

<style lang="scss"></style>
