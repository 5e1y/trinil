import { defineComponent, h } from 'vue';

export const Boat = defineComponent({
  name: 'Boat',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M3 10.5h12m0 0h4a.93.93 0 0 1 .712 1.53l-5.746 6.823M15 10.5l-2.97-3.465A.1.1 0 0 0 11.954 7h-1.892l-.016-.001c-.062-.01-.093-.08-.131-.13l-1.33-1.738c-.038-.05-.069-.12-.131-.13L8.438 5H3m0 8v.5m2.5-.5v.5M8 13v.5m2.5-.5v.5m3.466 5.353a2.1 2.1 0 0 1-.466-.353 2.12 2.12 0 0 0-3 0 2.12 2.12 0 0 1-3 0 2.12 2.12 0 0 0-3 0 2.12 2.12 0 0 1-1.5.621m10.966-.268A2.12 2.12 0 0 0 16.5 18.5a2.12 2.12 0 0 1 3 0c.414.414.957.621 1.5.621"/>`,
        },
        children,
      );
    };
  },
});
