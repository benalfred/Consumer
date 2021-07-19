export default {
    ssr: true,
    // router: {
    //     middleware: ['auth']
    // },
    loading: {
        color: '#e57718',
        height: '5px',
        failedColor: '#ff3d00',
        throttle: 100,
        continuous: true,
        duration: 500
    },
    target: "static",
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'consumer-halla',
        htmlAttrs: {
            lang: 'en'
        },

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
            {
                rel: 'stylesheet',
                href: 'https://use.fontawesome.com/releases/v5.7.2/css/all.css'
            },
        ],
        script: [{
                src: 'https://kit.fontawesome.com/802d49fc10.js',
            },
            {
                src: '/jquery/jquery.min.js',

            },
            {
                src: ' https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css',

            },
            {
                src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js',

            },
            {
                src: '/bootstrap/js/bootstrap.bundle.min.js',
            },
            {
                src: '/sb-admin-2.js',
            },
            {
                src: 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js'
            },
            {
                src: '/sb-admin-2.min.js',
            }

        ],
    },



    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '~/assets/css/responsive.css',
        '~/assets/css/style.css',
        '~/assets/css/sb-admin-2.min.css',
        '~/assets/css/sb-admin-2.css',
        'aos/dist/aos.css',
        'quill/dist/quill.core.css',
        // for snow theme
        'quill/dist/quill.snow.css',
        // for bubble theme
        'quill/dist/quill.bubble.css'
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
                    property: false
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

    transition: {
        name: 'home',
        mode: 'out-in'
    },

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: '~/plugins/main.js', ssr: false },
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