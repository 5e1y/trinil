import { defineComponent, h } from 'vue';

export const TrashRestore = defineComponent({
  name: 'TrashRestore',
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
        innerHTML: `<path d="M18.75 8.25h1.5m-1.5 0-1.352 12.166a1.5 1.5 0 0 1-1.49 1.334H8.092a1.5 1.5 0 0 1-1.491-1.334L5.25 8.25m13.5 0H16.5m-12.75 0h1.5m0 0H7.5m0 0v-1.5a4.5 4.5 0 0 1 9 0v1.5m-9 0h9M12 18.75v-7.5m0 0 3 3m-3-3-3 3"/>`,
      }, children);
    };
  },
});
