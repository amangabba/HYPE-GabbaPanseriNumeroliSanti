<template>
    <IntroductoryPage
        :title="title"
        :element-list="serviceTypeList"
        :cover-image="coverImage"
        :subtitle="subtitle"
        class="service-type-page"
    >
    </IntroductoryPage>
</template>

<script>
import IntroductoryPage from '~/components/IntroductoryPage'

export default {
    name: 'ServiceTypesPage',
    components: {IntroductoryPage},
    async asyncData({ $axios }) {
        const { data } = await $axios.get('/api/service-types')
        const serviceTypeList = []
        for (const elem of data) {
            serviceTypeList.push({
                title: elem.type,
                imageLink: elem.coverLink,
                link: `/service-types/${elem.id}`
            })
        }
        return {
            serviceTypeList
        }
    },
    data() {
        return {
            title: 'Main Services',
            subtitle: 'Discover the main services present in Torino',
            coverImage: 'introductory-cover.png'
        }
    }
}
</script>

<style>
.service-type-page .custom-card img {
    width: 50%;
    margin: auto;
    padding: 10px 0;
}
</style>
