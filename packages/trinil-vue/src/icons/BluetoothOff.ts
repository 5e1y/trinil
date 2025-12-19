import { defineComponent, h } from 'vue';

export const BluetoothOff = defineComponent({
  name: 'BluetoothOff',
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
          innerHTML: `<path d="m12 12 3.93-3.93a.1.1 0 0 0 0-.14l-.73-.73M12 12l3.93 3.93a.1.1 0 0 1 0 .14l-3.76 3.76a.1.1 0 0 1-.17-.071zm0 0 3.2-4.8M12 12l-5.667 8.5M15.2 7.2l2.467-3.7M10 10 7.5 7.5m4.5 0V4.241a.1.1 0 0 1 .17-.07L13 5"/>`,
        },
        children,
      );
    };
  },
});
