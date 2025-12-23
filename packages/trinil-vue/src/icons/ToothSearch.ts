import { defineComponent, h } from 'vue';

export const ToothSearch = defineComponent({
  name: 'ToothSearch',
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
        innerHTML: `<path d="M13.533 3.41c2.62-1.448 5.57 1.167 4.86 4.308l-1.105 3.369a19 19 0 0 0-.548 2.073m-3.207-9.75a3.14 3.14 0 0 1-3.066 0c-2.62-1.448-5.57 1.167-4.86 4.308l.926 4.092c.403 1.335.911 5.147.911 5.147l.194 3.142c.1 1.173 1.637 1.213 1.788.046.195-1.511 1.07-3.66 1.801-4.954.357-.63 1.189-.63 1.546 0 .183.324.371.67.556 1.022m.204-12.803c-.965.533-3.355 2.086-3.355 4.445M13 18a5 5 0 1 0 5-5m-5 5c0-.63.116-1.232.329-1.787M13 18a5 5 0 0 1 5-5m0 0c-.435 0-.858.056-1.26.16m0 0a5.01 5.01 0 0 0-3.411 3.053m5.585 2.701a2 2 0 1 1-2.828-2.828 2 2 0 0 1 2.828 2.828Zm0 0L20 20"/>`,
      }, children);
    };
  },
});
