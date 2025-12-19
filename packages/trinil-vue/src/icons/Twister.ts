import { defineComponent, h } from 'vue';

export const Twister = defineComponent({
  name: 'Twister',
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
          innerHTML: `<path d="M18.5 12q0 .447-.046.871M18.5 12c0-3.866-2.634-6.5-6.5-6.5m6.5 6.5s0 .333-.046.871m0 0C18.087 16.256 15.568 18.5 12 18.5m6.454-5.629C18.259 15.13 17.25 21 12 21m0-2.5q-.447 0-.871-.046M12 18.5s-.333 0-.871-.046m0 0C7.744 18.087 5.5 15.568 5.5 12m5.629 6.454C8.87 18.259 3 17.25 3 12m2.5 0q0-.447.046-.871M5.5 12s0-.333.046-.871m0 0C5.913 7.744 8.432 5.5 12 5.5m-6.454 5.629C5.741 8.87 6.751 3 12 3m0 2.5s9-.5 9 6.5m-7 0a2 2 0 0 1-2 2m2-2a2 2 0 0 0-2-2m2 2s0 4-4 4m2-2a2 2 0 0 1-2-2m2 2s-4 0-4-4m2 2a2 2 0 0 1 2-2m-2 2s0-4 4-4m-2 2s4 0 4 4"/>`,
        },
        children,
      );
    };
  },
});
