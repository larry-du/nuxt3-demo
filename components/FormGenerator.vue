<script setup>
const emits = defineEmits(["update:modelValue"]);

const props = defineProps({
  formField: {
    type: Array,
    default: () => [],
  },
  checkOptions: {
    type: Array,
    default: () => [],
  },
});
</script>
<template>
  <div class="test">
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
          v-for="(formType, index) in formField"
          :key="formType.id"
          :model-value="formType.field"
          @update:model-value="
            $emit('update:modelValue', {
              current: { ...formType, field: $event },
              currentIndex: index,
            })
          "
        ></Component>
      </div>
    </ElForm>
    <div class="show-data">{{ epsGlobalStore.getEpsForm }}</div>
  </div>
</template>

<style lang="scss" scoped></style>
