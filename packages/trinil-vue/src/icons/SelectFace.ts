import { defineComponent, h } from 'vue';

export const SelectFace = defineComponent({
  name: 'SelectFace',
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
        innerHTML: `<path d="M12 14.469v.437m0 2.188v.437m.844 3.094-.803.357a.1.1 0 0 1-.041.008m3.023-1.334.422-.187m2.11-.938.422-.187m2.18-.97.784-.348a.1.1 0 0 0 .059-.091v-1.06m0-2.781v.437m0-3.062v.437m-18 0v-.437m0 3.062v-.437m0 2.78v1.06a.1.1 0 0 0 .06.092l.784.349m2.601 1.156-.422-.187m3.165 1.406-.633-.281m2.601 1.156.803.357a.1.1 0 0 0 .041.008m0 0v-1.115m.04-16.857a.1.1 0 0 0-.08 0l-8.9 3.955a.1.1 0 0 0-.042.035l8.941 3.974a.1.1 0 0 0 .082 0l8.941-3.974a.1.1 0 0 0-.041-.035z"/>`,
      }, children);
    };
  },
});
