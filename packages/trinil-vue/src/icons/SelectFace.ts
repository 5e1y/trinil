import { defineComponent, h } from 'vue';

export const SelectFace = defineComponent({
  name: 'SelectFace',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="M3 11.25V12m0 3v1.5l1.5.875M21 15v1.5l-1.5.875M21 12v-.75m-9 5.25v.75m0 3v1.5m0 0 .75-.437m-.75.437-.75-.437m4.5-1.75.75-.438m-9 0 .75.438M12 2.25 3 7.5l9 5.25 9-5.25z"/>`,
      }, children);
    };
  },
});
