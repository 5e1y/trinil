import { defineComponent, h } from 'vue';

export const LiverCheck = defineComponent({
  name: 'LiverCheck',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="m11.905 15.052-4.279 4.32a3.05 3.05 0 0 1-2.163.925c-1.758 0-3.183-1.553-3.183-3.47v-6.224c0-2.508 1.598-4.68 3.844-5.223a4.5 4.5 0 0 1 1.944-.041l4.906.972m-1.07 8.741h.022m-.021 0c-1.284-3.73.178-7.382 1.07-8.741m0 0 4.681-.51a3.2 3.2 0 0 1 1.309.127l1.344.419c.992.309 1.6 1.395 1.398 2.497a2.16 2.16 0 0 1-.96 1.45l-1.67 1.041M14.25 18.75l2.894 2.894a.15.15 0 0 0 .212 0l4.91-4.91"/>`,
      }, children);
    };
  },
});
