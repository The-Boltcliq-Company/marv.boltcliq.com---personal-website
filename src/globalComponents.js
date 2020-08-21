/* eslint-disable no-unused-vars */
import Vue from 'vue'
import Loader from './utils/Loader.vue'
import Navigation from './utils/Navigation.vue'
import Footer from './utils/Footer.vue'


Vue.component('Loader', () => import('./utils/Loader.vue'))
Vue.component('Navigation', () => import('./utils/Navigation.vue'))
Vue.component('Footer', () => import('./utils/Footer.vue'))
