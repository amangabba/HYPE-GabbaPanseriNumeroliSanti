<template>
    <div class="container text-center">
        <div class="row">
            <img :src="cover_link" :alt="title" />
        </div>
        <div class="row">
            <h1>{{ title }}</h1>
        </div>
        <div class="row mb-5">
            <div id="serviceAccordion" class="accordion text-start">
                <div
                    v-for="(service, index) of services"
                    :key="`service${index}`"
                    class="accordion-item"
                >
                    <h2 :id="`heading${index}`" class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="`#collapse${index}`" aria-expanded="false" :aria-controls="`collapse${index}`">
                            {{ service.name }}
                            <span class="text-muted ms-2">{{ service.address }}</span>
                        </button>
                    </h2>
                    <div :id="`collapse${index}`" class="accordion-collapse collapse" :aria-labelledby="`heading${index}`" data-bs-parent="#serviceAccordion">
                        <div class="accordion-body">
                            <ul class="list-group list-group-flush">
                                <li
                                    v-for="(hours, day) in service.opening_hours"
                                    :key="`${index}day${day}`"
                                    class="list-group-item"
                                >
                                    {{ hours }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
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
