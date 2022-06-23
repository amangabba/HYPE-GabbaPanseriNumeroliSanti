<template>
    <nav
        class="navbar sticky-bottom shadow navbar-expand-lg navbar-light px-3 header bg-primary justify-content-lg-center"
    >
        <!--<button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggler1"
            aria-controls="navbarToggler"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>-->

        <div>
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li
                    v-for="(navItem, navItemIndex) of footerList"
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
    <!--
    <footer class="text-center text-lg-start bg-primary">
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
    -->
</template>

<script>
export default {
    name: 'FooterComponent',
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
                    path: '/contacts-component'
                },
                {
                    name: 'Coronavirus Update',
                    path: '/coronavirus-update'
                }
            ]
        }
    }
}
</script>

<style lang="scss"></style>
