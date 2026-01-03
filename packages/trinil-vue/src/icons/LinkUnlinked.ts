import { defineComponent, h } from 'vue';

export const LinkUnlinked = defineComponent({
  name: 'LinkUnlinked',
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
        innerHTML: `<path d="m10.5 7.5.302-.905a6 6 0 0 1 1.45-2.348l.498-.497a5.303 5.303 0 0 1 7.5 7.5l-.497.497a6 6 0 0 1-2.348 1.451l-.905.302m-3 3-.302.905a6 6 0 0 1-1.45 2.348l-.498.497a5.303 5.303 0 1 1-7.5-7.5l.497-.498a6 6 0 0 1 2.348-1.45L7.5 10.5m9 8.25 1.5 3m.75-5.25 3 .75M7.5 5.25l-.75-3M5.25 7.5l-3-.75"/>`,
      }, children);
    };
  },
});
