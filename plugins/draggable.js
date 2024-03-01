import Sortable from "sortablejs";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("draggable", {
    mounted(el, binding, vnode) {
      const argumentData = binding.value;
      Sortable.create(el.querySelector(argumentData.dragElement), {
        animation: argumentData.animation,
        onStart: () => {
          if (!argumentData.disableElement) return;
          const target = el.querySelector(argumentData.disableElement);
          target.setAttribute("disabled", true);
        },
        onEnd: (evt) => {
          const dragData = deepClone(
            vnode.ctx.parent.props[argumentData.sortData],
          );
          const [targetItem] = dragData.splice(evt.oldIndex, 1);
          dragData.splice(evt.newIndex, 0, targetItem);
          argumentData.saveData(dragData);

          if (!argumentData.disableElement) return;
          const [...target] = el.querySelectorAll(argumentData.disableElement);
          target.forEach((item) => {
            item.removeAttribute("disabled");
          });
        },
      });
    },
  });
});
