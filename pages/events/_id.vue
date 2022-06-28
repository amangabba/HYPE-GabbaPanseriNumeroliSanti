<template>
    <div class="justify-content-center container-fluid">
        <div id="content" class="container">
            <div class="row m-1">
                <BootstrapCarousel
                    id="event-carousel"
                    :images="image_links"
                    class="img-thumbnail w-50 col-md-3 h-auto text-center"
                />
                <div class="event-info-container col-6 text-left p-4">
                    <p><i> Practical info: </i> {{ practical_info }}</p>
                    <!-- in che senso? io non le metterei--->
                    <p><i> The event starts on: </i> {{ start_date }}</p>
                    <p><i> The event ends on: </i> {{ end_date }}</p>
                    <p><i> Address: </i> {{ address }}</p>
                    <p>
                        <i> Location:</i>
                        <NuxtLink to="/pois/5">
                            Palazzina di Caccia Stupinigi
                        </NuxtLink>
                    </p>
                    <!--link of a poi, ma non è dinamico cosi-->
                    <p>{{ season }}</p>
                </div>
            </div>
            <div
                class="event-description row justify-content-center mx-auto mt-2"
            >
                <p>{{ description }}</p>
            </div>
            <div
                class="title-row row p-3 text-center bg-primary bg-opacity-50 mb-5r"
            >
                <h2 class="display-5">Other events in this location</h2>
            </div>
        </div>
    </div>
</template>

<script>
import BootstrapCarousel from '~/components/BootstrapCarousel'
export default {
    name: 'EventPage',
    components: {
        BootstrapCarousel
    },
    layout: 'multiple-topic',
    async asyncData({ route, store, from, $axios }) {
        const { id } = route.params
        const { data } = await $axios.get('/api/events/' + id)

        let prevPageTitle = 'All Events'
        let prevPageLink = '/events'
        // If the user is coming from the winter/summer events introductory page
        // have the breadcrumbs point to that page
        if (from?.name === 'winter-events' || from?.name === 'summer-events') {
            let words = from.name.split('-')
            words = words.map(
                (word) => word[0].toUpperCase() + word.substring(1)
            )
            prevPageTitle = words.join(' ')
            prevPageLink = from.path
        }
        const breadcrumbs = [
            {
                title: prevPageTitle,
                link: prevPageLink
            },
            {
                title: data.name,
                link: `/events/${id}`
            }
        ]
        // Set page information in store to render them in the page layout
        store.commit('setPageInfo', { title: data.name, breadcrumbs })

        return {
            from,
            name: data.name,
            practical_info: data.practical_info,
            description: data.description,
            address: data.address,
            image_links: data.image_links,
            season: data.season,
            start_date: data.start_date,
            end_date: data.end_date,
            pois_link: data.correlated_poi
        }
    },
    data() {
        return {}
    }
}
</script>

<style scoped>
.event-info-container {
}
.event-description {
}
</style>
