<template>
    <div class="container text-center">
        <div class="row justify-content-center p-5 bg-primary bg-opacity-50">
            <img :src="cover_link" :alt="title" width="150px" />
            <h1 class="display-4">{{ title }}</h1>
        </div>
        <BootstrapBreadcrumbs :elements="breadcrumbs" />
        <div class="row mb-5 justify-content-center mt-2">
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
                                    <span class="fw-bold">{{
                                        service.name
                                    }}</span>
                                    <br />
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
                                        <div class="col text-end my-auto">
                                            <div
                                                v-for="(
                                                    element, i
                                                ) of formatHours(hours)"
                                                :key="'openingHours' + i"
                                            >
                                                {{ element }}
                                            </div>
                                        </div>
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
import BootstrapBreadcrumbs from "~/components/BootstrapBreadcrumbs";

function checkOpen(services) {
    const weekday = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ]
    const result = services.map(() => 'Now Closed')
    for (let i = 0; i < services.length; i++) {
        const date = new Date()
        const hours = date.getHours()
        let open = false
        services[i].opening_hours[weekday[date.getDay()]].forEach((arr) => {
            if (hours >= arr[0] && hours <= arr[1]) open = true
        })

        if (open) result[i] = 'Now Open'
    }
    return result
}

function getNextAndPrevious(serviceTypes, currentId) {
    currentId = parseInt(currentId)
    const lastId = serviceTypes.length
    let nextId, previousId

    if (currentId <= 1) {
        previousId = lastId
    } else {
        previousId = currentId - 1
    }

    if (currentId >= lastId) {
        nextId = 1
    } else {
        nextId = currentId + 1
    }

    return {
        next: serviceTypes[nextId - 1],
        previous: serviceTypes[previousId - 1]
    }
}

export default {
    name: 'ServiceTypePage',
    components: { BootstrapBreadcrumbs },
    async asyncData({ route, $axios }) {
        const { id } = route.params
        const { data } = await $axios.get('/api/service-types/' + id)
        const serviceTypeData = data.serviceType
        const otherServiceTypes = data.otherServiceTypes
        const { next, previous } = getNextAndPrevious(otherServiceTypes, id)
        return {
            title: serviceTypeData.type,
            cover_link: serviceTypeData.cover_link,
            services: serviceTypeData.services,
            serviceStatus: checkOpen(serviceTypeData.services),
            otherServiceTypes,
            next,
            previous,
            breadcrumbs: [
                {
                    title: 'Main Services',
                    link: '/all-service-types'
                },
                {
                    title: serviceTypeData.type,
                    link: `/service-types/${id}`
                },
            ]
        }
    },
    methods: {
        formatHours: (arr) => {
            const res = []
            const padNum = (num) => {
                const split = num.toFixed(2).split('.')
                return split[0].padStart(2, '0') + ':' + split[1]
            }
            arr.forEach((subArr) => {
                res.push(padNum(subArr[0]) + ' - ' + padNum(subArr[1]))
            })
            if (res.length === 0) res.push('Closed')
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
