import { defineComponent, h } from 'vue';

export const Shader = defineComponent({
  name: 'Shader',
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
          innerHTML: `<path d="M18 16c.552 0 1.052.224 1.414.586M18 16v-1m0 1c-.552 0-1.052.224-1.414.586m2.828 0c.362.362.586.862.586 1.414m-.586-1.414L20 16m0 2h1m-1 0c0 .552-.224 1.052-.586 1.414M18 20v1m0-1c.552 0 1.052-.224 1.414-.586M18 20a2 2 0 0 1-1.414-.586M16 18h-1m1 0c0-.552.224-1.052.586-1.414M16 18c0 .552.224 1.052.586 1.414m0-2.828L16 16m3.414 3.414L20 20m-3.414-.586L16 20m4.807-6.138a5 5 0 1 1-6.946 6.945m6.946-6.945a5 5 0 0 0-6.946 6.945m6.946-6.945a9 9 0 1 0-6.946 6.945m-.308-14.603a5.98 5.98 0 0 0-4.567.608 6 6 0 0 0-1.483 1.214m-1.299 2.421q.066-.243.15-.478"/>`,
        },
        children,
      );
    };
  },
});
