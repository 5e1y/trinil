import { defineComponent, h } from 'vue';

export const SheetsDrying = defineComponent({
  name: 'SheetsDrying',
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
        innerHTML: `<path d="M2.5 5C4 6 7.2 7.5 12 7.5S20 6 21.5 5M19 3.5l-1.5 4.282m0 0V9.5m0-1.718C18.64 7.507 20 8 20 9v8.882a.93.93 0 0 1-.562.873C18.175 19.28 15.737 20 12 20s-6.175-.721-7.438-1.245A.93.93 0 0 1 4 17.882V9c0-1 1.36-1.493 2.5-1.218m11 0C16.5 8 15.5 8.5 14 10m3.5-2.218L16 3.5M14 10c-1.5 1.5-3.5 2.5-6 2.5m6-2.5c-3.6 0-6.5-1.977-7.5-2.218M5 3.5l1.5 4.282m0 0V9.5m0-1.718L8 3.5"/>`,
      }, children);
    };
  },
});
