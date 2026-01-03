import { defineComponent, h } from 'vue';

export const Trophy = defineComponent({
  name: 'Trophy',
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
        innerHTML: `<path d="M6.75 3.812V2.25h10.5v1.562m-10.5 0V10.5c0 .803.18 1.563.502 2.243m-.502-8.93a4.501 4.501 0 0 0 .502 8.93m9.998-8.93V10.5a5.2 5.2 0 0 1-.502 2.243m.502-8.93a4.501 4.501 0 0 1-.502 8.93M12 15.75v6m0-6a5.25 5.25 0 0 0 4.748-3.007M12 15.75a5.25 5.25 0 0 1-4.748-3.007M12 21.75h5.25m-5.25 0H6.75"/>`,
      }, children);
    };
  },
});
