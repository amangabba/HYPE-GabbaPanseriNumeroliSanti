<template>
    <div>
        <!-- No content here: all introductory pages are equal, so the html for the content is directly in the layout -->
    </div>
</template>

<script>
export default {
    name: 'WinterEventsPage',
    layout: 'introductory',
    async asyncData({ store, $axios }) {
        const { data } = await $axios.get('/api/events')

        // Build a list of objects representing events
        const eventList = []
        for (const event of data) {
            if (event.season === 'Winter') {
                eventList.push({
                    title: event.name,
                    subtitle: event.start_date + ' - ' + event.end_date,
                    imageLink: event.image_links[0],
                    description: event.description,
                    link: `/events/${event.id}`
                })
            }
        }

        // Set page information in store to render them in the page layout
        store.commit('setPageInfo', {
            title: 'Winter Events',
            subtitle: 'Discover the next winter events',
            imageUrl: '/images/introductory-cover.png'
        })
        store.commit('setIntroductoryPageElements', eventList)

        return {
            eventList
        }
    }
}
</script>
