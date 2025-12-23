import { defineComponent, h } from 'vue';

export const LetterEdit = defineComponent({
  name: 'LetterEdit',
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
        innerHTML: `<path d="M3.32 5.767A1 1 0 0 1 4 5.5h16c.263 0 .502.101.68.267m-17.36 0A1 1 0 0 0 3 6.5v11a1 1 0 0 0 1 1h9.025M3.32 5.767l8.04 6.7a1 1 0 0 0 1.28 0l8.04-6.7m0 0c.197.182.32.443.32.733V14m0 0a5 5 0 0 0-7.975 4.5M21 14l.02.014m0 0c.333.254.634.548.895.876m-.895-.876c-.354-.268-.844-.19-1.157.123l-3.834 3.834a.1.1 0 0 0-.029.07V19.9a.1.1 0 0 0 .1.1h1.859a.1.1 0 0 0 .07-.03l3.834-3.833c.313-.313.39-.803.123-1.157l-.07-.09m0 0a5 5 0 1 1-8.89 3.61"/>`,
      }, children);
    };
  },
});
