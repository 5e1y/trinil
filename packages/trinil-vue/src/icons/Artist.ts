import { defineComponent, h } from 'vue';

export const Artist = defineComponent({
  name: 'Artist',
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
        innerHTML: `<path d="M9 14.25a5.25 5.25 0 1 1 0-10.5 5.25 5.25 0 0 1 0 10.5m0 0H6.75a4.5 4.5 0 0 0-4.5 4.5 1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5 4.5 4.5 0 0 0-4.5-4.5zm10.335-4.683c-.312.42-.585 1.154-.585 2.433 0 3.306.405 6.207.62 7.514.07.43.444.736.88.736s.81-.306.88-.736A48 48 0 0 0 21.75 12c0-1.184-.234-1.901-.517-2.335m-1.898-.098c.268.118.563.183.868.183h.554q.25-.001.476-.085m-1.898-.098A2.15 2.15 0 0 1 18.21 8.4l-.124-.312a2.64 2.64 0 0 1 1.094-3.247L21 3.75l-.473 1.894a1.23 1.23 0 0 0 .805 1.467c.645.215.994.912.779 1.557l-.047.14a1.38 1.38 0 0 1-.83.857"/>`,
      }, children);
    };
  },
});
