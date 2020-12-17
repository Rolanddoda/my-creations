export default {
  path: "/my-stats",
  name: "My stats",
  component: () => import("./MyStats"),
  meta: {
    icon: "mdi-chart-timeline-variant-shimmer"
  }
};
