import { defineComponent, h } from 'vue';

export const File3d = defineComponent({
  name: 'File3d',
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
          innerHTML: `<path d="M14 3.09V7a1 1 0 0 0 1 1h3.91M14 3.09a1 1 0 0 0-.414-.09H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8.414A1 1 0 0 0 18.91 8M14 3.09a1 1 0 0 1 .293.203l4.414 4.414A1 1 0 0 1 18.91 8M12 14.5l3.984-1.992M12 14.5l-3.984-1.992M12 14.5v3.988m3.984-5.98a.1.1 0 0 0-.04-.036l-3.9-1.95a.1.1 0 0 0-.089 0l-3.9 1.95a.1.1 0 0 0-.04.036m7.97 0a.1.1 0 0 1 .015.054v3.876a.1.1 0 0 1-.055.09l-3.9 1.95a.1.1 0 0 1-.045.01m-3.984-5.98a.1.1 0 0 0-.016.054v3.876a.1.1 0 0 0 .055.09l3.9 1.95a.1.1 0 0 0 .045.01"/>`,
        },
        children,
      );
    };
  },
});
