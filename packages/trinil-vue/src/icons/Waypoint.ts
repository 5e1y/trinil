import { defineComponent, h } from 'vue';

export const Waypoint = defineComponent({
  name: 'Waypoint',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="m9 9.75-5.25 1.5v9L9 18.75m0-9v9m0-9 1.235.309M9 18.75l6 1.5m0-9 5.25-1.5v9L15 20.25m0-9v9m0-9-1.889-.472m0 0L14.455 9.3c1.937-2.132.425-5.55-2.455-5.55S7.608 7.168 9.545 9.3l.69.759m2.876.719L12 12l-1.765-1.941"/>`,
      }, children);
    };
  },
});
