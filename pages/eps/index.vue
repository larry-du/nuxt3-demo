<script setup>
import { v4 as uuidv4 } from "uuid";
const Nav = resolveComponent("Nav");
const BaseInput = resolveComponent("BaseInput");
// const BaseTitle = resolveComponent("BaseTitle");
// const BaseMarkDownEditor = resolveComponent("BaseMarkDownEditor");

const epsGlobalStore = useEPSGlobalStore();

const formView = markRaw({ Nav, BaseInput });

const routerName = ref("test");

const dymanicComponent = ref("BaseInput");

const formTypeItems = ref([
  { label: "BaseTitle", value: "BaseTitle" },
  { label: "BaseMarkDownEditor", value: "BaseMarkDownEditor" },
]);

const formTypeCheckList = ref([]);
// const title = ref("");

// useHead({
//   // title: () => epsGlobalStore.getEpsPageTitle,
//   viewport: "width=device-width, initial-scale=1, maximum-scale=1",
//   charset: "utf-8",
//   meta: () => epsGlobalStore.getEpsMetaList,
// });

useSeoMeta({
  title: () => epsGlobalStore.getEpsPageTitle,
  ogTitle: "My Amazing Site",
  description: "This is my amazing site, let me tell you all about it.",
  ogDescription: "This is my amazing site, let me tell you all about it.",
  ogImage: "https://example.com/image.png",
  twitterCard: "summary_large_image",
});

useAsyncData(async () => {
  try {
    // console.log("useAsyncData");
    await epsGlobalStore.fetchMeta();
    // console.log("end");
  } catch (e) {
    console.log("error", e);
  }
});

const updateFormComponent = () => {
  const result = formTypeCheckList.value.map((item) => {
    return { id: uuidv4(), type: item, field: "" };
  });
  epsGlobalStore.epsForm = [...epsGlobalStore.epsForm, ...result];
  formTypeCheckList.value = [];
};

const clearAllFormComponent = () => {
  epsGlobalStore.epsForm = [];
};
</script>

<template>
  <div class="AAAAAAAAAA">
    <NuxtLayout name="standard">
      <pre>{{ formTypeCheckList }}</pre>
      <BaseCheckBox
        :check-options="formTypeItems"
        :model-value="formTypeCheckList"
        @update:model-value="formTypeCheckList = $event"
      ></BaseCheckBox>
      <button @click="updateFormComponent">update form component</button>
      <button @click="clearAllFormComponent">clear</button>
      <FormGenerator
        class="test"
        :form-field="epsGlobalStore.getEpsForm"
        @update:model-value="
          epsGlobalStore.epsForm = [
            ...epsGlobalStore.epsForm.slice(0, $event.currentIndex),
            { ...$event.current },
            ...epsGlobalStore.epsForm.slice($event.currentIndex + 1),
          ]
        "
        @update:form-field="epsGlobalStore.epsForm = $event"
      ></FormGenerator>

      <div>
        <NuxtLink to="/home">Router Nest Home</NuxtLink>-
        <NuxtLink to="/about">Router Nest About</NuxtLink>
      </div>
      <div>
        <NuxtLink to="/test">Folder Nest index</NuxtLink>
      </div>
      <div>
        <NuxtLink :to="`/dymanic/${routerName}`">dymanic</NuxtLink>
      </div>
      <div>{{ $route.path }}</div>
      <div>
        EPS index
        <div>
          <input
            type="text"
            :value="routerName"
            @input="routerName = $event.target.value"
          />
        </div>
        <div>
          <p>Pinia test- {{ epsGlobalStore.getEPSTest }}</p>
          <input
            type="text"
            :value="epsGlobalStore.getEPSTest"
            @input="epsGlobalStore.epsTest = $event.target.value"
          />
        </div>
        <div>Dymanic Router Name-{{ routerName }}</div>
        <button @click="dymanicComponent = 'Nav'">Nav</button>
        <button @click="dymanicComponent = 'BaseInput'">BaseInput</button>
        <component :is="formView[dymanicComponent]" />
        <NuxtPage :key="$route.path" />
      </div>
    </NuxtLayout>
  </div>
</template>

<style lang="scss" scoped>
.test {
  display: flex;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
