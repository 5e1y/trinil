import { defineComponent, h } from 'vue';

export const Tooth = defineComponent({
  name: 'Tooth',
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
        innerHTML: `<path d="M13.663 2.705c2.842-1.57 6.041 1.266 5.27 4.673l-1.197 3.654a20.3 20.3 0 0 0-.962 4.995l-.233 3.58c-.141 1.017-1.432 1.117-1.7.131-.245-.907-1.18-2.798-2.003-4.254-.387-.685-1.289-.685-1.676 0-.794 1.404-1.742 3.734-1.954 5.373-.164 1.266-1.83 1.223-1.94-.05l-.21-3.408s-.551-4.134-.988-5.582L5.066 7.378c-.77-3.407 2.43-6.244 5.27-4.673a3.4 3.4 0 0 0 3.327 0m0 0c-1.047.578-3.147 2.262-3.147 4.821"/>`,
      }, children);
    };
  },
});
