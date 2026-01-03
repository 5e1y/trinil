import { defineComponent, h } from 'vue';

export const Phone1 = defineComponent({
  name: 'Phone1',
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
        innerHTML: `<path d="M9.104 5.56a1.215 1.215 0 0 1-.13 1.58l-.861.853a.25.25 0 0 0-.035.314 24.6 24.6 0 0 0 7.584 7.51c.1.064.232.05.317-.034l.858-.85a1.245 1.245 0 0 1 1.599-.126l2.825 2.024c.451.323.627.906.37 1.395-.32.609-.834 1.441-1.537 2.137-1.279 1.268-3.174 1.781-4.828 1.054-5.305-2.335-9.7-6.714-12.587-12.545-.856-1.727-.383-3.774.99-5.134a6.6 6.6 0 0 1 2.152-1.419c.448-.181.936.008 1.219.397z"/>`,
      }, children);
    };
  },
});
