import { defineComponent, h } from 'vue';

export const BluetoothOff = defineComponent({
  name: 'BluetoothOff',
  props: {
    size: { type: Number, default: 24 },
    color: { type: String, default: 'currentColor' },
    strokeWidth: { type: Number, default: 1.5 },
    class: { type: String, default: undefined },
    title: { type: String, default: undefined },
    ariaLabel: { type: String, default: undefined },
  },
  setup(props) {
    return () => {
      const children = props.title ? [h('title', {}, props.title)] : [];
      return h('svg', {
        xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'none', stroke: props.color,
        'stroke-width': props.strokeWidth, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'vector-effect': 'non-scaling-stroke',
        width: props.size, height: props.size, class: props.class, role: 'img', 'aria-label': props.ariaLabel,
        innerHTML: `<path stroke-miterlimit="1.788" d="m12 12-4.875 4.875M12 12l4.875 4.875M12 12v9.75l4.875-4.875M12 12 2.25 2.25m14.625 14.625 4.875 4.875M12 7.5V2.25l4.875 4.875L14.25 9.75"/>`,
      }, children);
    };
  },
});
