import { defineComponent, h } from 'vue';

export const Psu = defineComponent({
  name: 'Psu',
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
        innerHTML: `<path d="M14.25 16.5v-9a1.5 1.5 0 0 0-1.5-1.5h-9a1.5 1.5 0 0 0-1.5 1.5V18a1.5 1.5 0 0 0 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5zm0 0c3.75 2.25 7.5 0 7.5-3 0-.843-.244-1.491-.618-2.196m0 0c-1.428-2.689-4.75-1.583-3.671.695.704 1.486 2.695.84 3.67-.695m0 0c1.1-1.732.907-4.595-3.882-6.804m-7.5 5.25-3 3h3l-3 3"/>`,
      }, children);
    };
  },
});
