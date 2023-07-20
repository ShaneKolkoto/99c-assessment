import { createStore } from "vuex";
import { api } from "../boot/axios";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {
    isValidFile({ commit, dispatch }, file) {
      return new Promise((resolve, reject) => {
        const validFileTypes = ["image/jpeg", "image/png", "application/pdf"];
        if (validFileTypes.includes(file.type)) {
          resolve(true);
        } else {
          resolve(false);
        }
      });
    },
    async uploadFile({ commit, dispatch }, payload) {
      let file = await dispatch("isValidFile", payload);
      if (file) {
        const response = await api.post("/api/upload", payload);
        if (response) {
          return true;
        }
      } else {
        return false;
      }
    },
  },
  modules: {},
});
