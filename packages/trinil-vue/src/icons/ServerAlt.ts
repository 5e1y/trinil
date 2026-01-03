import { defineComponent, h } from 'vue';

export const ServerAlt = defineComponent({
  name: 'ServerAlt',
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
        innerHTML: `<path d="M13.5 6.75h.75m3 0H18m-3.75 10.5h-.75m4.5 0h-.75m-7.5 0v-1.5a1.5 1.5 0 0 1 1.5-1.5h9a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-9a1.5 1.5 0 0 1-1.5-1.5zm0 0h-3m0 0A2.25 2.25 0 0 0 4.5 15m2.25 2.25A2.25 2.25 0 0 1 4.5 19.5M9.75 6.75v-1.5a1.5 1.5 0 0 1 1.5-1.5h9a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-9a1.5 1.5 0 0 1-1.5-1.5zm0 0h-3m0 0A2.25 2.25 0 0 0 4.5 4.5m2.25 2.25A2.25 2.25 0 0 1 4.5 9m0 0v6m0-6a2.25 2.25 0 0 1 0-4.5m0 10.5a2.25 2.25 0 0 0 0 4.5m0 0v2.25m0-17.25V2.25"/>`,
      }, children);
    };
  },
});
