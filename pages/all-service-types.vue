<template>
    <div class="container">
        <h1>Main Services</h1>
        <p>Discover the main services present in Torino</p>
        <div
            v-for="(serviceType, index) of serviceTypeList"
            :key="`serviceType${index}`"
            class="card mt-3"
            style="width: 300px"
        >
            <img
                :src="serviceType.cover_link"
                class="card-img-top"
                :alt="serviceType.type"
                width="300px"
            />
            <div class="card-body">
                <h5 class="card-title">{{ serviceType.type }}</h5>
                <NuxtLink
                    :to="`/service-types/${serviceType.id}`"
                    class="btn btn-primary"
                    >See all</NuxtLink
                >
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ServiceTypesPage',
    async asyncData({ $axios }) {
        const { data } = await $axios.get('/api/services')
        return {
            serviceTypeList: data,
        }
    },
}
</script>

<style scoped></style>
