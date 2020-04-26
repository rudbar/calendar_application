import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';


Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyAeRm818KEQ8TTb1ezjFot3Joi9iUCAEOw",
  authDomain: "calendar-vuejs-ff247.firebaseapp.com",
  databaseURL: "https://calendar-vuejs-ff247.firebaseio.com",
  projectId: "calendar-vuejs-ff247",
  storageBucket: "calendar-vuejs-ff247.appspot.com",
  messagingSenderId: "595208383763",
  appId: "1:595208383763:web:6de9c422d6be4144d87ee6"
});

export const db = firebase.firestore;

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
