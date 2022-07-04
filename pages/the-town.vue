<template>
    <div id="content" class="justify-content-center container">
        <div class="row m-2">
            <!-- Section with a brief description of the town -->
            <nuxt-img
                class="img-fluid col-lg-7 h-auto mt-2"
                src="/images/turin.png"
                alt="Turin"
                format="webp"
            />
            <div class="col-lg-5 text-left p-2">
                <SectionTitle>Turin</SectionTitle>
                <div class="mb-2 lh-lg">
                    Turin is the capital city of Piedmont and of the
                    Metropolitan City of Turin, and was the first Italian
                    capital from 1861 to 1865. The city has a rich culture and
                    history, and it is known for its numerous art galleries,
                    restaurants, churches, palaces, opera houses, piazzas,
                    parks, gardens, theatres, libraries, museums and some of
                    Italy's best universities, colleges, academies, lycea and
                    gymnasia, such as the University of Turin, founded in the
                    15th century, and the Turin Polytechnic. Turin is also
                    worldwide famous for icons like the gianduja, the Holy
                    Shroud, the automobile brand FIAT and the association
                    football club Juventus, which competes with its rival Torino
                    in the Derby della Mole, the city's derby.
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SectionTitle from '~/components/SectionTitle'
/**
 * Page containing a brief description of Turin
 */
export default {
    name: 'TheTown',
    components: { SectionTitle },
    layout: 'single-topic',
    head() {
        return {
            title: 'The Town - Turin',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: `Everything you need to know about the capital city of Piedmont, Turin!`
                }
            ]
        }
    },
    // Set page information in store to render it
    created() {
        this.$store.commit('setPageInfo', { title: 'The town' })
    }
}
</script>

<style scoped></style>
