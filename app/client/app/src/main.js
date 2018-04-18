// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import 'normalize.css'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import './mock'

import '@/styles/index.scss'

import i18n from './lang'

import './icons'

Vue.use(Element, {size: 'medium'})

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: {App},
  template: '<App/>'
})
