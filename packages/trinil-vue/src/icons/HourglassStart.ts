import { defineComponent, h } from 'vue';

export const HourglassStart = defineComponent({
  name: 'HourglassStart',
  props: {
    size: { type: Number, default: 24 },
    color: { type: String, default: 'currentColor' },
    class: { type: String, default: undefined },
    title: { type: String, default: undefined },
    ariaLabel: { type: String, default: undefined },
  },
  setup(props) {
    return () => {
      const children = props.title ? [h('title', {}, props.title)] : [];
      return h('svg', {
        xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'none', stroke: props.color,
        'stroke-width': 1.5, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'vector-effect': 'non-scaling-stroke',
        width: props.size, height: props.size, class: props.class, role: 'img', 'aria-label': props.ariaLabel,
        innerHTML: `<path d="M5 20v-1.324a5 5 0 0 1 2.226-4.16l1.278-.852a2 2 0 0 0 0-3.328l-1.277-.852A5 5 0 0 1 5 5.324V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v1.324a5 5 0 0 1-2.227 4.16l-1.277.852a2 2 0 0 0 0 3.328l1.277.852A5 5 0 0 1 19 18.676V20a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1ZM16.409 6H7.225C7.101 6 7 6.1 7 6.225c0 .15.091.283.228.338q.036.014.07.03c.814.417 1.713.689 2.453 1.226q.25.181.469.4l.402.403c.7.7 2.486.556 2.995-.293.324-.54.807-.965 1.383-1.218l1.65-.557a.21.21 0 0 0 .123-.189A.365.365 0 0 0 16.41 6Z" clip-rule="evenodd"/>`,
      }, children);
    };
  },
});
