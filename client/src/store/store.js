import Vue from "vue";
import Vuex from "vuex";
import word from "./modules/word.js";
Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    word,
  },
});
