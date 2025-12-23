import { defineComponent, h } from 'vue';

export const Cable = defineComponent({
  name: 'Cable',
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
        innerHTML: `<path d="M5 8v5.071a4.93 4.93 0 0 0 3.778 4.794M5 8a1.5 1.5 0 0 1-1.5-1.5V4.1a.1.1 0 0 1 .1-.1h2.8a.1.1 0 0 1 .1.1v2.4A1.5 1.5 0 0 1 5 8Zm14 1v6.071A4.93 4.93 0 0 1 14.071 20h-.821a5.74 5.74 0 0 1-4.472-2.135M19 9a1.5 1.5 0 0 1-1.5-1.5V5.1a.1.1 0 0 1 .1-.1h2.8a.1.1 0 0 1 .1.1v2.4A1.5 1.5 0 0 1 19 9ZM8.778 17.865A5.73 5.73 0 0 1 7.5 14.25V13a4.5 4.5 0 1 1 9 0v.25A4.75 4.75 0 0 1 11.75 18H9.929q-.597-.002-1.15-.135Z"/>`,
      }, children);
    };
  },
});
