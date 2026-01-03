import { defineComponent, h } from 'vue';

export const FruitPeach = defineComponent({
  name: 'FruitPeach',
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
        innerHTML: `<path d="M12 7.884A6.753 6.753 0 0 0 8.637 18M12 7.884q.345-.122.704-.206M12 7.884a6.75 6.75 0 1 0 0 12.732 6.75 6.75 0 1 0 .704-12.938M12 7.884l-.122-.306m.122.306a3 3 0 0 1-.122-.306m.122.306q.372-.093.704-.206m0 0c3.794-1.28 3.755-4.241 3.046-5.428-4.24 0-4.485 3.555-3.872 5.328m0 0L9.75 2.25"/>`,
      }, children);
    };
  },
});
