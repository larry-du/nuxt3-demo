<script setup>
const emits = defineEmits(["update:modelValue", "update:formField"]);

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

const BaseTitle = resolveComponent("BaseTitle");
const formView = markRaw({ BaseTitle });
</script>
<template>
  <div class="test">
    <ElForm
      v-draggable="{
        animation: 400,
        saveData: (data) => {
          $emit('update:formField', data);
        },
        sortData: 'formField',
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
              current: { ...formType, ...$event },
              currentIndex: index,
            })
          "
        ></Component>
      </div>
    </ElForm>
    <div class="show-data">{{ formField }}</div>
  </div>
</template>

<style lang="scss" scoped></style>
