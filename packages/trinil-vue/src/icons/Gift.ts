import { defineComponent, h } from 'vue';

export const Gift = defineComponent({
  name: 'Gift',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M12 9s-.712-.407-1.585-1.026M12 9s-1-8-4-6c-2.043 1.362.552 3.652 2.415 4.974M12 9s.732-.418 1.621-1.052M12 9s1-8 4-6c2.03 1.353-.518 3.622-2.379 4.948M12 9c.321-.321.9-.694 1.621-1.052M12 9c-.313-.313-.873-.676-1.585-1.026M12 9H9.5M12 9h2.5m-4.085-1.026C8.855 7.207 6.56 6.5 4.5 6.5m9.121 1.448C15.145 7.191 17.303 6.5 19 6.5M9.5 9h-4a1 1 0 0 0-1 1v1.516c0 .267.217.484.484.484M9.5 9v3m.5 9H5.998a1 1 0 0 1-1-.998L4.984 12M10 21h4m-4 0v-8.5a.5.5 0 0 0-.5-.5m5-3H18a1 1 0 0 1 1 1v1.5a.5.5 0 0 1-.5.5m-4-3v3m-.5 9h3.5a1 1 0 0 0 1-1v-8M14 21v-8.5a.5.5 0 0 1 .5-.5m-5 0h5m-5 0H4.984m9.516 0h4"/>`,
        },
        children,
      );
    };
  },
});
