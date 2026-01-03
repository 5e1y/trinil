import { defineComponent, h } from 'vue';

export const FlowerClover = defineComponent({
  name: 'FlowerClover',
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
        innerHTML: `<path d="M12 6.188c0-3.371-4.554-4.43-6.04-1.404l-.228.463c-.104.21-.274.381-.485.485l-.463.227C1.76 7.446 2.817 12 6.188 12M12 6.188c0-3.371 4.554-4.43 6.04-1.404l.228.463c.104.211.274.381.485.485l.463.227C22.24 7.446 21.183 12 17.812 12M12 6.188V8.25M6.188 12c-3.371 0-4.43 4.554-1.404 6.04l.463.228c.211.104.381.274.485.485l.227.463C7.446 22.24 12 21.183 12 17.812M6.188 12H8.25m9.562 0c3.371 0 4.43 4.554 1.404 6.04l-.463.228c-.21.104-.381.274-.485.485l-.227.463C16.554 22.24 12 21.183 12 17.812M17.812 12H15.75M12 17.812V15.75"/>`,
      }, children);
    };
  },
});
