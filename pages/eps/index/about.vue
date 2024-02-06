<script setup>
definePageMeta({
  layout: false, // 只有取消 default layout
  pageTransition: {
    name: "rotate",
  },
});
</script>

<template>
  <div>
    <NuxtLayout name="custom">
      <div>EPS Page: about</div>
    </NuxtLayout>
  </div>
</template>

<style scoped>
.rotate-enter-active,
.rotate-leave-active {
  transition: all 0.4s;
}
.rotate-enter-from,
.rotate-leave-to {
  opacity: 0;
  transform: rotate3d(1, 1, 1, 15deg);
}
</style>
