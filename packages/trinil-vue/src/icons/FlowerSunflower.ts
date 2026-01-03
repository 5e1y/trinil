import { defineComponent, h } from 'vue';

export const FlowerSunflower = defineComponent({
  name: 'FlowerSunflower',
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
        innerHTML: `<path d="M9.03 4.828A3 3 0 0 0 4.827 9.03m4.201-4.2a3 3 0 0 1 5.942 0m-5.942 0 .961 2.32m4.98-2.32a3 3 0 0 1 4.202 4.2m-4.201-4.2-.961 2.32m5.162 1.88a3 3 0 0 1 0 5.942m0-5.942-2.32.961m2.32 4.98a3 3 0 0 1-4.201 4.202m4.2-4.201-2.32-.961m-1.88 5.162a3 3 0 0 1-5.942 0m5.942 0-.961-2.32m-4.98 2.32a3 3 0 0 1-4.202-4.201m4.201 4.2.961-2.32m-5.162-1.88a3 3 0 0 1 0-5.942m0 5.942 2.32-.961m-2.32-4.98 2.32.96m6.862-2.842A5.2 5.2 0 0 0 12 6.75c-.712 0-1.39.142-2.01.398m4.02 0a5.27 5.27 0 0 1 2.842 2.842m0 0c.256.62.398 1.298.398 2.01s-.142 1.39-.398 2.01m0 0a5.27 5.27 0 0 1-2.842 2.842m0 0a5.2 5.2 0 0 1-2.01.398c-.712 0-1.39-.142-2.01-.398m0 0a5.27 5.27 0 0 1-2.842-2.842m0 0A5.2 5.2 0 0 1 6.75 12c0-.712.142-1.39.398-2.01m0 0A5.27 5.27 0 0 1 9.99 7.148"/>`,
      }, children);
    };
  },
});
