import { defineComponent, h } from 'vue';

export const WindowsLogo = defineComponent({
  name: 'WindowsLogo',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M20 12v7.887a.1.1 0 0 1-.112.099L11.5 18.937M20 12V4.113a.1.1 0 0 0-.112-.099L11.5 5.062M20 12h-8.5M4 12V6.088a.1.1 0 0 1 .088-.099l7.412-.927M4 12v5.912a.1.1 0 0 0 .088.099l7.412.926M4 12h7.5m0 0V5.062m0 6.938v6.937"/>`,
        },
        children,
      );
    };
  },
});
