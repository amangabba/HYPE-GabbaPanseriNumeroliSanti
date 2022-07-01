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
                Put itineraries here
            </div>

            <div class="homepage-card">
                <SectionTitle>Next events</SectionTitle>
                Put events here
            </div>
        </div>
    </div>
</template>

<script>
import PageTitle from '~/components/PageTitle'
import BootstrapCard from '~/components/BootstrapCard'
import SectionTitle from '~/components/SectionTitle'

export default {
    name: 'HomePage',
    components: { PageTitle, BootstrapCard, SectionTitle }
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
