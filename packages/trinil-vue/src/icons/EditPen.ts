import { defineComponent, h } from 'vue';

export const EditPen = defineComponent({
  name: 'EditPen',
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
        innerHTML: `<path d="M19.5 12.75v6.75A1.5 1.5 0 0 1 18 21H4.5A1.5 1.5 0 0 1 3 19.5V6a1.5 1.5 0 0 1 1.5-1.5h6.75m-3 11.25v-2.379c0-.398.158-.779.44-1.06l9-9a1.5 1.5 0 0 1 2.12 0l.88.878a1.5 1.5 0 0 1 0 2.122l-9 9a1.5 1.5 0 0 1-1.061.439z"/>`,
      }, children);
    };
  },
});
