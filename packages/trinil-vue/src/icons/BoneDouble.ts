import { defineComponent, h } from 'vue';

export const BoneDouble = defineComponent({
  name: 'BoneDouble',
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
          innerHTML: `<path d="M19 5a2 2 0 1 0-3.483 1.342.104.104 0 0 1-.002.143L12 10m7-5a2 2 0 1 1-1.342 3.483.104.104 0 0 0-.143.002L14 12m5-7c0 .364-.097.706-.267 1M5 19a2 2 0 1 1 1.342-3.483c.04.037.104.037.143-.002L10 12m-5 7a2 2 0 1 0 3.483-1.342.104.104 0 0 1 .002-.143L12 14m-7 5c0-.364.097-.706.268-1M19 19a2 2 0 1 0-1.342-3.483.104.104 0 0 1-.143-.002L14 12m5 7a2 2 0 1 1-3.483-1.342.104.104 0 0 0-.002-.143L12 14m7 5c-.364 0-.706-.097-1-.267M5 5a2 2 0 1 1 3.483 1.342.104.104 0 0 0 .002.143L12 10M5 5a2 2 0 1 0 1.342 3.483.104.104 0 0 1 .143.002L10 12M5 5c.364 0 .706.097 1 .268M14 12l-2 2m-2-2 2-2"/>`,
        },
        children,
      );
    };
  },
});
