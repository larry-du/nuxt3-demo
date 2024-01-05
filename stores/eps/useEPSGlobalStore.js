// import { defineStore } from "pinia";

export const useEPSGlobalStore = defineStore("useEPSGlobalStore", {
  state: () => ({
    epsTest: "test",
    epsForm: [
      {
        id: 1,
        type: "BaseTitle",
        field: "title",
      },
      {
        id: 2,
        type: "BaseTitle",
        field: "te",
      },
    ],
  }),
  actions: {},
  getters: {
    getEPSTest() {
      return this.epsTest;
    },
    getEpsForm() {
      return this.epsForm;
    },
  },
});
