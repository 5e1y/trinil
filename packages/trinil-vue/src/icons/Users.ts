import { defineComponent, h } from 'vue';

export const Users = defineComponent({
  name: 'Users',
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
        innerHTML: `<path d="M9 14.25a5.25 5.25 0 1 1 3-9.559M9 14.25H6.75a4.5 4.5 0 0 0-4.5 4.5 1.5 1.5 0 0 0 1.5 1.5h10.5m-5.25-6h2.25q.383 0 .75.062m-3-.062c1.115 0 2.15-.348 3-.941m2.25 6.941a1.5 1.5 0 0 0 1.5-1.5c0-2.23-1.622-4.08-3.75-4.438m2.25 5.938h6a1.5 1.5 0 0 0 1.5-1.5 4.5 4.5 0 0 0-4.5-4.5H15m0 0a5.25 5.25 0 1 0-3-9.559m3 9.559h-2.25q-.383 0-.75.062m3-.062a5.23 5.23 0 0 1-3-.941m0-8.618A5.24 5.24 0 0 1 14.25 9c0 1.784-.89 3.36-2.25 4.309"/>`,
      }, children);
    };
  },
});
