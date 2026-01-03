import { defineComponent, h } from 'vue';

export const FruitApple = defineComponent({
  name: 'FruitApple',
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
        innerHTML: `<path d="M14.274 7.167c3.238-.81 6.726.491 6.726 5.318 0 5.821-3.381 10.617-8.505 8.919a1.6 1.6 0 0 0-.99 0C6.381 23.102 3 18.306 3 12.485c0-6.006 5.4-6.552 9-4.368m2.274-.95a8.3 8.3 0 0 0-2.274.95m2.274-.95c1.883-1.164 2.673-2.875 2.67-4.175 0-.52-.559-.846-1.111-.712-3.86.94-4.019 4.486-3.833 5.837m2.274-.95a8.3 8.3 0 0 1-2.274.95m0 0L9.6 3.749"/>`,
      }, children);
    };
  },
});
