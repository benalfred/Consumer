export default {

    ssr: true,
    router: {
        middleware: ['auth']
    },
    loading: {
        color: '#de115e',
        height: '5px',
        failedColor: '#ff3d00',
        throttle: 100,
        continuous: true,
        duration: 500
    },
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'consumer-halla',
        htmlAttrs: {
            lang: 'en'
        },
        target: "static",
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],

        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
                rel: 'stylesheet',
                href: 'https://maxst.icons8.com/vue-static/landings/line-awesome/font-awesome-line-awesome/css/all.min.css'
            },
            {
                rel: 'stylesheet',
                href: 'https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css'
            },
            {
                rel: 'stylesheet',
                href: 'https://maxst.icons8.com/vue-static/landings/line-awesome/font-awesome-line-awesome/css/all.min.css'
            },
            {
                rel: 'stylesheet',
                href: 'https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css'
            },
            {
                rel: 'stylesheet',
                href: 'https://use.fontawesome.com/releases/v5.11.2/css/all.css'
            },
            {
                rel: 'stylesheet',
                href: 'https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css'
            },
            {
                rel: 'stylesheet',
                href: 'https://use.fontawesome.com/releases/v5.11.2/css/all.css'
            },
            {
                rel: 'stylesheet',
                href: 'https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css'
            },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Open+Sans&display=swap'
            },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Poppins&display=swap'
            },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Poppins&display=swap'
            },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap'
            },
        ]
    },

    script: [{
        src: 'https://kit.fontawesome.com/802d49fc10.js'
    }, ],

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '~/assets/css/responsive.css',
        '~/assets/css/style.css',
        'aos/dist/aos.css'
    ],

    axios: {
        baseURL: process.env.NUXT_ENV_API_BASE_URL,
        common: {
            'Accept': 'application/json, text/plain, /',
            'Content-Type': 'application/json',
        },
    },

    auth: {
        strategies: {
            local: {
                token: {
                    property: 'token',
                    // required: true,
                    // type: 'Bearer'
                },
                user: {
                    property: 'data',
                    // autoFetch: true
                },
                endpoints: {
                    login: { url: 'account/authenticate2', method: 'post' },
                    logout: { url: 'logout', method: 'post' },
                    user: { url: '/account/GetUserInformation', method: 'get' }
                }
            }
        },
        // redirect: {
        //     login: '/login',
        //     logout: '/login',
        //     callback: '/login',
        //     home: '/'
        // }
    },


    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: '~/plugins/main.js', },
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        'bootstrap-vue/nuxt',
        '@nuxtjs/axios',
        '@nuxtjs/auth-next'
    ],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
}
