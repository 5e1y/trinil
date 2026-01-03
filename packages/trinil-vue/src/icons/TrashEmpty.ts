import { defineComponent, h } from 'vue';

export const TrashEmpty = defineComponent({
  name: 'TrashEmpty',
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
        innerHTML: `<path d="M18.75 8.25h1.5m-1.5 0-1.352 12.166a1.5 1.5 0 0 1-1.49 1.334H8.092a1.5 1.5 0 0 1-1.491-1.334L5.25 8.25m13.5 0H5.25m-1.5 0h1.5m9.375 3-.75 7.5m-4.5-7.5.75 7.5M6.75 2.25l.656.75m9.844-.75-.656.75m2.7 2.03-.912.403M4.706 5.031l.912.402"/>`,
      }, children);
    };
  },
});
