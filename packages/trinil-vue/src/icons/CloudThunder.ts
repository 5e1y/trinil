import { defineComponent, h } from 'vue';

export const CloudThunder = defineComponent({
  name: 'CloudThunder',
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
        innerHTML: `<path d="M15.557 6.084a5.252 5.252 0 0 0-10.203.373m10.203-.373A5 5 0 0 1 16.5 6a5.25 5.25 0 1 1 0 10.5m-.943-10.416a5.2 5.2 0 0 0-1.763.666m-8.44-.293.032-.014A5.2 5.2 0 0 1 7.5 6c.99 0 1.916.274 2.706.75m-4.852-.293A5.251 5.251 0 0 0 7.5 16.5h3m6 0h-6m6 0-3 3h2.938l-2.188 2.25M10.5 16.5l-3 3h2.938L8.25 21.75"/>`,
      }, children);
    };
  },
});
