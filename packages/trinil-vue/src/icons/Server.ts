import { defineComponent, h } from 'vue';

export const Server = defineComponent({
  name: 'Server',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M12 10.5h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v3.5a1 1 0 0 0 1 1zm0 0v3m-6-6V8m3-.5V8m-3 8v.5m3-.5v.5m3-3H4a1 1 0 0 0-1 1V18a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1z"/>`,
        },
        children,
      );
    };
  },
});
