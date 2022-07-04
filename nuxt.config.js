export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    ssr: true,
    serverMiddleware: [
        {
            path: '/api',
            handler: '~/server/api.js'
        }
    ],
    head: {
        title: 'Turin',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
            { name: 'keywords', content: 'turin, art town, tour, event, itinerary, point of interest, service, museum, palace'}
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/icon.png' }],
        script: [
            {
                src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js',
                body: true
            }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['@/assets/app.scss'],

    router: {
        linkActiveClass: '',
        linkExactActiveClass: 'active'
    },

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module'
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        '@nuxt/image'
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL:
            process.env.NODE_ENV === 'production'
                ? 'https://lambrate-hypermedia.herokuapp.com/'
                : 'http://localhost:3000'
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
}
