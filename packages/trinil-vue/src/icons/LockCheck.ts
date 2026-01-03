import { defineComponent, h } from 'vue';

export const LockCheck = defineComponent({
  name: 'LockCheck',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="m14.25 18.75 2.894 2.894a.15.15 0 0 0 .212 0l4.91-4.91M7.5 9.75H6a1.5 1.5 0 0 0-1.5 1.5v9a1.5 1.5 0 0 0 1.5 1.5h6.387M7.5 9.75v-3a4.5 4.5 0 0 1 9 0v3m-9 0h9m0 0H18a1.5 1.5 0 0 1 1.5 1.5v.167"/>`,
      }, children);
    };
  },
});
