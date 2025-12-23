import { defineComponent, h } from 'vue';

export const MedalStar = defineComponent({
  name: 'MedalStar',
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
        innerHTML: `<path d="M15.5 15.381v5.235a.384.384 0 0 1-.597.32l-2.348-1.566a1 1 0 0 0-1.11 0l-2.348 1.566a.384.384 0 0 1-.597-.32v-5.235m1.149-11.55-1.006-.195a1 1 0 0 0-1.183.86l-.125 1.016a1 1 0 0 1-.57.784l-.927.433a1 1 0 0 0-.452 1.39l.496.897a1 1 0 0 1 0 .968l-.496.896a1 1 0 0 0 .452 1.39l.928.434a1 1 0 0 1 .569.784l.125 1.017a1 1 0 0 0 1.183.859l1.006-.195a1 1 0 0 1 .921.3l.699.748a1 1 0 0 0 1.462 0l.699-.749a1 1 0 0 1 .921-.299l1.006.195a1 1 0 0 0 1.183-.86l.125-1.016a1 1 0 0 1 .57-.784l.927-.433a1 1 0 0 0 .452-1.39l-.496-.897a1 1 0 0 1 0-.968l.496-.897a1 1 0 0 0-.452-1.39l-.928-.433a1 1 0 0 1-.57-.784l-.125-1.017a1 1 0 0 0-1.182-.859l-1.006.195a1 1 0 0 1-.921-.3l-.7-.748a1 1 0 0 0-1.461 0l-.699.749a1 1 0 0 1-.921.299Zm1.123 4.058-2.376.346a.1.1 0 0 0-.055.17l1.719 1.676a.1.1 0 0 1 .029.089l-.406 2.366a.1.1 0 0 0 .145.106l2.125-1.118a.1.1 0 0 1 .093 0l2.126 1.118a.1.1 0 0 0 .145-.106l-.406-2.366a.1.1 0 0 1 .029-.089l1.719-1.676a.1.1 0 0 0-.056-.17l-2.376-.346a.1.1 0 0 1-.075-.054L12.09 5.682a.1.1 0 0 0-.179 0l-1.062 2.153a.1.1 0 0 1-.076.054Z"/>`,
      }, children);
    };
  },
});
