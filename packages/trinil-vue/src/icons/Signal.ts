import { defineComponent, h } from 'vue';

export const Signal = defineComponent({
  name: 'Signal',
  props: {
    size: { type: Number, default: 24 },
    color: { type: String, default: 'currentColor' },
    strokeWidth: { type: Number, default: 1.5 },
    class: { type: String, default: undefined },
    title: { type: String, default: undefined },
    ariaLabel: { type: String, default: undefined },
  },
  setup(props) {
    return () => {
      const children = props.title ? [h('title', {}, props.title)] : [];
      return h('svg', {
        xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'none', stroke: props.color,
        'stroke-width': props.strokeWidth, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'vector-effect': 'non-scaling-stroke',
        width: props.size, height: props.size, class: props.class, role: 'img', 'aria-label': props.ariaLabel,
        innerHTML: `<path stroke-miterlimit="1.788" d="M14.652 14.651A3.74 3.74 0 0 0 15.75 12c0-1.036-.42-1.973-1.098-2.652m-5.304 5.303A3.74 3.74 0 0 1 8.25 12c0-1.036.42-1.973 1.098-2.652m9.546 9.546A9.72 9.72 0 0 0 21.75 12a9.72 9.72 0 0 0-2.856-6.895m-2.121 11.668A6.73 6.73 0 0 0 18.75 12a6.73 6.73 0 0 0-1.977-4.773M5.106 18.894A9.72 9.72 0 0 1 2.25 12a9.72 9.72 0 0 1 2.856-6.895m2.121 11.668A6.73 6.73 0 0 1 5.25 12c0-1.864.756-3.552 1.977-4.773M11.25 12a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0"/>`,
      }, children);
    };
  },
});
