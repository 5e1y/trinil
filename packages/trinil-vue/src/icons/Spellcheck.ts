import { defineComponent, h } from 'vue';

export const Spellcheck = defineComponent({
  name: 'Spellcheck',
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
        innerHTML: `<path d="M21 21.52a2.6 2.6 0 0 1-.75-.52l-.22-.22a1.81 1.81 0 0 0-2.56 0l-.44.44a1.81 1.81 0 0 1-2.56 0l-.44-.44a1.81 1.81 0 0 0-2.56 0l-.44.44a1.81 1.81 0 0 1-2.56 0l-.44-.44a1.81 1.81 0 0 0-2.56 0l-.44.44a1.81 1.81 0 0 1-2.03.367M7.421 12l2.627-8.32a2.047 2.047 0 0 1 3.904 0L16.579 12M7.42 12 6 16.5M7.421 12h9.158m0 0L18 16.5"/>`,
      }, children);
    };
  },
});
