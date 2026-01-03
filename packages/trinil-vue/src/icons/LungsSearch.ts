import { defineComponent, h } from 'vue';

export const LungsSearch = defineComponent({
  name: 'LungsSearch',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="M20.865 11.887a18 18 0 0 0-.58-2.968c-.21-.76-.877-2.011-1.054-2.31-.91-1.531-1.178-2.856-2.859-3.324-.562-.156-1.145.172-1.287.723l-.6 2.338c-.119.459-.543.781-1.03.781h-1.476m1.373 5.339-.085-.334a1.186 1.186 0 0 0-1.157-.878c-.658 0-1.192.519-1.192 1.159 0 0 .006.551 0 .905-.039 2.323-.759 5.904-.759 5.904-.159 1.235-1.413 2.041-2.644 1.7l-.11-.032C4.532 20.093 3 17.412 3 14.508c0-2.221.42-3.769.86-5.367.314-1.137.605-2.013.98-2.859.772-1.733 1.086-2.527 2.542-2.999a.96.96 0 0 1 1.193.553l1.011 2.623c.155.402.551.67.994.67h1.4m0 0V3M22.5 22.5l-2.088-2.088m0 0a3.61 3.61 0 1 0-5.104-5.104 3.61 3.61 0 0 0 5.104 5.104"/>`,
      }, children);
    };
  },
});
