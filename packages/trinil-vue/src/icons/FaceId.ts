import { defineComponent, h } from 'vue';

export const FaceId = defineComponent({
  name: 'FaceId',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="M21 7.5v-3A1.5 1.5 0 0 0 19.5 3h-3m-9 0h-3A1.5 1.5 0 0 0 3 4.5v3m0 9v3A1.5 1.5 0 0 0 4.5 21h3m9 0h3a1.5 1.5 0 0 0 1.5-1.5v-3m-6-8.25v2.25M9 8.25v2.25m-2.25 3.75s1.5 1.5 5.25 1.5 5.25-1.5 5.25-1.5"/>`,
      }, children);
    };
  },
});
