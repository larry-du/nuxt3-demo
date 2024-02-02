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
const BaseMarkDownEditor = resolveComponent("BaseMarkDownEditor");

const formView = markRaw({ BaseTitle, BaseMarkDownEditor });
</script>
<template>
  <div class="formGenerator">
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
        <div v-for="(formType, index) in formField" :key="formType.id">
          <Component
            :is="formView[formType.type]"
            :el="`${formType.type}-${formType.id}`"
            :model-value="formType.field"
            @update:model-value="
              $emit('update:modelValue', {
                current: {
                  ...formType,
                  ...$event,
                },
                currentIndex: index,
              })
            "
          ></Component>
        </div>
      </div>
    </ElForm>
    <div class="show-data">
      <div v-for="field in formField" :key="field.id" class="componentData">
        {{ field }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.componentData {
  margin-top: 20px;
  &:first-child {
    margin-top: 0;
  }
}
</style>
