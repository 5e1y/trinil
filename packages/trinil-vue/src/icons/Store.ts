import { defineComponent, h } from 'vue';

export const Store = defineComponent({
  name: 'Store',
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
        innerHTML: `<path d="M8.25 9s0 2.25-3 2.25q-.411-.001-.75-.053M8.25 9s0 2.25 3.75 2.25S15.75 9 15.75 9m-7.5 0 1.5-5.25M4.5 11.197c-1.591-.24-2.057-1.24-2.194-1.804-.06-.254.012-.512.142-.739l2.37-4.148A1.5 1.5 0 0 1 6.12 3.75h3.63M4.5 11.197v7.553a1.5 1.5 0 0 0 1.5 1.5h3.75v-4.5a1.5 1.5 0 0 1 1.5-1.5h1.5a1.5 1.5 0 0 1 1.5 1.5v4.5H18a1.5 1.5 0 0 0 1.5-1.5v-7.553M15.75 9s0 2.25 3 2.25q.411-.001.75-.053M15.75 9l-1.5-5.25m-4.5 0h4.5m0 0h3.63a1.5 1.5 0 0 1 1.302.756l2.37 4.148c.13.227.203.485.142.739-.137.564-.603 1.564-2.194 1.804"/>`,
      }, children);
    };
  },
});
