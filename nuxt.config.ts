// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    devtools: {
        enabled: true,
    },
    app: {
        head : {
            title: 'Nuxi chess',
            htmlAttrs: {lang: 'fr'},
            meta: [
                {name: 'charset', charset: 'utf-8'},
                {name: 'name', content: 'viewport'},
                {name: 'language', content: 'FR'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1'},
                {name: 'description', content: 'The world first chess game working on        Nuxt3'},
                {name: 'url', content: 'https://nuxichess.com'},
                {name: 'robots', content: 'index,follow'},
                {name: 'author', content: 'Maxime Fontenay'},
                {name: 'designer', content: 'Maxime Fontenay'},
                {name: 'owner', content: 'Maxime Fontenay'},
            ]
        },
    },
    css: [
        '@/assets/_variables.scss',
        '@/assets/_base.scss',
    ],

    components: {
        // global: true,
        dirs: ['~/components']
    },
    typescript: {
        strict: true
    },
    modules: [
        '@vueuse/nuxt',
        '@pinia/nuxt',
        'nuxt-icon', // https://icones.js.org/

    ],
})
