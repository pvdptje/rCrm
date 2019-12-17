/*=========================================================================================
  File Name: main.js
  Description: main vue(js) file
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: hhttp://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'

// Vuesax Component Framework
import Vuesax from 'vuesax'

Vue.use(Vuesax)

// Theme Configurations
import '../themeConfig.js'

// Globally Registered Components
import './globalComponents.js'

// Vuex Store
import store from './store/store'

// Vuesax Admin Filters
import './filters/filters'


import './translations';


// Vuejs - Vue wrapper for hammerjs
import { VueHammer } from 'vue2-hammer'
Vue.use(VueHammer)

// PrismJS
import 'prismjs'
// import 'prismjs/themes/prism-tomorrow.css'

Vue.config.productionTip = false


import VueMeta from 'vue-meta'
import { InertiaApp } from '@inertiajs/inertia-vue'

Vue.config.productionTip = false
Vue.mixin({ methods: { route: window.route } })
Vue.use(InertiaApp)
Vue.use(VueMeta)

let app = document.getElementById('app')

new Vue({
    store,
    metaInfo: {
        title: 'Loading…',
    },
    render: h => h(InertiaApp, {
        props: {
            initialPage: JSON.parse(app.dataset.page),
            resolveComponent: name => import(`@/Pages/${name}`).then(module => module.default),
        },
    }),

}).$mount(app)