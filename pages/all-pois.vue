<template>
    <IntroductoryPage
        :title="title"
        :element-list="poiList"
        :cover-image-link="coverImageLink"
        :subtitle="subtitle"
    >
    </IntroductoryPage>
</template>


<script>
import IntroductoryPage from '~/components/IntroductoryPage'
export default {
    name: 'PoisPage',
    components: {IntroductoryPage},

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
            coverImageLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Venaria_Reale-01052016_061.jpg/1920px-Venaria_Reale-01052016_061.jpg'
        }
    }
}
</script>

<style scoped></style>
