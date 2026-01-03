import { defineComponent, h } from 'vue';

export const CloudSun = defineComponent({
  name: 'CloudSun',
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
        innerHTML: `<path d="M5.354 11.707a5.252 5.252 0 0 1 8.464-3.025m-8.464 3.025.032-.014A5.2 5.2 0 0 1 7.5 11.25c.99 0 1.916.274 2.706.75m-4.852-.293A5.251 5.251 0 0 0 7.5 21.75h9A5.25 5.25 0 0 0 18 11.467m-2.443-.133.13-.021a5.3 5.3 0 0 1 2.313.154m-2.443-.133a5.2 5.2 0 0 0-1.763.666m1.763-.665a5.26 5.26 0 0 0-1.739-2.653M12.75 4.5H10.5M18 9.75v1.717M14.25 8.25l-.432.432M15.75 4.5a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0"/>`,
      }, children);
    };
  },
});
