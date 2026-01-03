import { defineComponent, h } from 'vue';

export const Pen = defineComponent({
  name: 'Pen',
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
        innerHTML: `<path d="m19.5 12 1.81-1.81a1.5 1.5 0 0 0 0-2.122l-5.378-5.379a1.5 1.5 0 0 0-2.122 0L12 4.5m7.5 7.5L12 4.5m7.5 7.5c.42 3.786-2.513 7.561-6.27 8.188L4 21.726a1.49 1.49 0 0 1-1.307-.42M12 4.5c-3.786-.42-7.561 2.513-8.188 6.27L2.274 20a1.49 1.49 0 0 0 .42 1.307m6.965-6.966a2.25 2.25 0 1 1 3.182-3.182 2.25 2.25 0 0 1-3.182 3.182m0 0-6.966 6.966"/>`,
      }, children);
    };
  },
});
