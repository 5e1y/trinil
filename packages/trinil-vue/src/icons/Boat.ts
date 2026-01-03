import { defineComponent, h } from 'vue';

export const Boat = defineComponent({
  name: 'Boat',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="M21.75 18.75h-.129a1.5 1.5 0 0 0-1.06.44l-.622.62a1.5 1.5 0 0 1-1.06.44h-.258a1.5 1.5 0 0 1-1.06-.44l-.286-.285M2.25 19.5l.31-.31a1.5 1.5 0 0 1 1.061-.44h.258a1.5 1.5 0 0 1 1.06.44l.622.62a1.5 1.5 0 0 0 1.06.44h.258a1.5 1.5 0 0 0 1.06-.44l.622-.62a1.5 1.5 0 0 1 1.06-.44h.258a1.5 1.5 0 0 1 1.06.44l.622.62a1.5 1.5 0 0 0 1.06.44h.258a1.5 1.5 0 0 0 1.06-.44l.622-.62a1.5 1.5 0 0 1 1.06-.44h.258a1.5 1.5 0 0 1 1.06.44l.336.335M2.25 9.75H15m0 0h5.242a1.5 1.5 0 0 1 1.305 2.24l-4.272 7.535M15 9.75l-3.31-3.31A1.5 1.5 0 0 0 10.628 6H8.87a1.5 1.5 0 0 1-1.06-.44L6.439 4.19a1.5 1.5 0 0 0-1.06-.44H2.25m0 9v.75m3-.75v.75m3-.75v.75m3-.75v.75"/>`,
      }, children);
    };
  },
});
