import { defineComponent, h } from 'vue';

export const Tools = defineComponent({
  name: 'Tools',
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
        innerHTML: `<path d="m13.125 11.625 1.125 1.125a14.2 14.2 0 0 1-1.443 3.058m.318-4.183-.75-.75m.75.75.75-.75m-1.5 0L11.25 9.75a14.2 14.2 0 0 0-4.8 2.73m5.925-1.605.75-.75m-.318 5.683 5.322 5.321a2.121 2.121 0 0 0 3-3l-7.254-7.254m-1.068 4.933A14.23 14.23 0 0 1 5.25 21.75l-3-3a14.23 14.23 0 0 1 4.2-6.27m0 0a4.1 4.1 0 0 1-2.7-1.23C1.5 9 3 6 3 6l2.03 2.03c.141.141.332.22.53.22H7.5a.75.75 0 0 0 .75-.75V5.561a.75.75 0 0 0-.22-.53L6 3s3-1.5 5.25.75S12 9 12 9l1.125 1.124m0 0L16.5 6.75V4.5l3.75-2.25 1.5 1.5L19.5 7.5h-2.25l-3.375 3.375"/>`,
      }, children);
    };
  },
});
