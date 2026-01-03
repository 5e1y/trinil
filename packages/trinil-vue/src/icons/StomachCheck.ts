import { defineComponent, h } from 'vue';

export const StomachCheck = defineComponent({
  name: 'StomachCheck',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="M21.384 12.158c.598-1.366.49-2.99-.396-4.269l-.265-.383c-.705-1.018-1.881-1.623-2.73-1.699-.848-.076-1.733-.258-2.335-.86a2.2 2.2 0 0 1-.645-1.555L15.02 3m-3.749 0-.007 1.036c0 .875.348 1.714.966 2.333.667.666.575 1.78-.275 2.187-1.564.75-2.78 1.12-5.153.996-2.86-.15-5.14 2.487-4.484 5.275l.092.394a4.6 4.6 0 0 0 1.011 1.97c.201.23.334.517.334.823v2.997m7.514-2.506q-1.276.24-2.617.279c-.622.018-1.14.513-1.14 1.136v1.09m6.738-2.26 2.894 2.894a.15.15 0 0 0 .212 0l4.91-4.91"/>`,
      }, children);
    };
  },
});
