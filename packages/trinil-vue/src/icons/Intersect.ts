import { defineComponent, h } from 'vue';

export const Intersect = defineComponent({
  name: 'Intersect',
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
        innerHTML: `<path d="M16.5 7.5h3c.414 0 .79.168 1.06.44.272.27.44.646.44 1.06v10.5a1.5 1.5 0 0 1-1.5 1.5H9c-.414 0-.79-.168-1.06-.44a1.5 1.5 0 0 1-.44-1.06v-3m9-9v-3A1.5 1.5 0 0 0 15 3H4.5A1.5 1.5 0 0 0 3 4.5V15a1.5 1.5 0 0 0 1.5 1.5h3m9-9-9 9m9-9V12m0-4.5H12m-4.5 9V12m0 4.5H12m4.5-4.5v3a1.5 1.5 0 0 1-1.5 1.5h-3m4.5-4.5L12 16.5m0-9H9A1.5 1.5 0 0 0 7.5 9v3M12 7.5 7.5 12"/>`,
      }, children);
    };
  },
});
