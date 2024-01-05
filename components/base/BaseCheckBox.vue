<script setup>
defineOptions({
  inheritAttrs: false,
});
const emits = defineEmits(["update:modelValue"]);
const props = defineProps({
  modelValue: {
    type: Array,
    default: () => [],
  },
  checkOptions: {
    type: Array,
    default: () => [],
  },
});

const { modelValue } = toRefs(props);

const checkList = computed({
  get: () => modelValue.value,
  set: (val) => emits("update:modelValue", val),
});
</script>
<template>
  <div>
    <el-checkbox-group v-model="checkList">
      <el-checkbox
        v-for="option in checkOptions"
        :key="option.value"
        :label="option.label"
        :model-value="option.value"
      />
    </el-checkbox-group>
  </div>
</template>

<style lang="scss" scoped></style>
