// import { defineStore } from "pinia";

export const useEVSEGlobalStore = defineStore("useEVSEGlobalStore", {
  state: () => ({
    test: "test",
  }),
  actions: {},
  getters: {
    getTest() {
      return this.test;
    },
  },
});
