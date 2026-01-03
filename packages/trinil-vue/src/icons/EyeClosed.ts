import { defineComponent, h } from 'vue';

export const EyeClosed = defineComponent({
  name: 'EyeClosed',
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
        innerHTML: `<path d="M21.75 8.25c-4.586 7.055-14.914 7.055-19.5 0M21 13.5l.75.75m-4.5 1.5.75 1.5m-6-.75v1.769M6.75 15.75 6 17.25M3 13.5l-.75.75"/>`,
      }, children);
    };
  },
});
