import { defineComponent, h } from 'vue';

export const LoopCut = defineComponent({
  name: 'LoopCut',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="M20.802 7.616a1.5 1.5 0 0 1 .198.746v7.277a1.5 1.5 0 0 1-.744 1.295l-7.5 4.375a1.5 1.5 0 0 1-.756.204m8.802-13.897a1.5 1.5 0 0 0-.546-.55l-3.75-2.188m4.296 2.738L12 12.75M3.199 7.616a1.5 1.5 0 0 1 .545-.55l7.5-4.375a1.5 1.5 0 0 1 1.512 0l3.75 2.187M3.199 7.616c-.128.223-.199.48-.199.746v7.277a1.5 1.5 0 0 0 .744 1.295L7.6 19.183M3.2 7.616l4.4 2.567M12 21.513c-.261 0-.522-.068-.756-.204L7.6 19.183M12 21.513V12.75m0 0-4.4-2.567m8.906-5.305-8.907 5.305m0 0v9"/>`,
      }, children);
    };
  },
});
