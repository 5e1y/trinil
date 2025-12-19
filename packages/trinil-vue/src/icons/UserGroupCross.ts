import { defineComponent, h } from 'vue';

export const UserGroupCross = defineComponent({
  name: 'UserGroupCross',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M9 9a6 6 0 0 0-4.416 10.062M9 9a6 6 0 1 1 10.416 4.062M9 9c1.78 0 3.378.775 4.477 2.005M9 17a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0 0h1.333c1.098 0 2.072.53 2.679 1.35M9 17H7.667c-1.391 0-2.583.852-3.083 2.062m0 0A5.98 5.98 0 0 0 9 21a5.98 5.98 0 0 0 4.174-1.69M15 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0 0h1.333c1.391 0 2.583.852 3.083 2.062M15 11h-1.333q-.096 0-.19.005m5.939 2.057-.105.112m-5.834-2.169a6 6 0 0 1 1.45 3.051m4.384-.882a5 5 0 0 0-4.385.882m4.385-.882a5 5 0 1 1-6.137 6.137m0 0a5 5 0 0 1-.162-.962m0 0a4.991 4.991 0 0 1 1.914-4.293m-1.914 4.293.004.006M18 18l1.5-1.5M18 18l1.5 1.5M18 18l-1.5 1.5M18 18l-1.5-1.5"/>`,
        },
        children,
      );
    };
  },
});
