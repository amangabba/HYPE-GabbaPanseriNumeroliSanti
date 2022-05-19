<template>
    <IntroductoryPage
        :title="title"
        :element-list="itineraryList"
        :cover-image-link="coverImageLink"
        :subtitle="subtitle" />
</template>

<script>
import IntroductoryPage from "~/components/IntroductoryPage";
export default {
    name: 'ItinerariesPage',
    components: { IntroductoryPage },

    async asyncData({ $axios }) {
        const { data } = await $axios.get('/api/itineraries')
        const itineraryList = []
        for (const elem of data) {
            const poiList = elem.poi_list
            const description = poiList.length ? 'From: ' + poiList[0].name + ' ' + poiList[poiList.length - 1].name + ' | ' : ''
            itineraryList.push({
                title: elem.title,
                imageLink: elem.map_link,
                link: `/itineraries/${elem.id}`,
                description: description + 'Duration: ' + elem.duration
            })
        }
        return {
            itineraryList
        }
    },
    data() {
        return {
            title:"All Itineraries",
            subtitle:"Visit the city with different plans!",
            coverImageLink: "https://wallpaperaccess.com/full/2667331.jpg",
        }
    }
}
</script>
