<template>
    <div>
        <!-- No content here: all introductory pages are equal, so the html for the content is directly in the layout -->
    </div>
</template>

<script>
export default {
    name: 'ServiceTypesPage',
    layout: 'introductory',
    async asyncData({ store, $axios }) {
        const { data } = await $axios.get('/api/service-types')

        // Build a list of objects representing service types
        const serviceTypeList = []
        for (const elem of data) {
            serviceTypeList.push({
                title: elem.type,
                imageLink: elem.coverLink,
                link: `/service-types/${elem.id}`
            })
        }

        // Set page information in store to render them in the page layout
        store.commit('setPageInfo', {
            title: 'Main Services',
            subtitle: 'Discover the main services present in Torino',
            imageUrl: '/images/introductory-cover.png'
        })
        store.commit('setIntroductoryPageElements', serviceTypeList)

        return {
            serviceTypeList
        }
    }
}
</script>

<style>
.introductory-page .custom-card img {
    width: 50%;
    margin: auto;
    padding: 10px 0;
}
</style>
