<template>
    <nav class="navbar shadow navbar-expand-lg navbar-light px-3 header bg-primary justify-content-lg-center">
        <div>
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li v-for="(navItem, navItemIndex) of footerList" :key="`navItem${navItemIndex}`"
                    class="nav-item text-primary">
                    <NuxtLink :to="navItem.path" class="nav-link">
                        {{ navItem.name }}
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
/**
 * Component for the footer of the website
 */
export default {
    name: 'TheFooter',
    data() {
        return {
            /**
             * List of links to show in the footer
             */
            footerList: [
                {
                    name: 'Privacy',
                    path: '/privacy'
                },
                {
                    name: 'Contacts',
                    path: '/contacts'
                },
                {
                    name: 'About us',
                    path: '/About-us'
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

<style lang="scss">
</style>
