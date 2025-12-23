import { defineComponent, h } from 'vue';

export const Bacteria = defineComponent({
  name: 'Bacteria',
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
        innerHTML: `<path d="M20.162 9.08c.531.847.838 1.847.838 2.92 0 1.044-.29 2.02-.796 2.851a.1.1 0 0 0 .014.125l.171.17a1.5 1.5 0 1 1-2.121 2.121l-.284-.283a.1.1 0 0 0-.115-.02 5.5 5.5 0 0 1-2.37.536H13.6a.1.1 0 0 0-.1.1v.561a1.5 1.5 0 0 1-3 0V17.6a.1.1 0 0 0-.1-.1H8.5a5.5 5.5 0 0 1-2.37-.535.1.1 0 0 0-.114.02l-.284.282a1.5 1.5 0 1 1-2.121-2.12l.17-.171a.1.1 0 0 0 .015-.125A5.47 5.47 0 0 1 3 12c0-1.073.307-2.073.838-2.92m16.324 0 .227-.226a1.5 1.5 0 1 0-2.121-2.122l-.334.334m2.228 2.015-1.04 1.04m-1.188-3.055A5.5 5.5 0 0 0 15.5 6.5h-1.9a.1.1 0 0 1-.1-.1v-.561a1.5 1.5 0 0 0-3 0v.56a.1.1 0 0 1-.1.101H8.5c-.874 0-1.7.204-2.434.566m11.868 0L17 8M3.838 9.08l-.227-.226a1.5 1.5 0 0 1 2.121-2.122l.334.334M3.838 9.081l1.04 1.04m1.188-3.055L7 8m1.5 2.585a1.5 1.5 0 1 0 1.915 1.915M15 12.095A1.5 1.5 0 1 1 13.06 14"/>`,
      }, children);
    };
  },
});
