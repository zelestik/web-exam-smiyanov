import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import VueResource from "vue-resource"
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Main_page from "@/components/Main_page";
import CPU_cat from "@/components/CPU_cat";
import Mother_boards_cat from "@/components/Mother_boards_cat";

Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

const router = new VueRouter({
  mode: "history",
  linkActiveClass: "active",
  routes:[
    {path: '/', component: Main_page},
    {path: '/CPUs', component: CPU_cat},
    {path: '/Mother_boards', component: Mother_boards_cat}
  ]
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
