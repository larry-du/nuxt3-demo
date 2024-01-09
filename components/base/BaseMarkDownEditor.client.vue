<script setup>
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import Editor from "@toast-ui/editor";
import Viewer from "@toast-ui/editor/dist/toastui-editor-viewer";
const prop = defineProps({
  featureContext: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
  el: {
    type: String,
    default: "test",
  },
  viewerEl: {
    type: String,
    default: "viewerTest",
  },
  unTranslateContent: {
    type: String,
    default: "",
  },
  showTranslate: {
    type: Boolean,
    default: false,
  },
});

const {
  featureContext,
  viewerEl,
  title,
  el,
  unTranslateContent,
  showTranslate,
} = toRefs(prop);

const emit = defineEmits(["update:content"]);

let editor = {};
let viewer = {};
onMounted(() => {
  nextTick(() => {
    editor = new Editor({
      el: document.querySelector(`.${el.value}`),
      height: "350px",
      initialEditType: "wysiwyg",
      previewStyle: "vertical",
      initialValue: featureContext.value,
      useCommandShortcut: true,
      usageStatistics: false,
      hideModeSwitch: true,
      autofocus: false,
      toolbarItems: [
        ["bold", "italic"],
        ["ul", "ol"],
      ],
      events: {
        change: () => {
          emit("update:content", editor.getMarkdown());
        },
      },
    });
    viewer = new Viewer({
      el: document.querySelector(`.${viewerEl.value}`)
        ? document.querySelector(`.${viewerEl.value}`)
        : document.querySelector(`.typeArea__translate`),
      initialValue: unTranslateContent.value,
      height: "350px",
    });
  });
});

const resyncFromGlobal = () => {
  emit("update:content", unTranslateContent.value);
  nextTick(() => {
    editor.destroy();
    editor = new Editor({
      el: document.querySelector(`.${el.value}`),
      height: "350px",
      initialEditType: "wysiwyg",
      previewStyle: "vertical",
      initialValue: featureContext.value,
      useCommandShortcut: true,
      usageStatistics: false,
      hideModeSwitch: true,
      autofocus: false,
      toolbarItems: [
        ["bold", "italic"],
        ["ul", "ol"],
      ],
      events: {
        change: () => {
          emit("update:content", editor.getMarkdown());
        },
      },
    });
  });
};

onBeforeUnmount(() => {
  editor.destroy();
  viewer.destroy();
});
</script>
<template>
  <div class="markDownEditor">
    <p
      v-if="title"
      class="markDownEditor__title"
      :class="{ 'top-space': Boolean(title) }"
    >
      {{ title }}
    </p>
    <div class="typeArea">
      <div class="markDownEditor__content typeArea__input" :class="el"></div>
      <!-- <BaseButton
        v-if="showTranslate"
        :icon="['fas', 'chevron-left']"
        @button-click="resyncFromGlobal"
      ></BaseButton> -->
      <div v-show="showTranslate" class="typeArea__translate">
        <div class="markDownEditor__content viewer" :class="viewerEl"></div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.markDownEditor
    .top-space
      margin-top: 10px
    &__title
        font-size: 14px
        color: #222222
    &__content
        margin-top: 8px
::v-deep(.toastui-editor-main-container)
    background-color: #fff
::v-deep(.toastui-editor-contents ul > li::before)
     background-color: #222

.viewer
  height: 350px
  border: 1px solid #dadde6
  padding: 0 15px
  background-color: #f5f7fa
.typeArea
  width: 100%
  display: flex
  align-items: center
  &__input
    flex: 1 0 0
  &__translate
    flex: 1 0 0
  .noNeed-view
    flex: 0 0 0

  ::v-deep(.baseButton)
    width: 25px
    height: 25px
    margin: 0 8px
    padding: 0
    .icon
      font-size: 14px
</style>
