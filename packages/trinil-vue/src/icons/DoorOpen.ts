import { defineComponent, h } from 'vue';

export const DoorOpen = defineComponent({
  name: 'DoorOpen',
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
        innerHTML: `<path d="M14 19v.674a1 1 0 0 1-1.275.962l-5-1.429A1 1 0 0 1 7 18.246V4a1 1 0 0 1 .49-.86M14 19V5.754a1 1 0 0 0-.725-.961L7.49 3.14M14 19h2a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H8a1 1 0 0 0-.51.14M12 13.429l-1-.286"/>`,
      }, children);
    };
  },
});
