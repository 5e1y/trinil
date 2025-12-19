import { defineComponent, h } from 'vue';

export const Solidify = defineComponent({
  name: 'Solidify',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="m15 13.5 5.766-1.922M15 13.5v6.946m0-6.946-5.766-1.922m11.532 0a1 1 0 0 1 .234.643v5.558a1 1 0 0 1-.684.949l-5 1.666a1 1 0 0 1-.316.052m5.766-8.868a1 1 0 0 0-.45-.306l-5-1.667a1 1 0 0 0-.632 0l-5 1.667a1 1 0 0 0-.45.306M15 20.446a1 1 0 0 1-.316-.052l-5-1.666A1 1 0 0 1 9 17.779v-5.558a1 1 0 0 1 .234-.643M3.5 6.5l1.917-2.875a.1.1 0 0 1 .166 0L7.5 6.5l.115.184C8.653 8.345 7.459 10.5 5.5 10.5S2.347 8.345 3.385 6.684z"/>`,
        },
        children,
      );
    };
  },
});
