export const state = () => ({
    pageTitle: 'Default title',
    pageSubtitle: undefined,
    pageImageUrl: undefined,
    pageBreadcrumbs: [],
    introductoryPageElements: []
})

export const mutations = {
    setPageInfo(state, { title, subtitle, imageUrl, breadcrumbs = [] }) {
        state.pageTitle = title
        state.pageSubtitle = subtitle
        state.pageImageUrl = imageUrl
        state.pageBreadcrumbs = breadcrumbs
    },
    setIntroductoryPageElements(state, elements) {
        state.introductoryPageElements = elements
    }
}
