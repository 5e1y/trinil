import { defineComponent, h } from 'vue';

export const WorldSpace = defineComponent({
  name: 'WorldSpace',
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
        innerHTML: `<path d="M21.75 20.25 21.423 18m.327 2.25-2.25.376m2.25-.376-4.091-3.068M2.25 20.25 2.577 18m-.327 2.25 2.25.376m-2.25-.376 4.091-3.068M12 2.25l1.5 1.5M12 2.25l-1.5 1.5m1.5-1.5v4.5m5.659 10.432A6.75 6.75 0 0 0 12 6.75m5.659 10.43A6.74 6.74 0 0 1 12 20.25a6.74 6.74 0 0 1-5.659-3.068m11.318 0-.955-.716M12 6.75a6.75 6.75 0 0 0-5.659 10.432M12 6.75v1.875m-5.659 8.557.955-.716"/>`,
      }, children);
    };
  },
});
