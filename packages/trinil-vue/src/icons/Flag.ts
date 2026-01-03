import { defineComponent, h } from 'vue';

export const Flag = defineComponent({
  name: 'Flag',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="M3 21v-6m0 0V3.204c0-.097.099-.162.187-.124l1.35.579a9.75 9.75 0 0 0 7.463.09 9.75 9.75 0 0 1 7.462.092l1.455.623c.05.022.083.071.083.126v11.706a.134.134 0 0 1-.187.124l-1.35-.58A9.75 9.75 0 0 0 12 15.75a9.75 9.75 0 0 1-7.462-.091z"/>`,
      }, children);
    };
  },
});
