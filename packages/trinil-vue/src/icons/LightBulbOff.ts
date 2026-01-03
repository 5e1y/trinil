import { defineComponent, h } from 'vue';

export const LightBulbOff = defineComponent({
  name: 'LightBulbOff',
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
        innerHTML: `<path d="M9.75 18.75v1.5a1.5 1.5 0 0 0 1.5 1.5h1.5a1.5 1.5 0 0 0 1.5-1.5v-1.5m-4.5 0h4.5m-4.5 0v-1.378c0-.969-.644-1.797-1.46-2.318a6.58 6.58 0 0 1-3.04-5.547V9a6.75 6.75 0 0 1 13.5 0v.507a6.58 6.58 0 0 1-3.04 5.547c-.816.521-1.46 1.35-1.46 2.318v1.378"/>`,
      }, children);
    };
  },
});
