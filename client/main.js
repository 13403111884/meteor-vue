import { Meteor } from 'meteor/meteor'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Meteor.startup(() => {
  new Vue({
    router,
    store,
    ...App,
  }).$mount(document.body)
})
