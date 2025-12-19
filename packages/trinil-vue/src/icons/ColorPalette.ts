import { defineComponent, h } from 'vue';

export const ColorPalette = defineComponent({
  name: 'ColorPalette',
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
          innerHTML: `<path d="M3.5 17.238V4.5a1 1 0 0 1 1-1H9a1 1 0 0 1 1 1v4.904m-6.5 7.834v.012m0-.012q0 .06.002.123m-.002-.123q0-.048.002-.095m-.002.107q0 .056.002.111M3.5 17.25q0-.054.002-.107m0 .218c.013.386.093.756.23 1.096m-.23-1.096c.013.373.09.745.23 1.096m0 0A3.25 3.25 0 0 0 6.75 20.5H19.5a1 1 0 0 0 1-1V15a1 1 0 0 0-1-1h-4.904M3.732 18.457c.158.398.398.77.72 1.091m-.95-2.405c.013-.395.096-.772.237-1.119m-.237 1.119c.012-.381.091-.76.237-1.119m0 0A3.25 3.25 0 0 1 6.75 14h7.846M3.74 16.024a3.2 3.2 0 0 1 .713-1.072L10 9.404M14.596 14l3.468-3.467a1 1 0 0 0 0-1.415l-3.182-3.182a1 1 0 0 0-1.415 0L10 9.404M7.5 17.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"/>`,
        },
        children,
      );
    };
  },
});
