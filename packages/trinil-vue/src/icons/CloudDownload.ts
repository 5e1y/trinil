import { defineComponent, h } from 'vue';

export const CloudDownload = defineComponent({
  name: 'CloudDownload',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="M5.386 10.193a5.25 5.25 0 1 1 10.301-.38m-10.3.38A5.2 5.2 0 0 1 7.5 9.75c.99 0 1.916.274 2.706.75m-4.82-.307A5.251 5.251 0 0 0 7.5 20.25h4.134m4.053-10.438a5.241 5.241 0 0 1 4.97 1.98m-4.97-1.98a5.2 5.2 0 0 0-1.893.688m4.956 3.75v5.25m0 0L21 17.25m-2.25 2.25-2.25-2.25m-1.5 3V21a1.5 1.5 0 0 0 1.5 1.5H21a1.5 1.5 0 0 0 1.5-1.5v-.75"/>`,
      }, children);
    };
  },
});
