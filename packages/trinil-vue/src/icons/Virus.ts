import { defineComponent, h } from 'vue';

export const Virus = defineComponent({
  name: 'Virus',
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
        innerHTML: `<path d="m7.914 5.618-.506-.507A1.624 1.624 0 0 0 5.11 7.408l.507.506m2.296-2.296.866.866m-.866-.866a7.5 7.5 0 0 1 2.377-1.002.11.11 0 0 0 .085-.106v-.628a1.624 1.624 0 0 1 3.248 0v.628c0 .051.035.095.085.106.857.198 1.658.54 2.377 1.002M6.484 8.78l-.866-.866m0 0a7.5 7.5 0 0 0-1.002 2.377.11.11 0 0 1-.106.085h-.628a1.624 1.624 0 1 0 0 3.248h.628a.11.11 0 0 1 .106.085c.191.828.518 1.604.955 2.303a.11.11 0 0 1-.015.135l-.445.445a1.624 1.624 0 1 0 2.297 2.296l.444-.444a.11.11 0 0 1 .136-.015c.7.437 1.475.764 2.303.955a.11.11 0 0 1 .085.106v.628a1.624 1.624 0 0 0 3.248 0v-.628a.11.11 0 0 1 .085-.106 7.5 7.5 0 0 0 2.303-.955.11.11 0 0 1 .136.015l.444.444a1.624 1.624 0 1 0 2.297-2.296l-.445-.445a.11.11 0 0 1-.015-.135c.437-.7.764-1.476.955-2.303a.11.11 0 0 1 .106-.085h.628a1.624 1.624 0 0 0 0-3.248h-.628a.11.11 0 0 1-.106-.085 7.5 7.5 0 0 0-1.002-2.377m0 0 .506-.506a1.624 1.624 0 1 0-2.296-2.297l-.506.507m2.296 2.296-.866.866M15.22 6.484l.866-.866m-5.802 7.464A1.624 1.624 0 1 1 8.21 11.01m4.937 3.696a1.624 1.624 0 1 0 2.1-2.063"/>`,
      }, children);
    };
  },
});
