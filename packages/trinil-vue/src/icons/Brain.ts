import { defineComponent, h } from 'vue';

export const Brain = defineComponent({
  name: 'Brain',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M17.87 7.629a3 3 0 0 0-3.46-2.07c-.52.104-1.098-.04-1.508-.377A2.98 2.98 0 0 0 11 4.5c-.705 0-1.353.243-1.866.65a1.63 1.63 0 0 1-1.055.351L8 5.5a3 3 0 0 0-2.871 2.129m12.741 0A3 3 0 0 1 20 10.579c-.011.38.113.758.35 1.055a3 3 0 0 1-2.429 4.864 1.63 1.63 0 0 0-1.056.35 2.98 2.98 0 0 1-3.125.372m4.131-9.591c-1.258-.337-2.626.258-2.84 1.519-.034.192-.188.352-.384.352a.38.38 0 0 1-.253-.101c-1.4-1.255-3.547-.473-3.455 1.601m2.801 6.22a3 3 0 0 1-3.86 1.562 1.7 1.7 0 0 0-1.258 0 3 3 0 0 1-4.12-2.686m9.238 1.124c.284-.657.486-1.83-.152-2.72m-9.085 1.596a2.995 2.995 0 0 1-1.338-3.57 1.6 1.6 0 0 0 0-1.052A3 3 0 0 1 5.129 7.63m-.627 8.467c0-.63.26-1.606 1.098-2.181M5.13 7.629C4.81 8.68 5.129 11 8 10.5m5.587 4c-.307-.428-.808-.791-1.587-1-1-.167-2.5 0-3 1.5m4.587-.5C14 12.5 16 11.5 18 13"/>`,
        },
        children,
      );
    };
  },
});
