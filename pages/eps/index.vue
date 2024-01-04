<script setup>
const Nav = resolveComponent("Nav");
const BaseInput = resolveComponent("BaseInput");

const epsGlobalStore = useEPSGlobalStore();

const formView = markRaw({ Nav, BaseInput });

const routerName = ref("");

const dymanicComponent = ref("BaseInput");
</script>

<template>
  <NuxtLayout name="standard">
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
      <!-- <Nav></Nav> -->
      <button @click="dymanicComponent = 'Nav'">Nav</button>
      <button @click="dymanicComponent = 'BaseInput'">BaseInput</button>
      <component :is="formView[dymanicComponent]" />
      <NuxtPage :key="$route.path" />
    </div>
  </NuxtLayout>
</template>

<style lang="scss" scoped></style>
