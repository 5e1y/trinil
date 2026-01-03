import { defineComponent, h } from 'vue';

export const Render = defineComponent({
  name: 'Render',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="M20.802 7.616a1.5 1.5 0 0 1 .198.746V12m-.198-4.384a1.5 1.5 0 0 0-.546-.55l-3.75-2.188m4.296 2.738L16.4 10.183M3.199 7.616a1.5 1.5 0 0 1 .545-.55l7.5-4.375a1.5 1.5 0 0 1 1.512 0l3.75 2.187M3.199 7.616c-.128.223-.199.48-.199.746v7.277a1.5 1.5 0 0 0 .744 1.295L7.6 19.183M3.2 7.616l4.4 2.567M12 21.513c-.261 0-.522-.068-.756-.204L7.6 19.183M12 21.513c.261 0 .522-.068.756-.204l3.75-2.187M12 21.514v-4.382m4.506-12.254L12 7.562m0 5.188-4.4-2.567M12 12.75l4.4-2.567M12 12.75v4.382m-4.4-6.95v4.44m0-4.44 4.4-2.62m-4.4 11.62v-4.56m0 0 4.4 2.51m0-9.57 4.4 2.62m0 0 .053 4.41m.053 4.53 3.75-2.188A1.5 1.5 0 0 0 21 15.638V12m-4.494 7.122-.053-4.53m0 0L12 17.133m4.453-2.54L21 12"/>`,
      }, children);
    };
  },
});
