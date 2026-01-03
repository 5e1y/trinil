import { defineComponent, h } from 'vue';

export const Gift = defineComponent({
  name: 'Gift',
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
        innerHTML: `<path d="M18.75 13.5v6.75a1.5 1.5 0 0 1-1.5 1.5h-3m4.5-8.25h-4.5m4.5 0a1.5 1.5 0 0 0 1.5-1.5v-1.5a1.5 1.5 0 0 0-1.5-1.5h-4.5m-9 4.5v6.75a1.5 1.5 0 0 0 1.5 1.5h3m-4.5-8.25h4.5m-4.5 0a1.5 1.5 0 0 1-1.5-1.5v-1.5A1.5 1.5 0 0 1 5.25 9h4.5M12 9s3-9 6-6-6 6-6 6m0 0S9 0 6 3s6 6 6 6m0 0h2.25M12 9H9.75m4.5 0v4.5m0 0h-4.5m4.5 0v8.25M9.75 9v4.5m0 0v8.25m0 0h4.5"/>`,
      }, children);
    };
  },
});
