import { defineComponent, h } from 'vue';

export const Snowflake = defineComponent({
  name: 'Snowflake',
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
        innerHTML: `<path d="M12 2.25v4.5m0 0-3-3m3 3 3-3m-3 3V12m0 0v5.25M12 12l4.547-2.625M12 12l-4.547 2.625M12 12l4.547 2.625M12 12 7.453 9.375M12 17.25v4.5m0-4.5 3 3m-3-3-3 3M20.444 7.125l-3.897 2.25m0 0 1.098-4.098m-1.098 4.098 4.098 1.098M7.453 14.625l-3.897 2.25m3.897-2.25-1.098 4.098m1.098-4.098-4.098-1.098m17.089 3.348-3.897-2.25m0 0 4.098-1.098m-4.098 1.098 1.098 4.098M7.453 9.375l-3.897-2.25m3.897 2.25-4.098 1.098m4.098-1.098L6.355 5.277"/>`,
      }, children);
    };
  },
});
