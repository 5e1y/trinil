import { defineComponent, h } from 'vue';

export const Material = defineComponent({
  name: 'Material',
  props: {
    size: { type: Number, default: 24 },
    color: { type: String, default: 'currentColor' },
    class: { type: String, default: undefined },
    title: { type: String, default: undefined },
    ariaLabel: { type: String, default: undefined },
  },
  setup(props) {
    return () => {
      const children = props.title ? [h('title', {}, props.title)] : [];
      return h('svg', {
        xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'none', stroke: props.color,
        'stroke-width': 1.5, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'vector-effect': 'non-scaling-stroke',
        width: props.size, height: props.size, class: props.class, role: 'img', 'aria-label': props.ariaLabel,
        innerHTML: `<path d="m6.15 14.25-2.993-1.662a.1.1 0 0 1 0-.175L6.15 10.75m0 3.5 5.801 3.223a.1.1 0 0 0 .098 0l5.801-3.223m-11.7 0-2.993 1.663a.1.1 0 0 0 0 .174l8.794 4.886a.1.1 0 0 0 .098 0l8.794-4.885a.1.1 0 0 0 0-.175L17.85 14.25m0 0 2.993-1.662a.1.1 0 0 0 0-.175L17.85 10.75m0 0-5.802 3.223a.1.1 0 0 1-.097 0L6.15 10.75m11.7 0 1.121-.653a5 5 0 0 0 1.585-1.46l.38-.546a.1.1 0 0 0-.033-.145l-8.822-4.901a.1.1 0 0 0-.132.032l-.307.46A5 5 0 0 1 10 5.084L9 5.667 3.157 8.913a.1.1 0 0 0 0 .174L6.15 10.75"/>`,
      }, children);
    };
  },
});
