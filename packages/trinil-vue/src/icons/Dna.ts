import { defineComponent, h } from 'vue';

export const Dna = defineComponent({
  name: 'Dna',
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
        innerHTML: `<path d="m12 12-.283-.05a9.65 9.65 0 0 1-6.022-3.7M11.999 12l.134.024a9.87 9.87 0 0 1 6.088 3.726M11.999 12l.282-.05a9.65 9.65 0 0 0 6.023-3.7M11.999 12l-.134.024a9.87 9.87 0 0 0-6.088 3.726m-.082-7.5h12.609m-12.61 0A9.65 9.65 0 0 1 3.972 4.5m14.333 3.75a9.65 9.65 0 0 0 1.724-3.75M3.75 2.25c-.015.77.062 1.524.22 2.25m0 0h16.058m.22-2.25a9.7 9.7 0 0 1-.22 2.25M18.22 15.75H5.777m12.444 0a9.9 9.9 0 0 1 1.77 3.75M5.778 15.75a9.9 9.9 0 0 0-1.77 3.75m0 0a10 10 0 0 0-.259 2.25m.258-2.25h15.986m0 0c.169.725.258 1.479.258 2.25"/>`,
      }, children);
    };
  },
});
