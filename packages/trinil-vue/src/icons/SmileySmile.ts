import { defineComponent, h } from 'vue';

export const SmileySmile = defineComponent({
  name: 'SmileySmile',
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
        innerHTML: `<path d="m9.5 14.5.168.252a2.803 2.803 0 0 0 4.664 0l.168-.252M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18Zm-5-9.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0Zm8.5 0a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0Z"/>`,
      }, children);
    };
  },
});
