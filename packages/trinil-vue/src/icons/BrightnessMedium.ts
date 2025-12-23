import { defineComponent, h } from 'vue';

export const BrightnessMedium = defineComponent({
  name: 'BrightnessMedium',
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
        innerHTML: `<path d="M12 6V3.5m6 8.5h2.5M12 18v2.5M6 12H3.5m12.743-4.243L18.01 5.99m-1.767 10.253 1.767 1.767M7.757 16.243 5.99 18.01M7.757 7.757 5.99 5.99M16 12a4 4 0 1 0-8 0 4 4 0 0 0 8 0Zm-1.172 2.828a4 4 0 1 0-5.656-5.656 4 4 0 0 0 5.656 5.656Z"/>`,
      }, children);
    };
  },
});
