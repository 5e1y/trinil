import { defineComponent, h } from 'vue';

export const Mortarboard = defineComponent({
  name: 'Mortarboard',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="m18.75 10.438 3-1.75L12 3 2.25 8.688l6 3.5m10.5-1.75L12 14.375l-3.75-2.187m10.5-1.75v5.977c.024 1.045-.474 1.883-1.51 2.701-3.238 2.558-7.241 2.5-10.48 0-1.031-.796-1.534-1.656-1.51-2.701V10.5m3 1.688 3.75-3.5m-3.75 3.5V16.5"/>`,
      }, children);
    };
  },
});
