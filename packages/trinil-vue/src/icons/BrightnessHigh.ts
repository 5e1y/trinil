import { defineComponent, h } from 'vue';

export const BrightnessHigh = defineComponent({
  name: 'BrightnessHigh',
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
        innerHTML: `<path d="M12 6V2m6 10h4m-10 6v4M6 12H2m14.243-4.243L19.07 4.93m-2.828 11.314 2.828 2.828M7.757 16.243 4.93 19.07M7.757 7.757 4.93 4.93M16 12a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z"/>`,
      }, children);
    };
  },
});
