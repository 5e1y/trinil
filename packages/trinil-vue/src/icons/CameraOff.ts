import { defineComponent, h } from 'vue';

export const CameraOff = defineComponent({
  name: 'CameraOff',
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
        innerHTML: `<path d="M13.736 9.395a4 4 0 1 1-4.395 6.593m4.395-6.593-4.395 6.593m4.395-6.593 1.978-2.966m-6.373 9.56L7.333 19M13.5 5h-3.382c-.685 0-1.312.387-1.618 1s-.933 1-1.618 1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1M15.714 6.429 18 3m-2.286 3.429.01.018a1 1 0 0 0 .894.553H20a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H7.333M6 21l1.333-2"/>`,
      }, children);
    };
  },
});
