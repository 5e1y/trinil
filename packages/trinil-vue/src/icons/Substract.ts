import { defineComponent, h } from 'vue';

export const Substract = defineComponent({
  name: 'Substract',
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
        innerHTML: `<path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3m8-8h3c.276 0 .526.112.707.293M16 8v4m-8 4v3c0 .276.112.526.293.707M8 16h4m4-4v3a1 1 0 0 1-1 1h-3m4-4 3.707-3.707M12 16l-3.707 3.707M20 12V9a1 1 0 0 0-.293-.707M20 12v4m0-4-8 8m0 0H9a1 1 0 0 1-.707-.293M12 20h4m4-4v3a1 1 0 0 1-1 1h-3m4-4-4 4"/>`,
      }, children);
    };
  },
});
