import { defineComponent, h } from 'vue';

export const HeartMedicalSearch = defineComponent({
  name: 'HeartMedicalSearch',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="M12.359 21.708c-2.33-.266-4.335-1.773-5.139-3.929l-.87-2.334a6.04 6.04 0 0 1 .488-5.27m0 0C5.242 9.1 3.75 9.1 3.75 9.1m3.088 1.074a6.5 6.5 0 0 1 1.449-1.676m0 0a3.5 3.5 0 0 1-.125-.68m.125.68c.804 2.807 3.992 0 6.05-2.142.288-.3.6-.565.924-.798m-7.099 2.26a3.568 3.568 0 0 1 .68-2.41m-.68 2.41C5.862 6.466 3.75 6.466 3.75 6.466m13.085 1.602c1.479.787 2.585 2.012 3.095 3.462m-3.095-3.462c-.813.657-1.449 1.703-1.076 3.563m1.076-3.563c1.627-1.314 3.415-1.314 3.415-1.314m-4.989-1.195C17.666 3.83 20.25 3.83 20.25 3.83M15.261 5.56A3.83 3.83 0 0 0 13.31 4.05m-2.632.005A4 4 0 0 1 12 3.83c.46 0 .9.077 1.31.219m-2.633.005a3.84 3.84 0 0 0-1.834 1.353m1.834-1.353L9.998 2.25m3.311 1.8.69-1.8M8.842 5.408 7.05 4.201M22.5 22.5l-2.088-2.088m0 0a3.61 3.61 0 1 0-5.104-5.104 3.61 3.61 0 0 0 5.104 5.104"/>`,
      }, children);
    };
  },
});
