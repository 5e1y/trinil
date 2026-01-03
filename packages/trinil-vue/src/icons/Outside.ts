import { defineComponent, h } from 'vue';

export const Outside = defineComponent({
  name: 'Outside',
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
        innerHTML: `<path d="m19.5 21-.844-2.25m0 0h-5.062m5.062 0H21m-2.344 0-1.125-3m-3.937 3L12.75 21m.844-2.25H11.25m2.344 0 1.125-3M6 21v-2.25m0 0a3.008 3.008 0 0 1-2.937-3.66l2.024-9.108a.935.935 0 0 1 1.826 0l2.023 9.107A3.008 3.008 0 0 1 6 18.75m12-8.25V12m-5.25-6.75h-1.5m3 3.75-.95.95m1.419 5.8h2.812m-2.812 0H13.5m4.031 0h1.219m-3-10.5a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0"/>`,
      }, children);
    };
  },
});
