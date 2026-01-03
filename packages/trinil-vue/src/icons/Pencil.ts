import { defineComponent, h } from 'vue';

export const Pencil = defineComponent({
  name: 'Pencil',
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
        innerHTML: `<path d="M10.923 20.577v-1.77a1.5 1.5 0 0 0-1.206-1.47l-1.564-.314a1.5 1.5 0 0 1-1.177-1.176l-.312-1.564a1.5 1.5 0 0 0-1.471-1.206h-1.77m7.5 7.5L19.5 12m-8.577 8.577-3.75.625m-3.75-8.125L12 4.5m-8.577 8.577-.625 3.75M12 4.5l1.814-1.815a1.5 1.5 0 0 1 2.121 0l5.38 5.38a1.5 1.5 0 0 1 0 2.12L19.5 12M12 4.5l7.5 7.5M7.173 21.202l-4.375-4.375m4.375 4.375-3.179.53a1.5 1.5 0 0 1-1.726-1.726l.53-3.179"/>`,
      }, children);
    };
  },
});
