// import { defineStore } from "pinia";

export const useEPSGlobalStore = defineStore("useEPSGlobalStore", {
  state: () => ({
    epsTest: "test",
  }),
  actions: {},
  getters: {
    getEPSTest() {
      return this.epsTest;
    },
  },
});
