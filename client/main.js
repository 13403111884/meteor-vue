import Vue from 'vue'
import VueMeteorTracker from 'vue-meteor-tracker'
import router from './../imports/client/router'
import store from './../imports/client/store'
import Vant from 'vant';
import 'vant/lib/index.css';


import App from './../imports/client/App.vue'


Vue.use(VueMeteorTracker)

Meteor.startup(() => {
  Vue.use(Vant)
  new Vue({
    router,
    store,
    ...App,
  }).$mount(document.body)
})
