import { defineComponent, h } from 'vue';

export const UserEdit = defineComponent({
  name: 'UserEdit',
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
        innerHTML: `<path d="M12 14.25a6 6 0 1 1 5.168-2.95M12 14.25H9.75a6 6 0 0 0-6 6 1.5 1.5 0 0 0 1.5 1.5h7.137M12 14.25q.2 0 .395-.013m7.105.013 3 3-4.06 4.06a1.5 1.5 0 0 1-1.061.44H15v-2.379c0-.397.158-.779.44-1.06z"/>`,
      }, children);
    };
  },
});
