import Vue from "vue";
import router from "./Vue/routes";
import App from "./Vue/Components/App";

new Vue({
  el: "#vue",
  router,
  render: h => h(App)
});