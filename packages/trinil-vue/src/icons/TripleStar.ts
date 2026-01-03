import { defineComponent, h } from 'vue';

export const TripleStar = defineComponent({
  name: 'TripleStar',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="M4.901 15.75H2.356a.15.15 0 0 0-.106.256l1.937 1.937a.15.15 0 0 1 .041.136l-.657 3.286a.15.15 0 0 0 .237.15l2.596-1.948a.15.15 0 0 1 .18 0l2.596 1.947a.15.15 0 0 0 .237-.15L8.76 18.08a.15.15 0 0 1 .04-.136l1.938-1.937a.15.15 0 0 0-.106-.256H8.087a.15.15 0 0 1-.134-.083l-1.325-2.649a.15.15 0 0 0-.268 0l-1.325 2.649a.15.15 0 0 1-.134.083M15.913 15.75h-2.545a.15.15 0 0 0-.106.256l1.937 1.937a.15.15 0 0 1 .041.136l-.657 3.286a.15.15 0 0 0 .237.15l2.596-1.948a.15.15 0 0 1 .18 0l2.596 1.947a.15.15 0 0 0 .237-.15l-.657-3.285a.15.15 0 0 1 .04-.136l1.938-1.937a.15.15 0 0 0-.106-.256h-2.545a.15.15 0 0 1-.134-.083l-1.325-2.649a.15.15 0 0 0-.268 0l-1.325 2.649a.15.15 0 0 1-.134.083M10.407 5.25H7.862a.15.15 0 0 0-.106.256l1.937 1.937a.15.15 0 0 1 .041.136l-.657 3.286a.15.15 0 0 0 .237.15l2.596-1.948a.15.15 0 0 1 .18 0l2.596 1.947a.15.15 0 0 0 .237-.15l-.657-3.285a.15.15 0 0 1 .04-.136l1.938-1.937a.15.15 0 0 0-.106-.256h-2.545a.15.15 0 0 1-.134-.083l-1.325-2.649a.15.15 0 0 0-.268 0L10.54 5.167a.15.15 0 0 1-.134.083"/>`,
      }, children);
    };
  },
});
