<script setup>
const Nav = resolveComponent("Nav");
const BaseInput = resolveComponent("BaseInput");
// const BaseTitle = resolveComponent("BaseTitle");
// const BaseMarkDownEditor = resolveComponent("BaseMarkDownEditor");

const epsGlobalStore = useEPSGlobalStore();

const formView = markRaw({ Nav, BaseInput });

const routerName = ref("");

const dymanicComponent = ref("BaseInput");

const formTypeItems = ref([
  { label: "BaseTitle", value: "BaseTitle" },
  { label: "BaseMarkDownEditor", value: "BaseMarkDownEditor" },
]);

const formTypeCheckList = ref([]);
// const title = ref("");

useHead({
  title: () => epsGlobalStore.getEpsPageTitle,
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  meta: () => epsGlobalStore.getEpsMetaList,
});

useAsyncData(async () => {
  try {
    console.log("useAsyncData");
    await epsGlobalStore.fetchMeta();
    console.log("end");
  } catch (e) {
    console.log("error", e);
  }
});

// console.log(data);
</script>

<template>
  <NuxtLayout name="standard">
    <pre>{{ formTypeCheckList }}</pre>
    <BaseCheckBox
      :check-options="formTypeItems"
      :model-value="formTypeCheckList"
      @update:model-value="formTypeCheckList = $event"
    ></BaseCheckBox>
    <client-only>
      <!-- <BaseMarkDownEditor el="test"></BaseMarkDownEditor> -->
      <FormGenerator
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
      <!-- <div class="test">
        <ElForm
          v-draggable="{
            animation: 400,
            saveData: (data) => {
              test(data);
            },
            sortData: 'productFocus',
            dragElement: '.focusDrag__content',
            disableElement: '',
          }"
        >
          <div class="focusDrag__content">
            <Component
              :is="formView[formType.type]"
              v-for="(formType, index) in epsGlobalStore.getEpsForm"
              :key="formType.id"
              :model-value="formType.field"
              @update:model-value="
                epsGlobalStore.epsForm = [
                  ...epsGlobalStore.getEpsForm.slice(0, index),
                  { ...formType, ...$event },
                  ...epsGlobalStore.getEpsForm.slice(index + 1),
                ]
              "
            ></Component>
          </div>
        </ElForm>
        <div class="show-data">{{ epsGlobalStore.getEpsForm }}</div>
      </div> -->
    </client-only>
    <div class="test">
      <div
        v-for="list in epsGlobalStore.getEpsMetaList"
        :key="list.id"
        class="aaaaaaaaaaaaaaaaaaa"
      >
        {{ list.content }}
      </div>
    </div>

    <!-- <div>
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
    </div> -->
  </NuxtLayout>
</template>

<style lang="scss" scoped>
.test {
  display: flex;
}
</style>
