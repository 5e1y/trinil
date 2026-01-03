import { defineComponent, h } from 'vue';

export const Medal = defineComponent({
  name: 'Medal',
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
        innerHTML: `<path d="M7.5 15.57a2.26 2.26 0 0 0 1.622-.017c.286-.115.688.052.81.335a2.25 2.25 0 0 0 4.136 0c.122-.283.524-.45.81-.335a2.26 2.26 0 0 0 1.622.017m-9 0a2.25 2.25 0 0 1-1.303-2.942c.114-.286-.052-.688-.335-.81a2.25 2.25 0 0 1 0-4.136c.283-.122.45-.524.335-.81a2.25 2.25 0 0 1 2.925-2.925c.286.115.688-.052.81-.335a2.25 2.25 0 0 1 4.136 0c.122.283.524.45.81.335a2.25 2.25 0 0 1 2.925 2.925c-.114.286.052.688.335.81a2.25 2.25 0 0 1 0 4.136c-.283.122-.45.524-.335.81A2.25 2.25 0 0 1 16.5 15.57m-9 0v6.18l4.5-1.5 4.5 1.5v-6.18"/>`,
      }, children);
    };
  },
});
