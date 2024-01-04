<script setup>
const globalStore = useGlobalStore();
const routerName = ref("");

console.log("hi", globalStore.getTest);
</script>

<template>
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
  <!-- <div>{{ routerName }}</div> -->
  <div>
    index
    <div>
      <input
        type="text"
        :value="routerName"
        @input="routerName = $event.target.value"
      />
    </div>
    <div>Dymanic Router Name-{{ routerName }}</div>
    <NuxtPage :key="$route.path" />
  </div>
</template>

<style lang="scss" scoped></style>
