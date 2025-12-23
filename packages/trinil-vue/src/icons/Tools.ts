import { defineComponent, h } from 'vue';

export const Tools = defineComponent({
  name: 'Tools',
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
        innerHTML: `<path d="m11.5 11 1.5 1.5M11.5 11l1.25-1.25M11.5 11a.86.86 0 0 0-1.088-.108L8.9 11.9m4.1.6 1.25-1.25M13 12.5c.29.29.336.746.108 1.088L12.1 15.1m.65-5.35-1.46-1.46c-.243-.243-.335-.595-.305-.938Q11 7.178 11 7a4 4 0 0 0-4-4h-.293a.5.5 0 0 0-.353.854L8.46 5.96a.1.1 0 0 1 .026.095l-.471 1.887a.1.1 0 0 1-.073.073l-1.887.471a.1.1 0 0 1-.095-.026L3.854 6.354A.5.5 0 0 0 3 6.707V7a4 4 0 0 0 4.352 3.985c.343-.03.695.062.938.305l.61.61m3.85-2.15 3.664-3.664A2 2 0 0 0 17 4.672c0-.107.056-.206.147-.26l2.286-1.372a.1.1 0 0 1 .122.015l1.39 1.39a.1.1 0 0 1 .015.122l-1.372 2.286a.3.3 0 0 1-.26.147 2 2 0 0 0-1.414.586L14.25 11.25m0 0 1.46 1.46c.243.243.595.335.938.305Q16.822 13 17 13a4 4 0 0 1 4 4v.293a.5.5 0 0 1-.854.354L18.04 15.54a.1.1 0 0 0-.095-.026l-1.887.471a.1.1 0 0 0-.073.073l-.471 1.887a.1.1 0 0 0 .026.095l2.106 2.107a.5.5 0 0 1-.353.853H17a4 4 0 0 1-3.985-4.352c.03-.343-.062-.694-.305-.938l-.61-.61m0 0-.39.585a15 15 0 0 1-5.773 5.097.68.68 0 0 1-.782-.128l-1.81-1.808a.68.68 0 0 1-.126-.783 15 15 0 0 1 5.095-5.773l.586-.39"/>`,
      }, children);
    };
  },
});
