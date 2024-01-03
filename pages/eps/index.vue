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
    <div>Dymanic Router Name-{{ routerName }}</div>
    <NuxtPage :key="$route.path" />
  </div>
</template>

<script setup>
const routerName = ref("");
</script>

<style lang="scss" scoped></style>
