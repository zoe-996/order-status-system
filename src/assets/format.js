import Vue from "vue";

Vue.directive("day", {
  bind(el) {
    const target = el instanceof HTMLInputElement ? el : el.querySelector("input");
    target.onkeyup = () => {
        target.value = target.value.replace(/[^0-9-]/g, "");
        target.value = target.value.length > 10 ? target.value.slice(0,10) : target.value;
    };
  } 
});