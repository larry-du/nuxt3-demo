// import { defineStore } from "pinia";

const metaTest = `
query getMeta {
    MyQuery {
      evseNews(id: 10) {
        id
        title
      }
      evseNewsList(page: 10, pageSize: 10) {
        id
        title
      }
    }
  }`;

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
  actions: {
    async fetchMeta() {
      console.log("hi");

      const { data } = await $fetch("https://msvc.msi.com/graphq", {
        method: "POST",
        body: metaTest,
      });
      console.log("hi", data);
      return data;
    },
  },
  getters: {
    getEPSTest() {
      return this.epsTest;
    },
    getEpsForm() {
      return this.epsForm;
    },
  },
});
