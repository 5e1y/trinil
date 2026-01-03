import { defineComponent, h } from 'vue';

export const AxisZ = defineComponent({
  name: 'AxisZ',
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
        innerHTML: `<path d="m5.25 18.75.375-.375M3 21l.375-.375M8.25 15.75v-1.492m0 1.492 1.5.25m-1.5-.25-6 6m6-10.492V10.5m0-3v-.75m0-3V3m4.5 13.5.75.125m3 .5.75.125m3 .5.75.125M2.25 21.75v-2.009m0 2.009h1.975"/>`,
      }, children);
    };
  },
});
