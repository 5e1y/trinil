import { defineComponent, h } from 'vue';

export const UserGroupLock = defineComponent({
  name: 'UserGroupLock',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="M10.013 10.013a6 6 0 1 1 10.595 1.759m-10.595-1.759a6 6 0 0 1 2.854 1.905m-2.854-1.905A6 6 0 0 0 5.25 20.947m7.617-9.03A3 3 0 0 1 15.75 9.75m-2.883 2.168q.39.468.68 1.01M8.25 17.25a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5m0 0a3 3 0 0 0-3 3v.697m3-3.697a3 3 0 0 1 3 3v.697a6 6 0 0 1-3 .803 6 6 0 0 1-3-.803M15.75 9.75a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5m0 0c1.114 0 2.087.607 2.604 1.51M16.5 18v-1.125a2.625 2.625 0 0 1 5.25 0V18m-5.25 0h5.25m-5.25 0a.75.75 0 0 0-.75.75V21a1.5 1.5 0 0 0 1.5 1.5H21a1.5 1.5 0 0 0 1.5-1.5v-2.25a.75.75 0 0 0-.75-.75"/>`,
      }, children);
    };
  },
});
