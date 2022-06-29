<template>
    <div class="justify-content-center container">
        <PageTitle title="Travel Info" />

        <div class="container">
            <ul class="nav nav-tabs mt-2">
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
        </div>

        <NuxtChild class="mt-3" />
    </div>
</template>

<script>
export default {
    name: 'TravelInfoPage'
}
</script>

<style scoped>
.nav {
    font-size: larger;
}
</style>
