import { defineComponent, h } from 'vue';

export const Cut = defineComponent({
  name: 'Cut',
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
        innerHTML: `<path d="M7.371 8.871a3 3 0 1 1-4.243-4.243 3 3 0 0 1 4.243 4.243m0 0L10.5 12m0 0 5.25 5.25M10.5 12l-3.129 3.129M10.5 12l5.25-5.25m-4.5 0v-1.5a1.5 1.5 0 0 1 1.5-1.5h5.379a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 1 .439 1.061V18.75a1.5 1.5 0 0 1-1.5 1.5h-7.5a1.5 1.5 0 0 1-1.5-1.5v-1.5m-3.879-2.121a3 3 0 1 1-4.243 4.243 3 3 0 0 1 4.243-4.243"/>`,
      }, children);
    };
  },
});
