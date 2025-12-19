import { defineComponent, h } from 'vue';

export const AirplaneMode = defineComponent({
  name: 'AirplaneMode',
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
          innerHTML: `<path d="m20.172 11.172.474.474a.5.5 0 0 1 0 .707l-.474.475A4 4 0 0 1 17.343 14h-1.682a2 2 0 0 0-1.737 1.008l-2.848 4.984A2 2 0 0 1 9.339 21a.728.728 0 0 1-.72-.83l.718-5.029A1 1 0 0 0 8.347 14H7.5a1 1 0 0 0-.8.4l-.6.8a2 2 0 0 1-1.6.8h-.882a.1.1 0 0 1-.099-.116l.349-2.09c.077-.464-.244-.904-.443-1.33a1.1 1.1 0 0 1 .016-.96c.205-.404.52-.817.466-1.268l-.26-2.124a.1.1 0 0 1 .1-.112h.831a2 2 0 0 1 1.652.872l.472.692a1 1 0 0 0 .826.436h.819a1 1 0 0 0 .99-1.141L8.619 3.83A.728.728 0 0 1 9.339 3a2 2 0 0 1 1.737 1.008l2.848 4.984A2 2 0 0 0 15.661 10h1.682a4 4 0 0 1 2.829 1.172Z"/>`,
        },
        children,
      );
    };
  },
});
