import { defineComponent, h } from 'vue';

export const AssetBrowser = defineComponent({
  name: 'AssetBrowser',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="m22.5 22.5-2.088-2.088m0 0a3.61 3.61 0 1 0-5.104-5.104 3.61 3.61 0 0 0 5.104 5.104m.588-8.46v-3.59a1.5 1.5 0 0 0-.198-.746m0 0a1.5 1.5 0 0 0-.546-.55l-7.5-4.375a1.5 1.5 0 0 0-1.512 0l-7.5 4.375a1.5 1.5 0 0 0-.545.55m17.603 0L12 12.75m0 0L3.199 7.616M12 12.75v2.155m-8.801-7.29C3.07 7.84 3 8.096 3 8.363v7.277a1.5 1.5 0 0 0 .744 1.295l7.5 4.375c.234.136.495.204.756.204"/>`,
      }, children);
    };
  },
});
