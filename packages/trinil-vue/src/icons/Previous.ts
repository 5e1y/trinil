import { defineComponent, h } from 'vue';

export const Previous = defineComponent({
  name: 'Previous',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="M3 3v18m4.426-10.25 11.242-7.496C19.665 2.59 21 3.304 21 4.502v15.039c0 1.2-1.34 1.914-2.336 1.245L7.423 13.244a1.5 1.5 0 0 1 .003-2.494"/>`,
      }, children);
    };
  },
});
