import { defineComponent, h } from 'vue';

export const EyeOff = defineComponent({
  name: 'EyeOff',
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
          innerHTML: `<path d="M14.22 8.671a4 4 0 1 1-4.438 6.657m4.437-6.657.776-1.163m-.776 1.163L9.781 15.33m5.214-7.821a10.55 10.55 0 0 1 5.642 3.961c.23.317.23.745 0 1.062-2.785 3.828-7.51 5.148-11.632 3.961m5.99-8.984L17.667 3.5M9.78 15.329l-.776 1.163m0 0L6.333 20.5M11.5 8.031A4 4 0 0 0 8.126 13M12 7.086c-3.256 0-6.511 1.461-8.637 4.383a.9.9 0 0 0 0 1.062A10.6 10.6 0 0 0 6.5 15.406"/>`,
        },
        children,
      );
    };
  },
});
