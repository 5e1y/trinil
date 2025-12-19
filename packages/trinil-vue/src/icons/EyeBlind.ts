import { defineComponent, h } from 'vue';

export const EyeBlind = defineComponent({
  name: 'EyeBlind',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M12.899 8.101a4 4 0 0 0-4.797 4.797m4.797-4.797c.744.171 1.408.55 1.93 1.07m-1.93-1.07L8.1 12.9m6.727-3.727c.522.52.9 1.186 1.07 1.93m-1.07-1.93-5.656 5.656m6.727-3.727q.1.435.101.899a4 4 0 0 1-4.899 3.899M15.9 11.1 11.1 15.9m-1.93-1.07c.522.52 1.187.899 1.93 1.07m-1.93-1.07a4 4 0 0 1-1.07-1.93m-4.738-.368c4.252 5.843 13.022 5.843 17.274 0a.9.9 0 0 0 0-1.062c-4.252-5.843-13.022-5.843-17.274 0a.9.9 0 0 0 0 1.062Z"/>`,
        },
        children,
      );
    };
  },
});
