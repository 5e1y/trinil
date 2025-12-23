import { defineComponent, h } from 'vue';

export const LinkUnlinked = defineComponent({
  name: 'LinkUnlinked',
  props: {
    size: { type: Number, default: 24 },
    color: { type: String, default: 'currentColor' },
    class: { type: String, default: undefined },
    title: { type: String, default: undefined },
    ariaLabel: { type: String, default: undefined },
  },
  setup(props) {
    return () => {
      const children = props.title ? [h('title', {}, props.title)] : [];
      return h('svg', {
        xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'none', stroke: props.color,
        'stroke-width': 1.5, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'vector-effect': 'non-scaling-stroke',
        width: props.size, height: props.size, class: props.class, role: 'img', 'aria-label': props.ariaLabel,
        innerHTML: `<path d="M15.5 16h2c2 0 3.5-1.5 3.5-3.5v-1c0-2-1.5-3.5-3.5-3.5h-2m-7 8h-2c-2 0-3.5-1.5-3.5-3.5v-1C3 9.5 4.5 8 6.5 8h2M13 6.5l1-2m-3 2-1-2m3 13 1 2m-3-2-1 2"/>`,
      }, children);
    };
  },
});
