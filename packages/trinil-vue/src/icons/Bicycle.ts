import { defineComponent, h } from 'vue';

export const Bicycle = defineComponent({
  name: 'Bicycle',
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
        innerHTML: `<path d="m16.5 10-5.214 4.74a1 1 0 0 1-.309.191M16.5 10l-7 .5m7-.5.584 2.142M16.5 10 16 8m-7 7h1.613a1 1 0 0 0 .364-.069M9 15a3 3 0 0 0-1.284-2.461M9 15a3 3 0 1 1-1.284-2.461M9.5 10.5l-.5-2m.5 2-1.784 2.039M9.5 10.5l1.477 4.432m6.107-2.79a3 3 0 1 1 1.832 5.715 3 3 0 0 1-1.832-5.715ZM9 8.5h1.5M9 8.5H8m8-.5h-.419c-.873 0-1.74-.117-2.581-.348M16 8c.996 0 1.989-.122 2.955-.364L19 7.625"/>`,
      }, children);
    };
  },
});
