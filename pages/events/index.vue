<template>
    <div>
        <!-- No content here: all introductory pages are equal, so the html for the content is directly in the layout -->
    </div>
</template>

<script>
export default {
    name: 'EventsPage',
    layout: 'introductory',
    async asyncData({ store, $axios }) {
        const { data } = await $axios.get('/api/events')

        // Build a list of objects representing events
        const eventList = []
        for (const event of data) {
            eventList.push({
                title: event.name,
                subtitle:
                    event.start_date_string + ' - ' + event.end_date_string,
                imageLink: event.image_links[0],
                link: `/events/${event.id}`
            })
        }

        // Set page information in store to render them in the page layout
        store.commit('setPageInfo', {
            title: 'All Events',
            subtitle: 'Discover the next exciting events',
            imageUrl: '/images/introductory-cover.webp'
        })
        store.commit('setIntroductoryPageElements', eventList)

        return {
            eventList
        }
    },
    head() {
        return {
            title: 'Events - Turin',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: `Discover the next exciting events in Turin!`
                }
            ]
        }
    }
}
</script>
