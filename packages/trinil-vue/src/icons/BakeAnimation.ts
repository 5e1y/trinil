import { defineComponent, h } from 'vue';

export const BakeAnimation = defineComponent({
  name: 'BakeAnimation',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="M6.75 3H4.5A1.5 1.5 0 0 0 3 4.5v2.25M17.25 3h2.25A1.5 1.5 0 0 1 21 4.5v2.25M3 17.25v2.25A1.5 1.5 0 0 0 4.5 21h2.25m.748-3.803.002.053a.75.75 0 1 1-.002-.053m0 0a5.26 5.26 0 0 0 4.02-2.998m0 0a2.25 2.25 0 0 1 .963-4.397m-.962 4.397q.233.05.481.051a2.25 2.25 0 0 0 .481-4.448m4.02-3L16.5 6.75a.75.75 0 1 1 .002.053m0 0a5.26 5.26 0 0 0-4.02 3M18.375 22.5v-4.125m0 0V14.25m0 4.125H22.5m-4.125 0H14.25"/>`,
      }, children);
    };
  },
});
