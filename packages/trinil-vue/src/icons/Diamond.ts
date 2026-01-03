import { defineComponent, h } from 'vue';

export const Diamond = defineComponent({
  name: 'Diamond',
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
        innerHTML: `<path d="m17.25 3 4.5 6.75M17.25 3H12m5.25 0-1.961 6.75m6.461 0L12 21m9.75-11.25h-6.461M12 21 2.25 9.75M12 21 8.712 9.75M12 21l3.289-11.25m-13.039 0L6.75 3m-4.5 6.75h6.462M6.75 3l1.962 6.75M6.75 3H12M8.712 9.75 12 3M8.712 9.75h6.577M12 3l3.289 6.75"/>`,
      }, children);
    };
  },
});
