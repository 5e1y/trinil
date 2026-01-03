import { defineComponent, h } from 'vue';

export const ColorPalette = defineComponent({
  name: 'ColorPalette',
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
        innerHTML: `<path d="M3 16.5v-12A1.5 1.5 0 0 1 4.5 3h6A1.5 1.5 0 0 1 12 4.5v1.136M3 16.5c0 .61.121 1.192.341 1.723M3 16.5c0-1.235.498-2.354 1.303-3.167M3 16.5c0-1.145.434-2.29 1.303-3.167M3 16.5c0 .586.114 1.172.341 1.723m0 0c.226.543.555 1.033.962 1.444m-.962-1.445c.218.525.538 1.017.962 1.445m0 0A4.49 4.49 0 0 0 7.5 21h12a1.5 1.5 0 0 0 1.5-1.5v-6a1.5 1.5 0 0 0-1.5-1.5h-1.136m-14.06 7.667.014.015m.002-6.365A4.49 4.49 0 0 1 7.5 12h10.864M4.32 13.316l-.017.017m.017-.017-.002.002-.015.015m.017-.017L12 5.637M18.364 12l.803-.803a1.5 1.5 0 0 0 0-2.122l-4.242-4.242a1.5 1.5 0 0 0-2.122 0L12 5.636M8.25 16.5a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0"/>`,
      }, children);
    };
  },
});
