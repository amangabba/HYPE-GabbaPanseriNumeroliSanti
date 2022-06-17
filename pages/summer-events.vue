<template>
<IntroductoryPage
        :title="title"
        :element-list="eventList"
        :cover-image="coverImage"
        :subtitle="subtitle"
    >
    </IntroductoryPage>
</template>

<script>
import IntroductoryPage from '~/components/IntroductoryPage'

export default {
    name: 'SummerEventsPage',
    components: { IntroductoryPage },

    async asyncData({ $axios }) {
        const { data } = await $axios.get('/api/events')
        const eventList = []
       for (const event of data) {
      if (event.season === 'Summer') {
            eventList.push({
                title: event.name,
                subtitle: event.start_date + ' - ' + event.end_date,
                imageLink: event.image_links[0],
                description: event.description,
                link: `/events/${event.id}`
            })
     }
        }
        return {
            eventList
        }
    },
    data() {
        return {
            title: 'Summer Events',
            subtitle: 'Discover the next summer events',
            coverImage: 'introductory-cover.png'
        }
    }
}
</script>
</template>