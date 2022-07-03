<template>
    <div>
        <!-- No content here: all introductory pages are equal, so the html for the content is directly in the layout -->
    </div>
</template>

<script>
export default {
    name: 'ItinerariesPage',
    layout: 'introductory',
    async asyncData({ store, $axios }) {
        const { data } = await $axios.get('/api/itineraries')

        // Build a list of objects representing itineraries
        const itineraryList = []
        for (const elem of data) {
            // const poiList = elem.poi_list
            itineraryList.push({
                title: elem.title,
                subtitle: 'Duration: ' + elem.duration_string,
                imageLink: elem.map_link,
                link: `/itineraries/${elem.id}`,
                description: elem.description
            })
        }

        // Set page information in store to render them in the page layout
        store.commit('setPageInfo', {
            title: 'All Itineraries',
            subtitle: 'Visit the city with different plans!',
            imageUrl: '/images/introductory-cover.png'
        })
        store.commit('setIntroductoryPageElements', itineraryList)

        return {
            itineraryList
        }
    },
    head() {
        return {
            title: 'Itineraries - Turin',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: `Visit Turin through multiple itineraries!`
                }
            ]
        }
    }
}
</script>
