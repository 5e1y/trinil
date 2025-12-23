import { defineComponent, h } from 'vue';

export const LabFlask = defineComponent({
  name: 'LabFlask',
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
        innerHTML: `<path d="M14.5 9V5.303a1 1 0 0 1 .168-.555l.768-1.151a.383.383 0 0 0-.32-.597H7.884a.384.384 0 0 0-.32.597l.768 1.151a1 1 0 0 1 .168.555V9.73a1 1 0 0 1-.136.503l-2.828 4.848A3.936 3.936 0 0 0 8.936 21h6.314a3.751 3.751 0 0 0 3-6l-3.55-4.733a1 1 0 0 1-.2-.6zm0 0h-2m0 3h2m-2 3h2m-2 3h2"/>`,
      }, children);
    };
  },
});
