import configurationTypes from "../types/configurationTypes";
import { GetterTree, ActionTree, MutationTree } from "vuex";
import router from "@/router/index";
import { CONFIG } from "@/app-config";

interface IConfiguration {
  theme: string
}

const namespaced: boolean = true;
const state: IConfiguration = {
  theme: "" as string,
};

const getters: GetterTree<IConfiguration, any> = {
  [configurationTypes.getters.GET_THEME]: (state): string => {
    return state.theme;
  }
};

const mutations: MutationTree<IConfiguration> = {
  [configurationTypes.mutations.SET_THEME]: (state, data: string): void => {
    state.theme = data;
  }
};

const actions: ActionTree<IConfiguration, any> = {
  [configurationTypes.actions.RELOAD_THEME]: ({ commit }, idx) => {
    window.localStorage.setItem("theme", idx);

    commit(configurationTypes.mutations.SET_THEME, idx);
    document.body.style.setProperty("--primary-color", CONFIG.THEMES[idx].primary_color);
    document.body.style.setProperty("--secondary-color", CONFIG.THEMES[idx].secondary_color);
    document.body.style.setProperty("--tertiary-color", CONFIG.THEMES[idx].tertiary_color);
  }
};

export default {
  namespaced,
  state,
  getters,
  mutations,
  actions
};