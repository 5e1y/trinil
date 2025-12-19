import { defineComponent, h } from 'vue';

export const Cotton = defineComponent({
  name: 'Cotton',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M12 20.5c2.495-1.386 3.403-4.172 2.725-6.578M12 20.5a5.64 5.64 0 0 1-2.668-3.234 5.83 5.83 0 0 1-.057-3.343M12 20.5c3.405.973 6.607-1.306 7.2-4.43M12 20.5c-3.405.973-6.607-1.306-7.2-4.43m9.925-2.148a5.6 5.6 0 0 0-2.252-3.13.84.84 0 0 0-.946 0 5.635 5.635 0 0 0-2.245 3.107l-.007.023m5.45 0a5.6 5.6 0 0 1 3.806-.62c.34.063.604.328.668.667.136.723.128 1.431.001 2.1m-9.924-2.146A5.6 5.6 0 0 0 5.47 13.3a.84.84 0 0 0-.669.668 5.6 5.6 0 0 0-.001 2.1m2.567-9.452A5.502 5.502 0 0 0 4.8 16.069m2.567-9.452a5.002 5.002 0 0 1 9.266 0m-9.266 0c.562-.104 1.81-.116 3.133.585m6.133-.585a5.502 5.502 0 0 1 2.567 9.452m-2.567-9.452c-.562-.104-1.81-.116-3.133.585"/>`,
        },
        children,
      );
    };
  },
});
