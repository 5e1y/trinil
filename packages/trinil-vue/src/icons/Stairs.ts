import { defineComponent, h } from 'vue';

export const Stairs = defineComponent({
  name: 'Stairs',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="M3 21v-5.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 0 .75-.75v-4.5A.75.75 0 0 1 9.75 9h4.5a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75V21"/>`,
      }, children);
    };
  },
});
