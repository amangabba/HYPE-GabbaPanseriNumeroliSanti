<template>
    <div class="justify-content-center container-fluid">
        <div id="content" class="container">
            <div class="row m-2">
                <BootstrapCarousel
                    v-if="image_links.length"
                    id="event-carousel"
                    :images="image_links"
                    class="col-md-6"
                />
                <div class="col-md-6 text-left p-3">
                    <p>
                        <i> <b> The event starts on: </b> </i> {{ start_date }}
                    </p>
                    <p>
                        <i><b> The event ends on: </b> </i> {{ end_date }}
                    </p>
                    <p>
                        <i><b> Practical information: </b></i>
                    </p>
                    <!-- Pratical info are added in a different way because in this way we can control the style of the text ( spaces, new line, new paragraph etc.)-->
                    <p v-html="practical_info"></p>
                    <p>
                        <i><b> Address: </b></i> {{ address }}
                    </p>
                    <p>
                        <i><b> Location: </b></i>
                        <NuxtLink :to="'/pois/' + pois_link.id">
                            {{ pois_link.name }}
                        </NuxtLink>
                    </p>
                    <p>
                        <i><b> This event will be held in: </b> </i>
                        {{ season }}
                    </p>
                    <!--Different link if we are in the page of a summer event or a winter one.-->
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
                </div>
            </div>
            <!-- Description is added in a different way because in this way we can control the style of the text ( spaces, new line, new paragraph etc.)-->
            <SectionTitle class="row m-2 mt-4 mb-4">Description</SectionTitle>
            <div class="row m-2 mt-4 mb-4" v-html="description"></div>

            <div v-if="events_images.length">
                <div class="row justify-content-center">
                    <SectionTitle>Next events in this location</SectionTitle>

                    <BootstrapCarousel
                        id="events-carousel"
                        :images="events_images"
                        :titles="events_names"
                        :links="eventLinks"
                        class="col-md-4"
                    />
                </div>
            </div>
        </div>
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

        const temp1 = data.practical_info.replace(/\n/g, '<br />')
        const infoWithBr = temp1.replace(/\t/g, '&nbsp')
        const descriptionWithBr = data.description.replace(/\n/g, '<br />')

        return {
            from,
            name: data.name,
            practical_info: infoWithBr,
            description: descriptionWithBr,
            address: data.address,
            image_links: data.image_links,
            season: data.season,
            start_date: data.start_date_string,
            end_date: data.end_date_string,
            pois_link: data.correlated_poi,
            eventLinks,
            events_names: data.correlated_event_names,
            events_images: data.correlated_event_images
        }
    },
    data() {
        return {}
    },
    head() {
        return {
            title: this.name + ' - Events in Turin'
        }
    }
}
</script>

<style scoped></style>
