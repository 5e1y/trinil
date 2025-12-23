import { defineComponent, h } from 'vue';

export const TextBolt = defineComponent({
  name: 'TextBolt',
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
        innerHTML: `<path fill-rule="evenodd" d="M7.1 20h6.4a4 4 0 0 0 1.38-7.756c-.088-.032-.097-.161-.014-.205A4 4 0 0 0 13 4.5H7.1a.1.1 0 0 0-.1.1v15.3a.1.1 0 0 0 .1.1Zm6.4-7.5H7.6a.1.1 0 0 0-.1.1v6.8a.1.1 0 0 0 .1.1h5.9a3.5 3.5 0 1 0 0-7ZM13 5H7.6a.1.1 0 0 0-.1.1v6.8a.1.1 0 0 0 .1.1H13a3.5 3.5 0 1 0 0-7Z" clip-rule="evenodd"/>`,
      }, children);
    };
  },
});
