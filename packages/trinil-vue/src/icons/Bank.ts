import { defineComponent, h } from 'vue';

export const Bank = defineComponent({
  name: 'Bank',
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
        innerHTML: `<path d="M5.25 17.25h-.329a1.5 1.5 0 0 0-1.455 1.136L3.02 20.17a.668.668 0 0 0 .648.83h16.664a.668.668 0 0 0 .648-.83l-.446-1.784a1.5 1.5 0 0 0-1.455-1.136h-.329m-13.5 0v-9m0 9h4.5m-4.5-9h-.942a1.308 1.308 0 0 1-.414-2.548l7.632-2.544a1.5 1.5 0 0 1 .948 0l7.632 2.544a1.308 1.308 0 0 1-.414 2.548h-.942m-13.5 0h4.5m0 9v-9m0 9h4.5m-4.5-9h4.5m0 9v-9m0 9h4.5m-4.5-9h4.5m0 9v-9"/>`,
      }, children);
    };
  },
});
