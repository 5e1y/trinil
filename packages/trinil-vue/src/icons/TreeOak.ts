import { defineComponent, h } from 'vue';

export const TreeOak = defineComponent({
  name: 'TreeOak',
  props: {
    size: { type: Number, default: 24 },
    color: { type: String, default: 'currentColor' },
    class: { type: String, default: undefined },
    title: { type: String, default: undefined },
    ariaLabel: { type: String, default: undefined },
  },
  setup(props) {
    return () => {
      const children = props.title ? [h('title', {}, props.title)] : [];
      return h('svg', {
        xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'none', stroke: props.color,
        'stroke-width': 1.5, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'vector-effect': 'non-scaling-stroke',
        width: props.size, height: props.size, class: props.class, role: 'img', 'aria-label': props.ariaLabel,
        innerHTML: `<path d="M5.527 8.26a5.25 5.25 0 1 0 6.269 8.361.2.2 0 0 1 .204-.038M5.527 8.26a4.75 4.75 0 0 1 8.207-3.74m-8.207 3.74A5.2 5.2 0 0 1 8 7.506m4 9.077c.698.27 1.457.417 2.25.417h.5a6.25 6.25 0 1 0 0-12.5h-.5q-.261 0-.516.021M12 16.583V21m0-4.417V15.5m1.734-10.979a6.2 6.2 0 0 0-2.734.89M12 15.5h1a2 2 0 0 0 2-2V13m-3 2.5V13m0 0v-1.5m0 1.5H9.5"/>`,
      }, children);
    };
  },
});
