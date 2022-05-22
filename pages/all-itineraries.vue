<template>
    <IntroductoryPage
        :title="title"
        :element-list="itineraryList"
        :cover-image-link="coverImageLink"
        :subtitle="subtitle"
    >
    </IntroductoryPage>
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
            itineraryList.push({
                title: elem.title,
                subtitle: 'Duration: ' + elem.duration + ' min',
                imageLink: elem.map_link,
                link: `/itineraries/${elem.id}`,
                description: poiList.length ? 'From "' + poiList[0].name + '" to "' + poiList[poiList.length - 1].name + '"': ''
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
