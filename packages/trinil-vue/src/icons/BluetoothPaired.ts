import { defineComponent, h } from 'vue';

export const BluetoothPaired = defineComponent({
  name: 'BluetoothPaired',
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
        innerHTML: `<path d="m12 12 3.93-3.93a.1.1 0 0 0 0-.14l-3.76-3.76a.1.1 0 0 0-.17.071zm0 0-4.5 4.5M12 12l3.93 3.93a.1.1 0 0 1 0 .14l-3.76 3.76a.1.1 0 0 1-.17-.071zm0 0L7.5 7.5m8 4.5H19M8.5 12H5"/>`,
      }, children);
    };
  },
});
