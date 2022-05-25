<template>
    <IntroductoryPage
        :title="title"
        :element-list="poiList"
        :cover-image="coverImage"
        :subtitle="subtitle"
    >
    </IntroductoryPage>
</template>

<script>
import IntroductoryPage from '~/components/IntroductoryPage'
export default {
    name: 'PoisPage',
    components: { IntroductoryPage },

    async asyncData({ $axios }) {
        const { data } = await $axios.get('/api/pois')
        const poiList = []
        for (const elem of data) {
            poiList.push({
                title: elem.name,
                imageLink: elem.image_links[0],
                visitInfo: elem.visit_info,
                link: `/pois/${elem.id}`
            })
        }
        return {
            poiList
        }
    },
    data() {
        return {
            title: 'All Points of Interest',
            subtitle: 'All the magical places in Turin',
            coverImage: 'introductory-cover.png'
        }
    }
}
</script>

<style scoped></style>
