import { defineComponent, h } from 'vue';

export const EyeOff = defineComponent({
  name: 'EyeOff',
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
        innerHTML: `<path d="M12 7.5a4.5 4.5 0 0 1 4.5 4.5m-1.318 3.182a4.5 4.5 0 0 1-6.364-6.364m6.364 6.364L8.818 8.818m6.364 6.364 1.245 1.245M8.818 8.818 7.626 7.626m3.686-.814c3.651-.208 7.394 1.274 9.9 4.495l.538.693a11.7 11.7 0 0 1-2.49 2.76M7.627 7.627A11.6 11.6 0 0 0 2.25 12c3.22 4.953 9.27 6.429 14.177 4.427m-8.8-8.8L2.249 2.249m14.177 14.177 5.323 5.323"/>`,
      }, children);
    };
  },
});
