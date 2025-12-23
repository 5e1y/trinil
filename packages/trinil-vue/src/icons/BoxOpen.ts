import { defineComponent, h } from 'vue';

export const BoxOpen = defineComponent({
  name: 'BoxOpen',
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
        innerHTML: `<path d="m4.5 9.1 7.5-4m-7.5 4 7.5 4m-7.5-4-1.346-.718a1 1 0 0 1 0-1.764L8.53 3.75a1 1 0 0 1 .942 0L12 5.1m-7.5 4-1.346.718a1 1 0 0 0 0 1.764L4.5 12.3M12 5.1l7.5 4m-7.5-4 2.53-1.349a1 1 0 0 1 .94 0l5.376 2.867a1 1 0 0 1 0 1.764L19.5 9.1m-7.5 4 7.5-4m-7.5 4-2.53 1.349a1 1 0 0 1-.94 0L4.5 12.3m7.5.8 2.53 1.349a1 1 0 0 0 .94 0L19.5 12.3m-7.5.8v7.367M19.5 9.1l1.346.718a1 1 0 0 1 0 1.764L19.5 12.3m0 0V16a1 1 0 0 1-.53.882l-6.5 3.467a1 1 0 0 1-.47.118M4.5 12.3V16a1 1 0 0 0 .53.882l6.5 3.467a1 1 0 0 0 .47.118"/>`,
      }, children);
    };
  },
});
