import { defineComponent, h } from 'vue';

export const BoxExpedition = defineComponent({
  name: 'BoxExpedition',
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
        innerHTML: `<path d="M2.25 7.5H4.5M2.25 12H4.5m-2.25 4.5H4.5M15 11.25l-3.375-1.875M15 11.25l6.54-3.633M15 11.25v8.784m-3.375-10.66 6.75-3.75m-6.75 3.75L8.46 7.618m9.915-1.992-2.646-1.47a1.5 1.5 0 0 0-1.457 0L9.022 7.07a1.5 1.5 0 0 0-.562.546m9.915-1.992 2.604 1.446c.236.132.428.321.56.546M15 20.034a1.5 1.5 0 0 0 .729-.189l5.25-2.916a1.5 1.5 0 0 0 .771-1.312V8.382a1.5 1.5 0 0 0-.21-.765M15 20.034a1.5 1.5 0 0 1-.729-.189l-5.25-2.916a1.5 1.5 0 0 1-.771-1.312V8.382c0-.274.075-.538.21-.765"/>`,
      }, children);
    };
  },
});
