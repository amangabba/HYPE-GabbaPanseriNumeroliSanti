<template>
    <div class="justify-content-center container-fluid">
        <div id="content" class="container">
            <div class="row m-2">
                <BootstrapCarousel
                    id="event-carousel"
                    :images="image_links"
                    class="img-fluid h-auto col-md-3 p-3"
                />
                <div class="col-md-9 text-left p-3">
                    <p><i> Practical info: </i> {{ practical_info }}</p>
                    <p><i> The event starts on: </i> {{ start_date }}</p>
                    <p><i> The event ends on: </i> {{ end_date }}</p>
                    <p><i> Address: </i> {{ address }}</p>
                    <p>
                        <i> Location:</i>
                        <NuxtLink :to="'/pois/' + pois_link.id" >
                            {{pois_link.name}}
                        </NuxtLink>
                    </p>
                    <p><i> This event will be held in: </i> {{ season }}</p>
                    <!--link of a poi, ma non è dinamico cosi -->

                    <p v-if="season === 'Summer'">
                        <NuxtLink to="/summer-events">
                            More summer events
                        </NuxtLink>
                    </p>
                    <p v-else>
                        <NuxtLink to="/winter-events">
                            More winter events
                        </NuxtLink>
                    </p>
                    <p>{{ description }}</p>
                </div>
                    <!-- non funziona il link e non capisco perchè-->
            </div>
        </div>
        <div
            class="event-description row justify-content-center mx-auto mt-2"
        >
            <p>{{ description }}</p>
        </div>
        <SectionTitle>Other events in this location</SectionTitle>
        <BootstrapCarousel
            id="events-carousel"
            :images="events_images"
            :titles="events_names"
            :links="eventLinks"
            class="img-fluid h-auto col-md-3 p-3"
        ></BootstrapCarousel>
    </div>
</template>

<script>
import BootstrapCarousel from '~/components/BootstrapCarousel'
import SectionTitle from '~/components/SectionTitle'

export default {
    name: 'EventPage',
    components: { BootstrapCarousel, SectionTitle },
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

        const eventLinks = []
        for (const id of data.correlated_event_IDs) {
            eventLinks.push(`/events/${id}`)
        }

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
            pois_link: data.correlated_poi,
            eventLinks,
            events_names: data.correlated_event_names,
            events_images: data.correlated_event_images
        }
    },
    data() {
        return {}
    }
}
</script>

<style scoped>
</style>
