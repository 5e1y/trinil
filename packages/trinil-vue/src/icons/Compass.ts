import { defineComponent, h } from 'vue';

export const Compass = defineComponent({
  name: 'Compass',
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
        innerHTML: `<path d="M21 12h-2m2 0a8.97 8.97 0 0 1-2.636 6.364M21 12a8.97 8.97 0 0 0-2.636-6.364M3 12h2m-2 0a8.97 8.97 0 0 1 2.636-6.364M3 12a8.97 8.97 0 0 0 2.636 6.364M12 3v2m0-2a8.97 8.97 0 0 1 6.364 2.636M12 3a8.97 8.97 0 0 0-6.364 2.636M12 21v-2m0 2a8.97 8.97 0 0 0 6.364-2.636M12 21a8.97 8.97 0 0 1-6.364-2.636m12.728 0L17 17m1.364-11.364L17 7M5.636 5.636 7 7M5.636 18.364 7 17m6.677-4.032q-.087.151-.223.266L9.46 16.586a.1.1 0 0 1-.163-.094l.907-5.134a1 1 0 0 1 .118-.326m3.354 1.936a1 1 0 0 0 .118-.326l.907-5.134a.1.1 0 0 0-.163-.094l-3.993 3.352q-.135.115-.223.266m3.354 1.936L12 12l-1.677-.968"/>`,
      }, children);
    };
  },
});
