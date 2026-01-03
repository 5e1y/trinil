import { defineComponent, h } from 'vue';

export const CheckerTexture = defineComponent({
  name: 'CheckerTexture',
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
        innerHTML: `<path d="M9 21h6m-6 0H5.25M9 21v-3.75M15 21v-2.25M15 21h2.25M15 3H9m6 0h3.75M15 3v3.75M9 3v2.25M9 3H6.75M21 15V9m0 6h-2.25M21 15v2.25M21 9h-3.75M21 9V5.25M3 9v6m0-6h2.25M3 9V6.75M3 15v3.75M3 15h3.75M3 18.75v.75A1.5 1.5 0 0 0 4.5 21h.75M3 18.75 6.75 15m0 0H9m-3.75 6L9 17.25m0 0V15m0-2.25V15m0-2.25L12.75 9M9 12.75V9m0 6h2.25m1.5-6H15m-2.25 0H9m2.25 6L15 11.25M11.25 15H15m0-3.75V9m0 2.25V15m0-6h2.25M15 9V6.75M17.25 9 21 5.25m0 0V4.5A1.5 1.5 0 0 0 19.5 3h-.75m0 0L15 6.75m-6-1.5V9m0-3.75L5.25 9M9 9H5.25M3 6.75V4.5A1.5 1.5 0 0 1 4.5 3h2.25M3 6.75 6.75 3M15 18.75V15m0 3.75L18.75 15M15 15h3.75M21 17.25v2.25a1.5 1.5 0 0 1-1.5 1.5h-2.25M21 17.25 17.25 21"/>`,
      }, children);
    };
  },
});
