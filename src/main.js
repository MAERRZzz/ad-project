import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router/index'
import store from './store'
import fb from 'firebase'
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";

Vue.use(Router)
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App),
  router:router,
  store,
  created(){
    const firebaseConfig = {
  apiKey: "AIzaSyAMZX7lF4GMpt8xYfdm3RHw8EpIOJDqbvA",
  authDomain: "ad-project-5fcc8.firebaseapp.com",
  projectId: "ad-project-5fcc8",
  storageBucket: "ad-project-5fcc8.appspot.com",
  messagingSenderId: "1055263872410",
  appId: "1:1055263872410:web:9bff162d8c6baeeec95623"
};
    
  // Initialize Firebase
  fb.initializeApp(firebaseConfig);
  fb.analytics();
  //fb.auth().onAuthStateChanged(user => {
    //здесь можно обновить пользователя в store
    //console.log(user)
  //});
  fb.auth().onAuthStateChanged(user => {
    if (user) {
      console.log(`Смотрим что мы получили: ${user.uid}`)
      this.$store.dispatch('autoLoginUser', user.uid)
    }
 })

  //const app = initializeApp(firebaseConfig);
  //getAnalytics(app);

  this.$store.dispatch('fetchAds')
}
}).$mount('#app')