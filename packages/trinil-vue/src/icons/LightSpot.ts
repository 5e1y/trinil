import { defineComponent, h } from 'vue';

export const LightSpot = defineComponent({
  name: 'LightSpot',
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
        innerHTML: `<path d="M12 21.75c4.97 0 9-2.35 9-5.25 0-.521-.13-1.025-.373-1.5M12 21.75c-4.97 0-9-2.35-9-5.25 0-.521.13-1.025.373-1.5M12 21.75v-12M3.373 15l.116-.212M3.373 15q.054-.107.116-.212M7.5 7.5l-4.01 7.288m0 0c.891-1.51 2.931-2.707 5.51-3.24M20.627 15l-.116-.212m.116.212a4 4 0 0 0-.116-.212M16.5 7.5l4.01 7.288m0 0c-.892-1.51-2.931-2.707-5.51-3.24M14.25 4.5a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0"/>`,
      }, children);
    };
  },
});
