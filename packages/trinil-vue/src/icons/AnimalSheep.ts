import { defineComponent, h } from 'vue';

export const AnimalSheep = defineComponent({
  name: 'AnimalSheep',
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
        innerHTML: `<path d="M21.75 10.5c0 1.227-.59 2.316-1.5 3a3.75 3.75 0 0 1-3 3.675m4.5-6.675c0-1.227-.59-2.316-1.5-3a3.75 3.75 0 0 0-6-3A3.73 3.73 0 0 0 12 3.75c-.844 0-1.623.279-2.25.75a3.75 3.75 0 0 0-6 3 3.74 3.74 0 0 0-1.5 3c0 1.227.59 2.316 1.5 3a3.75 3.75 0 0 0 3 3.675m15-6.675v6.75m-15-.075a3.77 3.77 0 0 0 3-.675m-3 .675v3.075m3-3.75c.627.471 1.406.75 2.25.75s1.623-.279 2.25-.75m-4.5 0v3.75m4.5-3.75a3.73 3.73 0 0 0 3 .675m-3-.675v3.75m3-3.075v3.075M7.5 9v3a1.5 1.5 0 0 0 3 0V9m-3 0h3m-3 0L6 9.75M10.5 9l1.5.75"/>`,
      }, children);
    };
  },
});
