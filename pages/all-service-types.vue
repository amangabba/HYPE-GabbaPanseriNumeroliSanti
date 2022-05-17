<template>
    <div class="page container mt-5 text-center">
        <h1 class="display-4">Main Services</h1>
        <div class="row justify-content-center">
            Discover the main services present in Torino
        </div>
        <div class="row mt-3 justify-content-center">
            <div
                v-for="(serviceType, index) of serviceTypeList"
                :key="`serviceType${index}`"
                class="card mt-3 col-sm-2 m-2"
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
