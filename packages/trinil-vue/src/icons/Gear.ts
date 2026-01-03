import { defineComponent, h } from 'vue';

export const Gear = defineComponent({
  name: 'Gear',
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
        innerHTML: `<path d="M5.106 18.895a2.25 2.25 0 0 1 0-3.182l.243-.244a7.5 7.5 0 0 1-.506-1.219H4.5a2.25 2.25 0 0 1 0-4.5h.343q.2-.636.506-1.22l-.243-.242a2.25 2.25 0 1 1 3.182-3.182l.243.243a7.5 7.5 0 0 1 1.219-.506V4.5a2.25 2.25 0 0 1 4.5 0v.343q.637.2 1.22.506l.242-.243a2.25 2.25 0 0 1 3.182 3.182l-.243.243q.305.582.506 1.219h.343a2.25 2.25 0 0 1 0 4.5h-.343a7.5 7.5 0 0 1-.506 1.22l.243.242a2.25 2.25 0 1 1-3.182 3.182l-.243-.243a7.5 7.5 0 0 1-1.219.506v.343a2.25 2.25 0 0 1-4.5 0v-.343a7.5 7.5 0 0 1-1.22-.506l-.242.244a2.25 2.25 0 0 1-3.182 0M12 8.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5" clip-rule="evenodd"/>`,
      }, children);
    };
  },
});
