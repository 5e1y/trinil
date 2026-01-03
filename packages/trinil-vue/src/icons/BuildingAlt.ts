import { defineComponent, h } from 'vue';

export const BuildingAlt = defineComponent({
  name: 'BuildingAlt',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="M12 9V6.177a1.5 1.5 0 0 0-.83-1.342l-3-1.5a1.5 1.5 0 0 0-1.34 0l-3 1.5A1.5 1.5 0 0 0 3 6.177V19.5A1.5 1.5 0 0 0 4.5 21h1.35a.15.15 0 0 0 .15-.15V18a1.5 1.5 0 1 1 3 0v2.85c0 .083.067.15.15.15H12m0-12v12m0-12 3.83-1.915a1.5 1.5 0 0 1 1.34 0l3 1.5A1.5 1.5 0 0 1 21 9.927V19.5a1.5 1.5 0 0 1-1.5 1.5h-1.35a.15.15 0 0 1-.15-.15V18a1.5 1.5 0 1 0-3 0v2.85a.15.15 0 0 1-.15.15H12M6 9a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m10.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>`,
      }, children);
    };
  },
});
