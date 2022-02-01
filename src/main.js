import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css"
import router from "@/router"
import {dollarFilter} from "@/filters"
import {precentFilter} from "@/filters"

import Chartkick from "vue-chartkick"
import Chart from "chart.js"
import {VueSpinners} from "@saeris/vue-spinners"

Vue.use(Chartkick.use(Chart))
Vue.use(VueSpinners)
Vue.filter("dollar", dollarFilter)
Vue.filter("percent", precentFilter)
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
