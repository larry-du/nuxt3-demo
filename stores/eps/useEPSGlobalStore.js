// import { defineStore } from "pinia";

const metaTest = `
  query getMeta {
      evseNews(id: 10) {
        id
        title
      }
      evseNewsList(page: 10, pageSize: 10) {
        id
        title
      }
    }
  `;

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
      {
        id: 3,
        type: "BaseMarkDownEditor",
        field: "taaae",
      },
    ],
    epsPageTitle: "",
    epsMetaList: [],
  }),
  actions: {
    async fetchMeta() {
      const { data } = await $fetch("https://msvc.msi.com/graphql", {
        headers: {
          Accept: "application/json",
          "x-api-key": "da2-3d2ezly5xngofpbmuz6wqvjzf4",
        },
        method: "POST",
        body: {
          query: metaTest,
        },
      });
      this.epsPageTitle = data.evseNews.title;
      this.epsMetaList = data.evseNewsList;
      console.log(data);
    },
  },
  getters: {
    getEPSTest() {
      return this.epsTest;
    },
    getEpsForm() {
      return this.epsForm;
    },
    getEpsPageTitle() {
      return this.epsPageTitle;
    },
    getEpsMetaList() {
      return this.epsMetaList.map((item) => {
        return {
          ...item,
          name: "description",
          content: item.title,
        };
      });
    },
  },
});
