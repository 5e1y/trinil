import { defineComponent, h } from 'vue';

export const Bake = defineComponent({
  name: 'Bake',
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
          innerHTML: `<path d="M8 3H4a1 1 0 0 0-1 1v3m14-4h3a1 1 0 0 1 1 1v3m0 10v3a1 1 0 0 1-1 1h-3m-9 0H4a1 1 0 0 1-1-1v-3m9-5.5 5.968-3.011M12 11.5 6.016 8.508M12 11.5v6.882m5.968-9.893a.1.1 0 0 0-.023-.017l-5.498-2.748a1 1 0 0 0-.894 0L6.055 8.472a.1.1 0 0 0-.04.036m11.953-.02a.1.1 0 0 1 .032.074v6.32a1 1 0 0 1-.553.894l-5 2.5a1 1 0 0 1-.447.106M6.016 8.508A.1.1 0 0 0 6 8.562v6.32a1 1 0 0 0 .553.894l5 2.5a1 1 0 0 0 .447.106"/>`,
        },
        children,
      );
    };
  },
});
