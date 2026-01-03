import { defineComponent, h } from 'vue';

export const LetterEdit = defineComponent({
  name: 'LetterEdit',
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
        innerHTML: `<path d="M21.75 7.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v1.5m19.5 0L12 12.75 2.25 7.5m19.5 0v4.887M2.25 7.5V18a1.5 1.5 0 0 0 1.5 1.5h7.667m8.083-5.25 3 3-4.06 4.06a1.5 1.5 0 0 1-1.061.44H15v-2.379c0-.397.158-.779.44-1.06z"/>`,
      }, children);
    };
  },
});
