import { defineComponent, h } from 'vue';

export const Timer = defineComponent({
  name: 'Timer',
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
        innerHTML: `<path d="M5.25 18.75H3l1.338-9.812a7.733 7.733 0 0 1 15.324 0L21 18.75h-2.25m-13.5 0v1.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5v-1.5m-13.5 0h13.5m-9.101-5.162a4.5 4.5 0 0 0 6.189-6.189m-6.189 6.189c.44.028.89-.127 1.226-.463l4.5-4.5c.336-.336.49-.786.463-1.226m-6.189 6.189a1.59 1.59 0 0 1-1.024-.463 1.59 1.59 0 0 1-.463-1.024m0 0a4.5 4.5 0 0 1 6.189-6.189m-6.189 6.189c-.028-.44.127-.89.463-1.226l4.5-4.5c.336-.336.786-.49 1.226-.463M15.838 7.4a1.59 1.59 0 0 0-.463-1.024 1.59 1.59 0 0 0-1.024-.463"/>`,
      }, children);
    };
  },
});
