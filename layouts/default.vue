<template>
    <div class="main-page">
        <the-header />
        <div class="container-fluid">
            <div class="row">
                <div class="col-1">
                    <ul class="nav nav-pills">
                        <li
                            v-for="(navEl, index) of navLinks"
                            :key="`navLink${index}`"
                            class="nav-item"
                        >
                            <NuxtLink :to="navEl.link" class="nav-link">{{
                                navEl.name
                            }}</NuxtLink>
                        </li>
                    </ul>
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
    data() {
        return {
            navLinks: [
                {
                    name: 'Home',
                    link: '/',
                },
                {
                    name: 'Services',
                    link: '/all-service-types',
                },
            ],
        }
    },
}
</script>
