import { defineComponent, h } from 'vue';

export const Bake = defineComponent({
  name: 'Bake',
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
        innerHTML: `<path d="M12 12v6.75M12 12l6-3.333M12 12 6 8.667m6 10.083 6-3.333v-6.75M12 18.75l-6-3.333v-6.75M21 6.75V4.5A1.5 1.5 0 0 0 19.5 3h-2.25M21 17.25v2.25a1.5 1.5 0 0 1-1.5 1.5h-2.25M3 6.75V4.5A1.5 1.5 0 0 1 4.5 3h2.25M3 17.25v2.25A1.5 1.5 0 0 0 4.5 21h2.25M18 8.667l-6-3.334-6 3.334"/>`,
      }, children);
    };
  },
});
