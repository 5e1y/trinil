import { defineComponent, h } from 'vue';

export const BrainCheck = defineComponent({
  name: 'BrainCheck',
  props: {
    size: { type: Number, default: 24 },
    color: { type: String, default: 'currentColor' },
    class: { type: String, default: undefined },
    title: { type: String, default: undefined },
    ariaLabel: { type: String, default: undefined },
  },
  setup(props) {
    return () => {
      const children = [];
      if (props.title) {
        children.push(h('title', {}, props.title));
      }
      return h(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: props.color,
          'stroke-width': 1.5,
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          'vector-effect': 'non-scaling-stroke',
          width: props.size,
          height: props.size,
          class: props.class,
          role: 'img',
          'aria-label': props.ariaLabel,
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M17.87 7.629a3 3 0 0 0-3.46-2.07c-.52.104-1.098-.04-1.508-.377A2.98 2.98 0 0 0 11 4.5c-.705 0-1.353.243-1.866.65a1.63 1.63 0 0 1-1.055.351L8 5.5a3 3 0 0 0-2.871 2.129m12.741 0A3 3 0 0 1 20 10.579c-.011.38.113.758.35 1.055a2.99 2.99 0 0 1 .614 2.338M17.87 7.63c-1.258-.337-2.626.258-2.84 1.519-.034.192-.188.352-.384.352a.38.38 0 0 1-.253-.101c-1.4-1.255-3.547-.473-3.455 1.601m-6.436 5.096a3 3 0 0 0 4.12 2.686 1.7 1.7 0 0 1 1.257 0 2.984 2.984 0 0 0 3.126-.552m-8.503-2.134a2.995 2.995 0 0 1-1.338-3.57 1.6 1.6 0 0 0 0-1.052A3 3 0 0 1 5.129 7.63m-.627 8.467c0-.63.26-1.606 1.098-2.181M5.13 7.629C4.81 8.68 5.129 11 8 10.5M9 15c.5-1.5 2-1.667 3-1.5.78.209 1.28.572 1.587 1 .144.201.245.417.313.638M16 18l1.43 1.43a.1.1 0 0 0 .14 0L20 17m.963-3.028A4.98 4.98 0 0 0 18 13a5 5 0 0 0-4.1 2.138m7.063-1.166a5 5 0 1 1-7.958 4.258m.895-3.092a4.98 4.98 0 0 0-.895 3.092"/>`,
        },
        children,
      );
    };
  },
});
