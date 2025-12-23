import { defineComponent, h } from 'vue';

export const Bug = defineComponent({
  name: 'Bug',
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
        innerHTML: `<path d="M7.5 11v2m0-2a2 2 0 0 1 2-2m-2 2A1.5 1.5 0 0 1 6 9.5V6m1.5 7v2m0-2h-.801a3 3 0 0 1-2.573-1.457L3.5 10.5m4 4.5v1.5a4.5 4.5 0 1 0 9 0V15m-9 0a9.5 9.5 0 0 0-3.276 5.106L4 21M9.5 9V7.5c0-.818.393-1.544 1-2M9.5 9h5m0 0V7.5c0-.818-.393-1.544-1-2m1 3.5a2 2 0 0 1 2 2m0 4v-2m0 2a9.5 9.5 0 0 1 3.276 5.106L20 21M18 6v3.5a1.5 1.5 0 0 1-1.5 1.5m0 2v-2m0 2h.801a3 3 0 0 0 2.573-1.457L20.5 10.5m-7-5A2.5 2.5 0 0 0 12 5c-.563 0-1.082.186-1.5.5m3 0 2-2m-5 2-2-2"/>`,
      }, children);
    };
  },
});
