<template>
    <!--    <div class="page container mt-5 text-center">-->
    <!--        <h1 class="display-4">All Events</h1>-->
    <!--        <div class="row mt-3 justify-content-center">-->
    <!--            <CardEvent-->
    <!--                v-for="event of eventList"-->
    <!--                :id="event.id"-->
    <!--                :key="event.id"-->
    <!--                class="col-sm-2 m-2 img-thumbnail"-->
    <!--                :name="event.name"-->
    <!--                :practical_info="event.practical_info"-->
    <!--                :description="event.description"-->
    <!--                :address="event.address"-->
    <!--                :image_links="event.image_links"-->
    <!--                :season="event.season"-->
    <!--                :start_date="event.start_date"-->
    <!--                :end_date="event.end_date"-->
    <!--            />-->
    <!--        </div>-->
    <!--    </div>-->
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
    name: 'EventsPage',
    components: { IntroductoryPage },

    async asyncData({ $axios }) {
        const { data } = await $axios.get('/api/events')
        const eventList = []
        for (const event of data) {
            eventList.push({
                title: event.name,
                subtitle: event.start_date + ' - ' + event.end_date,
                imageLink: event.image_links[0],
                description: event.description,
                link: `/events/${event.id}`
            })
        }
        return {
            eventList
        }
    },
    data() {
        return {
            title: 'All Events',
            subtitle: 'Discover the next exciting events',
            coverImage: 'introductory-cover.png'
        }
    }
}
</script>
