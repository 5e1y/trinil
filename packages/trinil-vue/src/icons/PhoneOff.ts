import { defineComponent, h } from 'vue';

export const PhoneOff = defineComponent({
  name: 'PhoneOff',
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
        innerHTML: `<path d="m18 3-6.418 9.628m0 0a20 20 0 0 0 3.269 2.597c.081.052.188.04.256-.028l.695-.695a1 1 0 0 1 1.293-.103l2.286 1.653c.366.265.508.74.3 1.14-.26.497-.675 1.177-1.244 1.746-1.035 1.035-2.568 1.455-3.906.86a19.1 19.1 0 0 1-5.342-3.581m2.393-3.59-2.393 3.59m0 0L6 21m3.7-10.5a20 20 0 0 1-.985-1.41.206.206 0 0 1 .028-.257l.697-.697a1 1 0 0 0 .105-1.29l-1.67-2.324c-.228-.318-.623-.472-.986-.324a5.3 5.3 0 0 0-1.74 1.159C4.036 6.467 3.654 8.14 4.346 9.55a24 24 0 0 0 2.89 4.557"/>`,
      }, children);
    };
  },
});
