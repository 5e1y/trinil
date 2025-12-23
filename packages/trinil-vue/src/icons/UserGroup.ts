import { defineComponent, h } from 'vue';

export const UserGroup = defineComponent({
  name: 'UserGroup',
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
        innerHTML: `<path d="M15 15c0 1.567-.6 2.994-1.584 4.062M15 15c1.747 0 3.32-.746 4.416-1.938M15 15a5.98 5.98 0 0 0-1.523-3.995M9 9a6 6 0 0 0-4.416 10.062M9 9a6 6 0 1 1 10.416 4.062M9 9c1.78 0 3.378.775 4.477 2.005M9 17a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0 0h1.333c1.391 0 2.583.852 3.083 2.062M9 17H7.667c-1.391 0-2.583.852-3.083 2.062m8.832 0A5.98 5.98 0 0 1 9 21a5.98 5.98 0 0 1-4.416-1.938M15 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0 0h1.333c1.391 0 2.583.852 3.083 2.062M15 11h-1.333q-.096 0-.19.005"/>`,
      }, children);
    };
  },
});
