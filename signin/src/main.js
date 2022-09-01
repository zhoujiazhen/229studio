import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import elementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import '../public/css/zhoujiazhen.css'
import '../public/css/style.css'

createApp(App).use(store).use(elementPlus).use(router).mount('#app')
