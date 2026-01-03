import { defineComponent, h } from 'vue';

export const Substract = defineComponent({
  name: 'Substract',
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
        innerHTML: `<path d="M16.5 7.5h3c.414 0 .79.168 1.06.44M16.5 7.5v-3A1.5 1.5 0 0 0 15 3H4.5A1.5 1.5 0 0 0 3 4.5V15a1.5 1.5 0 0 0 1.5 1.5h3m9-9V12m-9 4.5v3c0 .414.168.79.44 1.06M7.5 16.5H12m0 0h3a1.5 1.5 0 0 0 1.5-1.5v-3M12 16.5l-4.06 4.06M16.5 12l4.06-4.06M12 21H9c-.414 0-.79-.168-1.06-.44M12 21l9-9m-9 9h4.5m4.5-9V9c0-.414-.168-.79-.44-1.06M21 12v4.5M16.5 21h3a1.5 1.5 0 0 0 1.5-1.5v-3M16.5 21l4.5-4.5"/>`,
      }, children);
    };
  },
});
