// import { defineStore } from "pinia";
import { graphQlPost } from "@/api/graphql";
import { GetEpsMeta } from "@/graphql/useQuery/eps";

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
    epsMetaList: [{ name: "description", content: "test" }],
    epsAllowCountry: ["us", "tw", "jp"],
  }),
  actions: {
    async fetchMeta() {
      const { data } = await graphQlPost("https://msvc.msi.com/graphql", {
        query: GetEpsMeta,
      });
      // const { data } = await $fetch("https://msvc.msi.com/graphql", {
      //   headers: {
      //     Accept: "application/json",
      //     "x-api-key": "da2-3d2ezly5xngofpbmuz6wqvjzf4",
      //   },
      //   method: "POST",
      //   body: {
      //     query: metaTest,
      //   },
      // });
      this.epsPageTitle = data.evseNews.title;
      this.epsMetaList = data.evseNewsList;

      // console.log(this.epsMetaList);
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
    getEpsAllowCountry() {
      return this.epsAllowCountry;
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
