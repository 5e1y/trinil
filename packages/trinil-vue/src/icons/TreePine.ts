import { defineComponent, h } from 'vue';

export const TreePine = defineComponent({
  name: 'TreePine',
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
        innerHTML: `<path d="M12 21.75v-3m0 0c-4.092.63-7.19-3.62-5.338-7.323l4.253-8.506a1.214 1.214 0 0 1 2.17 0l4.253 8.506C19.19 15.13 16.092 19.38 12 18.75"/>`,
      }, children);
    };
  },
});
