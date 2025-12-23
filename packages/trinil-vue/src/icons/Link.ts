import { defineComponent, h } from 'vue';

export const Link = defineComponent({
  name: 'Link',
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
        innerHTML: `<path d="M7.5 12h9m-3.441-2c.295-1.218 1.673-2 3.441-2h1c2 0 3.5 1.5 3.5 3.5v1c0 2-1.5 3.5-3.5 3.5h-1c-1.768 0-3.146-.782-3.441-2m-2.118-4C10.646 8.782 9.268 8 7.5 8h-1C4.5 8 3 9.5 3 11.5v1c0 2 1.5 3.5 3.5 3.5h1c1.768 0 3.146-.782 3.441-2"/>`,
      }, children);
    };
  },
});
