import { defineComponent, h } from 'vue';

export const GameController = defineComponent({
  name: 'GameController',
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
        innerHTML: `<path d="M8 7.5v2m0 0v2m0-2H6m2 0h2m6-2V8m2 1.25v.5m-4-.5v.5M16 11v.5M4.422 7.412l-1.474 7.737a2.285 2.285 0 0 0 3.86 2.043l2.9-2.9a1 1 0 0 1 .706-.292h3.172a1 1 0 0 1 .707.293l2.9 2.899a2.285 2.285 0 0 0 3.86-2.043l-1.475-7.737a.96.96 0 0 0-.43-.64 13.52 13.52 0 0 0-14.295 0 .96.96 0 0 0-.431.64Z"/>`,
      }, children);
    };
  },
});
