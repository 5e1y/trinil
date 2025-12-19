import { defineComponent, h } from 'vue';

export const Biohazard = defineComponent({
  name: 'Biohazard',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M14.728 17.843a5.45 5.45 0 0 0 2.726-4.725m-10.909 0a5.45 5.45 0 0 0 2.727 4.725m0-9.45A5.43 5.43 0 0 1 12 7.663a5.43 5.43 0 0 1 2.728.73m4.39 11.39a4.547 4.547 0 0 1-6.627-5.247m8.9 1.31a4.547 4.547 0 0 0-7.925-3.042m-8.585 6.979a4.547 4.547 0 0 0 6.627-5.247m-8.9 1.31a4.547 4.547 0 0 1 7.925-3.042m-.806-9.077a4.547 4.547 0 0 0 1.19 8.353m3.356-8.353a4.547 4.547 0 0 1-1.19 8.353m.384.724a1.504 1.504 0 0 1-.975 1.732m.975-1.732a1.5 1.5 0 0 0-.385-.724m-.59 2.456a1.5 1.5 0 0 1-.984 0m0 0a1.5 1.5 0 0 1-.975-1.733m0 0c.06-.277.195-.526.385-.723m0 0a1.496 1.496 0 0 1 2.164 0"/>`,
        },
        children,
      );
    };
  },
});
