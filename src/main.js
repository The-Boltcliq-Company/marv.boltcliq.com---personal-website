import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import "@/globalComponents";
// External CSS Assets
import '@/assets/css/bootstrap.min.css'
import '@/assets/css/magnific-popup.css'
import '@/assets/css/style.css'
import '@/assets/css/styles.min.css'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
