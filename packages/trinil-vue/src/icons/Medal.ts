import { defineComponent, h } from 'vue';

export const Medal = defineComponent({
  name: 'Medal',
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
        innerHTML: `<path d="M8.5 15.381a1 1 0 0 0 .143-.017l1.006-.195a1 1 0 0 1 .921.3l.699.748a1 1 0 0 0 1.462 0l.699-.749a1 1 0 0 1 .921-.299l1.006.195q.072.014.143.017m-7 0a1 1 0 0 1-1.04-.876l-.125-1.017a1 1 0 0 0-.57-.784l-.927-.433a1 1 0 0 1-.452-1.39l.496-.897a1 1 0 0 0 0-.968l-.496-.897a1 1 0 0 1 .452-1.39l.928-.433a1 1 0 0 0 .569-.784l.125-1.017a1 1 0 0 1 1.183-.859l1.006.195a1 1 0 0 0 .921-.3l.699-.748a1 1 0 0 1 1.462 0l.699.749a1 1 0 0 0 .921.299l1.006-.195a1 1 0 0 1 1.183.86l.125 1.016a1 1 0 0 0 .57.784l.927.433a1 1 0 0 1 .452 1.39l-.496.897a1 1 0 0 0 0 .968l.496.896a1 1 0 0 1-.452 1.39l-.928.434a1 1 0 0 0-.57.784l-.125 1.017a1 1 0 0 1-1.039.876m-7 0v5.235a.384.384 0 0 0 .597.32l2.348-1.566a1 1 0 0 1 1.11 0l2.348 1.566a.384.384 0 0 0 .597-.32v-5.235"/>`,
      }, children);
    };
  },
});
