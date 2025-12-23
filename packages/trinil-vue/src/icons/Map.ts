import { defineComponent, h } from 'vue';

export const Map = defineComponent({
  name: 'Map',
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
        innerHTML: `<path d="M9 17.505a.1.1 0 0 0-.032.006l-4.652 1.55A1 1 0 0 1 3 18.113V7.72a1 1 0 0 1 .684-.949l5.284-1.761A.1.1 0 0 1 9 5.005m0 12.5a.1.1 0 0 1 .032.006l5.936 1.978a.1.1 0 0 0 .032.006m-6-1.99v-12.5m0 0a.1.1 0 0 1 .032.006l5.936 1.978a.1.1 0 0 0 .032.006m0 0a.1.1 0 0 0 .032-.006l4.652-1.55A1 1 0 0 1 21 6.387V16.78a1 1 0 0 1-.684.949l-5.284 1.761a.1.1 0 0 1-.032.006m0-12.5v12.5"/>`,
      }, children);
    };
  },
});
