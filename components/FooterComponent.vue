<template>
    <nav
        class="navbar sticky-bottom shadow navbar-expand-lg navbar-light px-3 header bg-primary justify-content-lg-center"
    >
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
