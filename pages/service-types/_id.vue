<template>
    <div class="container text-center">
        <div class="row justify-content-center p-5">
            <img :src="cover_link" :alt="title" width="150px" />
            <h1 class="display-4">{{ title }}</h1>
        </div>
        <div class="row mb-5 justify-content-center">
            <div id="service-accordion" class="accordion text-start">
                <div
                    v-for="(service, index) of services"
                    :key="`service${index}`"
                    class="accordion-item"
                >
                    <div :id="`heading${index}`" class="accordion-header">
                        <div
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            :data-bs-target="`#collapse${index}`"
                            aria-expanded="false"
                            :aria-controls="`collapse${index}`"
                        >
                            <div class="row w-100">
                                <div class="col-8">
                                    <span class="fw-bold">{{ service.name }}</span>
                                    <br>
                                    <span class="text-muted">{{
                                            service.address
                                        }}</span>
                                </div>
                                <div class="col align-self-center">
                                    {{ serviceStatus[index] }}
                                </div>
                            </div>

                        </div>
                    </div>
                    <div
                        :id="`collapse${index}`"
                        class="accordion-collapse collapse"
                        :aria-labelledby="`heading${index}`"
                        data-bs-parent="#service-accordion"
                    >
                        <div class="accordion-body">
                            <ul class="list-group list-group-flush">
                                <li
                                    v-for="(
                                        hours, day
                                    ) in service.opening_hours"
                                    :key="`${index}day${day}`"
                                    class="list-group-item"
                                >
                                    <div class="row w-100 align-items-center">
                                        <div class="col-3 my-auto">
                                            {{ day }}
                                        </div>
                                        <div class="col text-end my-auto" v-html="formatHours(hours)"></div>
                                    </div>
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
function checkOpen(services) {
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const result = services.map(() => 'Now Closed')
    for (let i = 0; i < services.length; i++) {
        const date = new Date()
        const hours = date.getHours()
        let open = false
        services[i].opening_hours[weekday[date.getDay()]].forEach(arr => {
            if (hours >= arr[0] && hours <= arr[1])
                open = true
        })

        if (open) result[i] = 'Now Open'
    }
    return result
}

export default {
    name: 'ServiceTypePage',
    async asyncData({ route, $axios }) {
        const { id } = route.params
        const { data } = await $axios.get('/api/services/' + id)
        return {
            title: data.type,
            cover_link: data.cover_link,
            services: data.services,
            serviceStatus: checkOpen(data.services)
        }
    },
    methods: {
        formatHours: arr => {
            let res = ""
            const padNum = num => {
                const split = num.toFixed(2).split('.')
                return split[0].padStart(2, '0') + ":" + split[1]
            }
            arr.forEach(subArr => {
                res += padNum(subArr[0]) + ' - ' + padNum(subArr[1]) + '<br>'
            })
            if (res === '') res = 'Closed'
            else res = res.slice(0, -4)
            return res
        }
    }
}
</script>

<style scoped>
img {
 width: 150px;
}
#service-accordion {
    max-width: 600px;
}
</style>
