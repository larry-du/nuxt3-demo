<script setup>
defineOptions({
  inheritAttrs: false,
});
defineEmits(["update:modelValue"]);
const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
});

const { modelValue } = toRefs(props);
</script>
<template>
  <div class="baseTitle">
    <ElFormItem label="Title">
      <ElInput
        :model-value="modelValue"
        @update:model-value="$emit('update:modelValue', { field: $event })"
      />
    </ElFormItem>
  </div>
</template>

<style lang="scss" scoped></style>
