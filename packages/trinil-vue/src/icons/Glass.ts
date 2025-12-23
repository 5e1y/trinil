import { defineComponent, h } from 'vue';

export const Glass = defineComponent({
  name: 'Glass',
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
        innerHTML: `<path d="M8 21h4m0 0h4m-4 0v-9m0 0h-.232a5.228 5.228 0 0 1-4.35-8.127l.552-.828A.1.1 0 0 1 8.053 3h7.893a.1.1 0 0 1 .084.045l.552.828A5.227 5.227 0 0 1 12.232 12z"/>`,
      }, children);
    };
  },
});
