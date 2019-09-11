// import { Meteor } from 'meteor/meteor'
import Vue from 'vue'
import VueMeteorTracker from 'vue-meteor-tracker'
import router from './../imports/client/router'
import store from './../imports/client/store'

Vue.use(VueMeteorTracker)

import App from './../imports/client/App.vue'

Meteor.startup(() => {
  new Vue({
    router,
    store,
    ...App,
  }).$mount(document.body)
})
