import { defineComponent, h } from 'vue';

export const Cone = defineComponent({
  name: 'Cone',
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
        innerHTML: `<path d="M20.97 16.933c-.377 2.697-4.25 4.817-8.97 4.817s-8.592-2.12-8.97-4.817c-.039-.281.05-.56.202-.8L12 2.25l8.768 13.883c.152.24.241.519.202.8"/>`,
      }, children);
    };
  },
});
