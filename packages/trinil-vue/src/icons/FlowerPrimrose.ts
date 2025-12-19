import { defineComponent, h } from 'vue';

export const FlowerPrimrose = defineComponent({
  name: 'FlowerPrimrose',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M15.873 8.127c2.246-2.246-.083-5.986-3.09-4.96l-.46.156a1 1 0 0 1-.646 0l-.46-.157C8.21 2.141 5.881 5.881 8.127 8.127m7.746 0c2.246-2.246 5.986.083 4.96 3.09l-.156.46a1 1 0 0 0 0 .646l.156.46c1.026 3.007-2.714 5.336-4.96 3.09m0-7.746-2.105 2.105m-5.64-2.105c-2.247-2.246-5.987.083-4.961 3.09l.156.46a1 1 0 0 1 0 .646l-.156.46c-1.026 3.007 2.714 5.336 4.96 3.09m0-7.746 2.105 2.105m5.64 5.64c2.247 2.247-.082 5.987-3.089 4.962l-.46-.157a1 1 0 0 0-.646 0l-.46.157c-3.007 1.025-5.336-2.715-3.09-4.961m7.746 0-2.105-2.105m-5.64 2.105 2.104-2.105m3.536 0A2.5 2.5 0 0 0 14.5 12c0-.69-.28-1.315-.732-1.768m0 3.536A2.5 2.5 0 0 1 12 14.5c-.69 0-1.315-.28-1.768-.732m3.536-3.536A2.5 2.5 0 0 0 12 9.5c-.69 0-1.315.28-1.768.732m0 0A2.5 2.5 0 0 0 9.5 12c0 .69.28 1.315.732 1.768"/>`,
        },
        children,
      );
    };
  },
});
