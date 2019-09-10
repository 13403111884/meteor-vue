import { Meteor } from 'meteor/meteor'
import Vue from 'vue'
import App from './App.vue'

Meteor.startup(() => {
  new Vue(App).$mount(document.body)
})
