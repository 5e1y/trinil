import { defineComponent, h } from 'vue';

export const Tooth = defineComponent({
  name: 'Tooth',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M13.533 3.41c2.62-1.448 5.57 1.167 4.86 4.308l-1.105 3.369a18.7 18.7 0 0 0-.886 4.605l-.215 3.3c-.13.938-1.32 1.03-1.567.121-.227-.836-1.088-2.58-1.847-3.922-.357-.63-1.189-.63-1.546 0-.732 1.295-1.606 3.443-1.801 4.954-.15 1.167-1.687 1.127-1.788-.046l-.194-3.142s-.508-3.812-.911-5.147l-.926-4.092c-.71-3.14 2.24-5.756 4.86-4.308a3.14 3.14 0 0 0 3.066 0Zm0 0c-.965.533-3.355 2.086-3.355 4.445"/>`,
        },
        children,
      );
    };
  },
});
