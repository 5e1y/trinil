import { defineComponent, h } from 'vue';

export const Biohazard = defineComponent({
  name: 'Biohazard',
  props: {
    size: { type: Number, default: 24 },
    color: { type: String, default: 'currentColor' },
    strokeWidth: { type: Number, default: 1.5 },
    class: { type: String, default: undefined },
    title: { type: String, default: undefined },
    ariaLabel: { type: String, default: undefined },
  },
  setup(props) {
    return () => {
      const children = props.title ? [h('title', {}, props.title)] : [];
      return h('svg', {
        xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'none', stroke: props.color,
        'stroke-width': props.strokeWidth, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'vector-effect': 'non-scaling-stroke',
        width: props.size, height: props.size, class: props.class, role: 'img', 'aria-label': props.ariaLabel,
        innerHTML: `<path d="M14.866 18.066a5.66 5.66 0 0 0 2.832-4.907m-11.331 0a5.66 5.66 0 0 0 2.832 4.907m0-9.814a5.64 5.64 0 0 1 2.834-.759c1.032 0 2 .276 2.833.759m4.561 11.83a4.723 4.723 0 0 1-6.883-5.45m9.244 1.36a4.723 4.723 0 0 0-8.232-3.16m-8.918 7.25a4.723 4.723 0 0 0 6.884-5.45m-9.245 1.36a4.723 4.723 0 0 1 8.232-3.16m-.837-9.428a4.723 4.723 0 0 0 1.237 8.676m3.484-8.676a4.723 4.723 0 0 1-1.237 8.676m.4.752a1.56 1.56 0 0 1-1.012 1.8m1.012-1.8a1.55 1.55 0 0 0-.4-.752m-.613 2.552a1.55 1.55 0 0 1-1.021 0m0 0a1.56 1.56 0 0 1-1.013-1.8m0 0c.061-.288.203-.547.4-.752m0 0c.283-.295.682-.479 1.124-.479.441 0 .84.184 1.124.48"/>`,
      }, children);
    };
  },
});
