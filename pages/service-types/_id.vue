<template>
    <div class="container text-center">
        <PageTitle :title="title" :icon-url="cover_link" />

        <BootstrapBreadcrumbs :elements="breadcrumbs" />

        <div class="row mb-5 justify-content-center mt-2">
            <!-- Accordion containing services of the type -->
            <div id="service-accordion" class="accordion text-start">
                <div
                    v-for="(service, index) of services"
                    :key="`service${index}`"
                    class="accordion-item"
                >
                    <!-- Header of accordion element -->
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

                    <!-- Collapse of accordion element -->
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

        <div class="row justify-content-center">
            <!-- Links to other service types -->
            <!-- <CustomCarousel id="" images="" :only_images="false" /> -->
        </div>
    </div>
</template>

<script>
import BootstrapBreadcrumbs from '~/components/BootstrapBreadcrumbs'
import CustomCarousel from "~/components/CustomCarousel";
import PageTitle from "~/components/PageTitle";

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

export default {
    name: 'ServiceTypePage',
    components: { BootstrapBreadcrumbs, CustomCarousel, PageTitle },
    async asyncData({ route, $axios }) {
        const { id } = route.params
        const { data } = await $axios.get('/api/service-types/' + id)
        const serviceTypeData = data.serviceType
        const otherServiceTypes = data.otherServiceTypes
        return {
            title: serviceTypeData.type,
            cover_link: serviceTypeData.cover_link,
            services: serviceTypeData.services,
            serviceStatus: checkOpen(serviceTypeData.services),
            otherServiceTypes,
            breadcrumbs: [
                {
                    title: 'Main Services',
                    link: '/all-service-types'
                },
                {
                    title: serviceTypeData.type,
                    link: `/service-types/${id}`
                }
            ]
        }
    },
    methods: {
        /**
         * Formats opening hours from an array of float arrays to a human-readable string
         * @param arr an array of arrays, each sub-array contains two floats that represent a time span when the
         *            activity is open
         * @returns {String[]} an array containing opening hours for each day of the week as human-readable strings
         */
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
