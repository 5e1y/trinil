import { defineComponent, h } from 'vue';

export const CloudSnowRain = defineComponent({
  name: 'CloudSnowRain',
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
        innerHTML: `<path d="M15.557 6.084a5.252 5.252 0 0 0-10.203.373m10.203-.373A5 5 0 0 1 16.5 6a5.25 5.25 0 1 1 0 10.5h-9A5.25 5.25 0 0 1 5.354 6.457m10.203-.373a5.2 5.2 0 0 0-1.763.666m-8.44-.293.032-.014A5.2 5.2 0 0 1 7.5 6c.99 0 1.916.274 2.706.75M8.25 19.5l2.25 2.25m-2.25 0 2.25-2.25m8.25 0L21 21.75m-2.25 0L21 19.5m-6.75 0 .75 2.25M3.75 19.5l.75 2.25"/>`,
      }, children);
    };
  },
});
