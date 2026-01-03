import { defineComponent, h } from 'vue';

export const Translate = defineComponent({
  name: 'Translate',
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
        innerHTML: `<path d="M15.75 13.5v-.75m0 .75h-3m3 0h1.5m-7.5.75v6a1.5 1.5 0 0 0 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5v-9a1.5 1.5 0 0 0-1.5-1.5h-6m-4.5 4.5v-3a1.5 1.5 0 0 1 .75-1.3m-.75 4.3h-6a1.5 1.5 0 0 1-1.5-1.5v-9a1.5 1.5 0 0 1 1.5-1.5h9a1.5 1.5 0 0 1 1.5 1.5v6m0 0h-3c-.273 0-.53.073-.75.2m8.25 3.55h-1.5m0 0c0 .932.25 2.728-1.5 4.078M10.5 9.95V9m5.25 8.578a7.6 7.6 0 0 1-2.25 1.172m2.25-1.172a6.2 6.2 0 0 1-1.091-1.078m1.091 1.078c.596.46 1.336.867 2.25 1.172m-12-7.5V9m0 0V7.5a2.25 2.25 0 0 1 4.5 0V9M6 9h4.5"/>`,
      }, children);
    };
  },
});
