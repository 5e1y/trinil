import { defineComponent, h } from 'vue';

export const Nozzle = defineComponent({
  name: 'Nozzle',
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
        innerHTML: `<path d="M7.5 11.25h-.75a1.5 1.5 0 0 0-1.5 1.5v3.879c0 .397.158.779.44 1.06l3.62 3.622a1.5 1.5 0 0 0 1.061.439h3.258a1.5 1.5 0 0 0 1.06-.44l3.622-3.62a1.5 1.5 0 0 0 .439-1.061V12.75a1.5 1.5 0 0 0-1.5-1.5h-.75m-9 0v-.187m0 .187h9m-9-.187v-3m0 3 9-1.126m-9-1.874v-3m0 3L6 8.25m1.5-.187 9-1.126m-9-1.875V3.75A1.5 1.5 0 0 1 9 2.25h6a1.5 1.5 0 0 1 1.5 1.5v.188m-9 1.124L6 5.25m1.5-.187 9-1.125m0 7.312V9.938m0-6v3m0-3L18 3.75m-1.5 3.188v3m0-3L18 6.75m-1.5 3.188L18 9.75"/>`,
      }, children);
    };
  },
});
