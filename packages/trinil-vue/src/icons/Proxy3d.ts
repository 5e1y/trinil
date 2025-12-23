import { defineComponent, h } from 'vue';

export const Proxy3d = defineComponent({
  name: 'Proxy3d',
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
        innerHTML: `<path d="m5.484 5.542-2.47 6.422a.1.1 0 0 0 0 .072l2.47 6.423a.1.1 0 0 0 .058.057l6.422 2.47a.1.1 0 0 0 .072 0l6.423-2.47a.1.1 0 0 0 .057-.057l2.47-6.423a.1.1 0 0 0 0-.072l-2.47-6.422a.1.1 0 0 0-.057-.058l-6.423-2.47a.1.1 0 0 0-.072 0l-6.422 2.47a.1.1 0 0 0-.058.058Z"/>`,
      }, children);
    };
  },
});
