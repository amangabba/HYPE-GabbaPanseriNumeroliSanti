<template>
    <div class="justify-content-center container-fluid">
        <div id="content" class="container">
            <div id="info" class="mx-auto">
                <p>
                    <b> LAMbRate </b>
                    is a cultural association for the city of Turin. Founded in
                    2022 by Leonardo Panseri, Aman Gabba, Matteo Santi, and Rita
                    Numeroli, they love the city of Turin and decided to create
                    a website so that anyone can appreciate the city, just like
                    they do. The creators are four engineers, that study at
                    Politecnico di Milano and they implement this website as the
                    final project for the course Hypermedia Applications.
                </p>
                <p>
                    Our goal is to communicate to anyone the beauty of the city
                    and to help locals and tourists experience the city to the
                    fullest. On this website, there is all the information that
                    they might need in a single place so that they don't have to
                    browse different websites to get all the information that
                    they need. This organization aims to promote Turin as a
                    tourist destination for leisure, sport, nature, culture,
                    individual and group trips, conferences, conventions,
                    incentive travel, and business travel.
                </p>
            </div>

            <SectionTitle>Goals</SectionTitle>

            <div id="goals" class="mx-auto">
                <p>
                    The organization has many objectives that aim to enhance the
                    city of Turin, such as:
                </p>
                <ul>
                    <li>organise all the actions for promoting Turin</li>
                    <li>
                        welcome and provide information to tourists coming for
                        leisure purposes
                    </li>
                    <li>
                        make local counscious of the beauty of the city they
                        live in and about the activity it offers
                    </li>
                    <li>
                        create tourism products and services that meet the needs
                        of tourists, and organisers of events
                    </li>
                    <li>
                        facilitate and extend people's stay in the territory
                    </li>
                    <li>
                        increase the tourist flows and the number of events.
                    </li>
                </ul>
            </div>

            <SectionTitle>Actions</SectionTitle>

            <div id="actions" class="mx-auto">
                <p>
                    This work consists of communication developing and producing
                    information material for promotion and hosting which
                    presents the “Turin and Province” product in an integrated
                    and appealing way according to the needs and trends of the
                    market in Italy and abroad. What we do is create a website,
                    useful for both locals and tourists, In fact residents can
                    always be updated with the latest events and activity
                    available in the city, while tourists can learn more about
                    the spectacular churches and museums that the city offers.
                    It also consists of promoting the area to the domestic and
                    international press and the professional operators in the
                    leisure sector, as well as to end-users who are increasingly
                    becoming the direct receivers of such communication. The
                    work also involves welcoming tourists to the Tourist bureaus
                    and presenting candidacies for securing major conference
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import SectionTitle from '~/components/SectionTitle'

export default {
    name: 'AboutUs',
    components: { SectionTitle },
    layout: 'single-topic',
    head() {
        return {
            title: 'About Us - Turin',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: `Who are we? Our goals and our actions.`
                }
            ]
        }
    },
    created() {
        this.$store.commit('setPageInfo', { title: 'About us' })
    }
}
</script>

<style scoped>
#goals,
#actions {
    max-width: 80%;
}
</style>
