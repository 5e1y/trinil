import { defineComponent, h } from 'vue';

export const BrightnessLow = defineComponent({
  name: 'BrightnessLow',
  props: {
    size: { type: Number, default: 24 },
    color: { type: String, default: 'currentColor' },
    class: { type: String, default: undefined },
    title: { type: String, default: undefined },
    ariaLabel: { type: String, default: undefined },
  },
  setup(props) {
    return () => {
      const children = [];
      if (props.title) {
        children.push(h('title', {}, props.title));
      }
      return h(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: props.color,
          'stroke-width': 1.5,
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          'vector-effect': 'non-scaling-stroke',
          width: props.size,
          height: props.size,
          class: props.class,
          role: 'img',
          'aria-label': props.ariaLabel,
          innerHTML: `<path d="M12 6V5m6 7h1m-7 6v1m-6-7H5m11.243-4.243.707-.707m-.707 9.193.707.707m-9.193-.707-.707.707m.707-9.193L7.05 7.05M16 12a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z"/>`,
        },
        children,
      );
    };
  },
});
