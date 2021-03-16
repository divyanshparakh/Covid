import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import VCharts from "v-charts";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.use(VueAxios, axios);
Vue.use(VCharts);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
