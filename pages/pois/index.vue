<template>
    <div>
        <!-- No content here: all introductory pages are equal, so the html for the content is directly in the layout -->
    </div>
</template>

<script>
export default {
    name: 'PoisPage',
    layout: 'introductory',
    async asyncData({ store, $axios }) {
        const { data } = await $axios.get('/api/pois')

        // Build a list of objects representing POIs
        const poiList = []
        for (const elem of data) {
            poiList.push({
                title: elem.name,
                imageLink: elem.image_links[0],
                visitInfo: elem.visit_info,
                link: `/pois/${elem.id}`
            })
        }

        // Set page information in store to render them in the page layout
        store.commit('setPageInfo', {
            title: 'All Points of Interest',
            subtitle: 'All the magical places in Turin',
            imageUrl: '/images/introductory-cover.webp'
        })
        store.commit('setIntroductoryPageElements', poiList)

        return {
            poiList
        }
    },
    head() {
        return {
            title: 'Points Of Interest - Turin',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: `All the magical places in Turin!`
                }
            ]
        }
    }
}
</script>

<style scoped></style>
