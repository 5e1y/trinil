import { defineComponent, h } from 'vue';

export const FilmRoll = defineComponent({
  name: 'FilmRoll',
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
        innerHTML: `<path d="M11.25 7.5V6a1.5 1.5 0 0 0-1.5-1.5H9A1.5 1.5 0 0 0 7.5 3H6a1.5 1.5 0 0 0-1.5 1.5h-.75A1.5 1.5 0 0 0 2.25 6v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V18m0-10.5h1.5c.828 0 1.476.69 1.747 1.473A4.5 4.5 0 0 0 18.75 12a3 3 0 0 1 3 3v3h-10.5m0-10.5h-4.5V18h4.5"/>`,
      }, children);
    };
  },
});
