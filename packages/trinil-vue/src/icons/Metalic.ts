import { defineComponent, h } from 'vue';

export const Metalic = defineComponent({
  name: 'Metalic',
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
          innerHTML: `<path d="M15.988 3.93c-.225 1.074-.508 1.703-.753 2.08-.288.446-.622.704-1.207.98-1.05.494-4.462 1.3-7.03 4.19-1.532 1.723-2.368 3.594-2.745 5.404M15.988 3.929A9 9 0 0 0 4.254 16.583M15.987 3.93a9.03 9.03 0 0 1 4.368 4.722m0 0A9 9 0 0 1 9.991 20.775M20.356 8.65q-.096.164-.2.323c-1.023 1.58-2.331 2.454-3.581 3.043-2.619 1.233-3.644 1.085-5.172 2.803-1.751 1.97-1.786 4.401-1.412 5.955m0 0a9.01 9.01 0 0 1-5.738-4.191"/>`,
        },
        children,
      );
    };
  },
});
