import { defineComponent, h } from 'vue';

export const UserGroup = defineComponent({
  name: 'UserGroup',
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
        innerHTML: `<path d="M13.987 13.987c.557.17 1.15.263 1.763.263a6 6 0 0 0 3-.803m-4.763.54c.17.557.263 1.15.263 1.763 0 2.22-1.207 4.16-3 5.197m2.737-6.96a6 6 0 0 0-1.12-2.07m-2.854-1.904a6 6 0 1 1 8.737 3.434m-8.737-3.434a6 6 0 0 1 2.854 1.905m-2.854-1.905A6 6 0 0 0 5.25 20.947m7.617-9.03A3 3 0 0 1 15.75 9.75m-7.5 7.5a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5m0 0a3 3 0 0 0-3 3v.697m3-3.697a3 3 0 0 1 3 3v.697m0 0a6 6 0 0 1-3 .803 6 6 0 0 1-3-.803M15.75 9.75a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5m0 0a3 3 0 0 1 3 3v.697"/>`,
      }, children);
    };
  },
});
