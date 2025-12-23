import { defineComponent, h } from 'vue';

export const Syringe = defineComponent({
  name: 'Syringe',
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
        innerHTML: `<path d="M3.5 20.5 6 18m0 0h2.586a1 1 0 0 0 .707-.293L10 17m-4 1v-2.586a1 1 0 0 1 .293-.707L13.5 7.5m3 3 .238.238a11 11 0 0 1 2.06 2.859M16.5 10.5 15 9m1.5 1.5L14 13m-.5-5.5-.238-.238a11 11 0 0 0-2.859-2.06M13.5 7.5 15 9m0 0 4-4m0 0 2.5 2.5M19 5l-2.5-2.5M10 17l-1-1m1 1 2-2m0 0 2-2m-2 2-1-1m3-1-1-1"/>`,
      }, children);
    };
  },
});
