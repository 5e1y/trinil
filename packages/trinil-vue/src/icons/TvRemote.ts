import { defineComponent, h } from 'vue';

export const TvRemote = defineComponent({
  name: 'TvRemote',
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
        innerHTML: `<path d="M12 9.75V7.5m0 0V5.25m0 2.25H9.75m2.25 0h2.25m-4.5 9.75v-.75m4.5.75v-.75m-4.5-3v-.75m4.5.75v-.75M6 3.75v12a6 6 0 0 0 12 0v-12a1.5 1.5 0 0 0-1.5-1.5h-9A1.5 1.5 0 0 0 6 3.75"/>`,
      }, children);
    };
  },
});
