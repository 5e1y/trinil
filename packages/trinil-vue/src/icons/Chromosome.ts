import { defineComponent, h } from 'vue';

export const Chromosome = defineComponent({
  name: 'Chromosome',
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
        innerHTML: `<path d="M14.25 6V4.5a2.25 2.25 0 0 1 4.5 0v.568q0 .47-.057.932M14.25 6a2.25 2.25 0 0 1-4.5 0V4.5a2.25 2.25 0 0 0-4.5 0v.568c0 2.037.81 3.991 2.25 5.432a7.68 7.68 0 0 0-2.25 5.432V19.5a2.25 2.25 0 0 0 4.5 0V15a2.25 2.25 0 0 1 4.5 0m0-9h4.443m-4.443 9v3m0-3h4.443m-4.443 3v1.5a2.25 2.25 0 0 0 4.5 0V18m-4.5 0h4.5m0 0v-2.068q0-.47-.057-.932m0 0a7.68 7.68 0 0 0-2.193-4.5A7.68 7.68 0 0 0 18.693 6"/>`,
      }, children);
    };
  },
});
