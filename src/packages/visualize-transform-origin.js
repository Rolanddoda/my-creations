import Vue from "vue";

const isValidColor = color => {
  const style = new Option().style;
  style.color = color;
  return style.color !== "";
};

Vue.directive("viz", {
  bind(el, binding) {
    const defaultColor = "#000";
    const color = isValidColor(binding.value) ? binding.value : defaultColor;
    const transformOrigin = getComputedStyle(el).getPropertyValue(
      "transform-origin"
    );
    const [xAxis, yAxis] = transformOrigin.split(" ").map(val => parseInt(val));

    const size = 7;
    const radius = "50%";

    const vizEl = document.createElement("span");
    vizEl.style.position = "absolute";
    vizEl.style.left = xAxis - size / 2 + "px";
    vizEl.style.top = yAxis - size / 2 + "px";
    vizEl.style.backgroundColor = color;
    vizEl.style.width = size + "px";
    vizEl.style.height = size + "px";
    vizEl.style.borderRadius = radius;

    el.appendChild(vizEl);
  }
});
