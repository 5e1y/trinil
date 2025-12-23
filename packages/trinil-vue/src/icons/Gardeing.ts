import { defineComponent, h } from 'vue';

export const Gardeing = defineComponent({
  name: 'Gardeing',
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
        innerHTML: `<path d="m20.5 9.5-.293.293a1 1 0 0 1-1.414 0L18 9m-3.5-5.5-.293.293a1 1 0 0 0 0 1.414L15 6m0 0 1-1m-1 1 1.5 1.5m0 0 1-1m-1 1L18 9m-1.5-1.5L12 12m6-3 1-1m-7 4-7.5 7.5M12 12l4.5 4.5M12 12 8.5 8.5m8 8h2.459a.1.1 0 0 1 .07.03l.9.9a.1.1 0 0 1 0 .14l-2.358 2.36a.1.1 0 0 1-.142 0l-.9-.9a.1.1 0 0 1-.029-.072zm-8-8 1.293-1.293a1 1 0 0 0 0-1.414L8.586 4.586A2 2 0 0 0 7.172 4H6a2 2 0 0 0-2 2V7.17a2 2 0 0 0 .586 1.415l1.207 1.207a1 1 0 0 0 1.414 0z"/>`,
      }, children);
    };
  },
});
