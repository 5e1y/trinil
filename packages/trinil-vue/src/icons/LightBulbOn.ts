import { defineComponent, h } from 'vue';

export const LightBulbOn = defineComponent({
  name: 'LightBulbOn',
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
        innerHTML: `<path d="M9.75 17.25v1.5a1.5 1.5 0 0 0 1.5 1.5h1.5a1.5 1.5 0 0 0 1.5-1.5v-1.5m-4.5 0h4.5m-4.5 0v-2.073c0-.568-.332-1.073-.79-1.41a5.43 5.43 0 0 1-2.21-4.371V9a5.25 5.25 0 0 1 10.5 0v.396c0 1.743-.835 3.36-2.21 4.37-.458.338-.79.843-.79 1.411v2.073M21 4.5l-1.5.75m2.25 4.5h-1.5m-.75 4.5L21 15M3.75 9.75h-1.5m2.25-4.5L3 4.5m1.5 9.75L3 15"/>`,
      }, children);
    };
  },
});
