// import { Meteor } from 'meteor/meteor'
import Vue from 'vue'
import VueMeteorTracker from 'vue-meteor-tracker'
import router from './../imports/client/router'
import store from './../imports/client/store'
import ConfigUI from './../imports/configUI'

import App from './../imports/client/App.vue'

import "@quasar/extras/material-icons/material-icons.css"
import "quasar/dist/quasar.min.css"

Vue.use(VueMeteorTracker)
Vue.use(ConfigUI)

Meteor.startup(() => {
  new Vue({
    router,
    store,
    ...App,
  }).$mount(document.body)
})
