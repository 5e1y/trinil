import { defineComponent, h } from 'vue';

export const IsometricView = defineComponent({
  name: 'IsometricView',
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
        innerHTML: `<path d="m15.417 17.782-2.563 2.169c-.472.399-1.236.399-1.708 0l-2.563-2.169m6.834 0L12 14.892m3.417 2.89 3.417-2.89M5.166 9.108l-2.562 2.168c-.472.4-.472 1.047 0 1.446l2.562 2.168m0-5.782L8.583 12M5.166 9.109l3.417-2.891M12 14.89 8.583 12M12 14.891 15.417 12M12 14.891l-3.417 2.891m0-5.782-3.417 2.891M8.583 12 12 9.109M8.583 6.218l2.563-2.169c.472-.399 1.236-.399 1.708 0l2.563 2.169m-6.834 0L12 9.108m6.834 5.783 2.562-2.168c.472-.4.472-1.047 0-1.446L18.834 9.11m0 5.782L15.417 12M12 9.109 15.417 12M12 9.109l3.417-2.891m0 5.782 3.417-2.891m0 0-3.417-2.891M8.583 17.782l-3.417-2.89"/>`,
      }, children);
    };
  },
});
