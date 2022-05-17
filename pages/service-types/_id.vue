<template>
    <div class="container text-center">
        <div class="row">
            <img :src="cover_link" :alt="title" />
        </div>
        <div class="row">
            <h1>{{ title }}</h1>
        </div>
        <div class="row">
            <ul class="list-group">
                <li
                    v-for="(service, index) of services"
                    :key="`service${index}`"
                    class="list-group-item"
                >
                    {{ service.name }}
                    <span class="text-muted">{{ service.address }}</span>
                    <ul class="list-group list-group-flush">
                        <li
                            v-for="(hours, day) in service.opening_hours"
                            :key="`${index}day${day}`"
                            class="list-group-item"
                        >
                            {{ hours }}
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ServiceTypePage',
    async asyncData({ route, $axios }) {
        const { id } = route.params
        const { data } = await $axios.get('/api/services/' + id)
        return {
            title: data.type,
            cover_link: data.cover_link,
            services: data.services,
        }
    },
}
</script>

<style scoped></style>
