<template>
    <div class="container text-center">
        <div class="row justify-content-center p-5 bg-primary bg-opacity-50">
            <img :src="cover_link" :alt="title" width="150px" />
            <h1 class="display-4">{{ title }}</h1>
        </div>
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
                                        <div
                                            class="col text-end my-auto"
                                            v-html="formatHours(hours)"
                                        ></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--        <div class="row justify-content-center">-->
        <!--            <h4>Other Service Types</h4>-->
        <!--            <div class="col-3">-->
        <!--                <div class="card flex-row align-items-center" style="width: 18rem;">-->
        <!--                    <div class="col-1">-->
        <!--                        <NuxtLink :to="`service-types/${previous.id}`">-->
        <!--                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="70" class="bi bi-chevron-compact-left" viewBox="0 0 16 16">-->
        <!--                                <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/>-->
        <!--                            </svg>-->
        <!--                        </NuxtLink>-->
        <!--                    </div>-->
        <!--                    <div class="col">-->
        <!--                        <img :src="previous.cover_link" class="card-img-top" :alt="previous.type">-->
        <!--                        <div class="card-body">-->
        <!--                            <h5 class="card-title">{{ previous.type }}</h5>-->
        <!--                        </div>-->
        <!--                    </div>-->
        <!--                </div>-->
        <!--            </div>-->
        <!--            <div class="col-3 align-self-end">{{next}}</div>-->
        <!--        </div>-->
    </div>
</template>

<script>
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
            previous
        }
    },
    methods: {
        formatHours: (arr) => {
            let res = ''
            const padNum = (num) => {
                const split = num.toFixed(2).split('.')
                return split[0].padStart(2, '0') + ':' + split[1]
            }
            arr.forEach((subArr) => {
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
