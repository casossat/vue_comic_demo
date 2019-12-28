import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";
import configurationModule from "./modules/configurationModule";

Vue.use(Vuex);
const vuexPersist = new VuexPersist({
  key: "erp_welcome_app",
  storage: window.localStorage
});

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    configurationModule
  },
});