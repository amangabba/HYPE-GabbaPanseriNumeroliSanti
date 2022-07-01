<template>
    <div>
        <PageTitle
            class="title-row align-content-center mb-2"
            title="Welcome to Turin"
            title-background="rgba(0,0,0,0.4)"
        />

        <div class="row justify-content-center">
            <BootstrapCard
                class="homepage-card"
                title="Learn more about the town"
                link="/the-town"
                image-link="/images/turin-town.jpg"
                :horizontal="true"
            >
                Turin is the capital city of Piedmont and of the Metropolitan
                City of Turin, and was the first Italian capital from 1861 to
                1865. The city has a rich culture and history, and it is near to
                the alps, so it has something for everyone.
            </BootstrapCard>

            <BootstrapCard
                class="homepage-card"
                title="Travel info"
                link="/travel-info"
                image-link="/images/turin-transports.webp"
                :horizontal="true"
            >
                Turin is a big metropolis, learn about the various ways to reach
                it and how to move around the city while you are here.
            </BootstrapCard>
        </div>

        <div class="row justify-content-center">
            <div class="homepage-card">
                <SectionTitle>Featured itineraries</SectionTitle>
                <div class="row justify-content-center">
                    <BootstrapCarousel
                        id="itineraries-carousel"
                        :images="itinerariesImages"
                        :titles="itinerariesNames"
                        :links="itinerariesLinks"
                        class="col-md-4"
                    />
                </div>
            </div>

            <div class="homepage-card">
                <SectionTitle>Next events</SectionTitle>
                <div class="row justify-content-center">
                    <BootstrapCarousel
                        id="events-carousel"
                        :images="eventsImages"
                        :titles="eventsNames"
                        :links="eventsLinks"
                        class="col-md-4"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PageTitle from '~/components/PageTitle'
import BootstrapCard from '~/components/BootstrapCard'
import SectionTitle from '~/components/SectionTitle'
import BootstrapCarousel from "~/components/BootstrapCarousel";

export default {
    name: 'HomePage',
    components: { PageTitle, BootstrapCard, SectionTitle, BootstrapCarousel },
    head() {
        return {
            title: 'Welcome to Turin!',
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: `Visit Turin, all of it's magical places and everything it has to offer: through different itineraries and multiple events!`
                }
            ]
        }
    },
    async asyncData({ $axios }) {
        const { data: eventsData } = await $axios.get('/api/next-events')
        const { data: itinerariesData } = await $axios.get('/api/featured-itineraries')
        console.log(eventsData)
        const eventsNames = []
        const eventsLinks = []
        const eventsImages = []
        for (const event of eventsData) {
            eventsNames.push(event.name)
            eventsLinks.push(`/events/${event.id}`)
            eventsImages.push(event.image_links[0])
        }

        const itinerariesNames = []
        const itinerariesLinks = []
        const itinerariesImages = []
        for (const itinerary of itinerariesData) {
            itinerariesNames.push(itinerary.title)
            itinerariesLinks.push(`/itineraries/${itinerary.id}`)
            itinerariesImages.push(itinerary.map_link)
        }

        return {
            eventsNames,
            eventsLinks,
            eventsImages,
            itinerariesNames,
            itinerariesLinks,
            itinerariesImages
        }
    }
}
</script>

<style scoped>
.title-row {
    background-image: url('/images/turin-cover.webp');
    background-position-x: center;
    background-position-y: -110px;
    height: 500px;
    text-shadow: 2px 4px black;
    color: white;
    font-size: larger;
}
.homepage-card {
    max-width: 1195px;
}
</style>
