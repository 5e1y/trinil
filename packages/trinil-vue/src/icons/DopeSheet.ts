import { defineComponent, h } from 'vue';

export const DopeSheet = defineComponent({
  name: 'DopeSheet',
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
        innerHTML: `<path d="M15.75 18.75 13.5 16.5l-2.25 2.25m4.5 0L13.5 21l-2.25-2.25m4.5 0h6m-10.5 0h-4.5M12 12 9.75 9.75 7.5 12m4.5 0-2.25 2.25L7.5 12m4.5 0h3m-7.5 0h-.75m12.75 0-2.25-2.25L15 12m4.5 0-2.25 2.25L15 12m4.5 0h2.25M13.5 5.25 11.25 3 9 5.25m4.5 0L11.25 7.5 9 5.25m4.5 0h3m-7.5 0H6.75m14.25 0L18.75 3 16.5 5.25m4.5 0L18.75 7.5 16.5 5.25m4.5 0h.75M3 18a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m0-6.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5M3 4.5A.75.75 0 1 1 3 6a.75.75 0 0 1 0-1.5"/>`,
      }, children);
    };
  },
});
