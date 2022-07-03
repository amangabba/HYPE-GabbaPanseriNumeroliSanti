<template>
    <div class="container-fluid text-center">
        <div class="container">
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
                                        <div
                                            class="row w-100 align-items-center"
                                        >
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

            <SectionTitle>Other service types</SectionTitle>

            <div class="row justify-content-center">
                <!-- Links to other service types -->
                <BootstrapCarousel
                    id="service-types-carousel"
                    :images="otherServiceTypeImages"
                    :center-images="false"
                    :titles="otherServiceTypeNames"
                    :links="otherServiceTypeLinks"
                    class="col-md-4"
                />
            </div>
        </div>
    </div>
</template>

<script>
import BootstrapCarousel from '~/components/BootstrapCarousel'
import SectionTitle from '~/components/SectionTitle'

/**
 * Checks if each service is closed or open based on current system time
 * @param services a list of services
 * @returns {String[]} a list of human-readable strings that tell if the service is open or closed
 */
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

/**
 * Page containing a list of services of a given service type
 */
export default {
    name: 'ServiceTypePage',
    components: { BootstrapCarousel, SectionTitle },
    layout: 'multiple-topic',
    async asyncData({ route, store, $axios }) {
        const { id } = route.params
        const { data } = await $axios.get('/api/service-types/' + id)
        const serviceTypeData = data.serviceType

        const breadcrumbs = [
            {
                title: 'Main Services',
                link: '/service-types'
            },
            {
                title: serviceTypeData.type,
                link: `/service-types/${id}`
            }
        ]
        // Set page information in store to render them in the page layout
        store.commit('setPageInfo', {
            title: serviceTypeData.type,
            imageUrl: serviceTypeData.cover_link,
            breadcrumbs
        })

        // Build inputs for the carousel components to show all other service types
        const otherServiceTypeImages = []
        const otherServiceTypeNames = []
        const otherServiceTypeLinks = []
        for (const serviceType of data.otherServiceTypes) {
            otherServiceTypeImages.push(serviceType.cover_link)
            otherServiceTypeNames.push(serviceType.type)
            otherServiceTypeLinks.push(`/service-types/${serviceType.id}`)
        }

        return {
            title: serviceTypeData.type,
            coverLink: serviceTypeData.cover_link,
            services: serviceTypeData.services,
            serviceStatus: checkOpen(serviceTypeData.services),
            otherServiceTypeImages,
            otherServiceTypeNames,
            otherServiceTypeLinks
        }
    },
    head() {
        return {
            title: this.title + ' - Main Services in Turin'
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

<style>
.title-row img {
    width: 150px;
}
#service-accordion {
    max-width: 600px;
}
#service-types-carousel img {
    width: 150px !important;
    padding-bottom: 130px;
    margin: auto;
}
</style>
