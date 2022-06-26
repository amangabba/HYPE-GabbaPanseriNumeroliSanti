<template>
    <div class="row m-2 text-center">
        <div v-for="(element, elementIndex) of travelInfoList"
             :key="`navItem${elementIndex}`"
             class="col-md-4">
            <a class="btn btn-primary mx-4 p-2" :href="element.path">{{ element.name }}</a>
        </div>
    </div>
</template>

<script>
export default {
    name: "TravelInfoButtons",
    data() {
        return {
            travelInfoList: [
                {
                    name: 'How to move around the city',
                    path: '/move-around'
                },
                {
                    name: 'Where to deposit your luggage',
                    path: '/deposit-luggage'
                },
                {
                    name: 'How to reach the city',
                    path: '/reach-the-city'
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>
