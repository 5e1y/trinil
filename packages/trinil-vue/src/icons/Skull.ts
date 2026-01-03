import { defineComponent, h } from 'vue';

export const Skull = defineComponent({
  name: 'Skull',
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
        innerHTML: `<path d="M9 21.75H7.486c-.673 0-1.543-.485-1.543-1.083 0-.599-.439-1.084-1.112-1.084-.461 0-.883-.231-1.09-.598a.98.98 0 0 1 0-.97.985.985 0 0 0-.115-1.134l-.735-.872c-.416-.493-.641-1.562-.641-2.178 0-.84.28-2.412.804-3.112.217-.364.28-.802.2-1.19C2.25 3.75 7.878 2.25 12 2.25s9.75 1.5 8.745 7.28c-.066.417.006.856.2 1.19.525.698.805 2.27.805 3.11 0 .617-.225 1.686-.64 2.18l-.736.871a.985.985 0 0 0-.115 1.134.98.98 0 0 1 0 .97c-.207.367-.629.598-1.09.598-.674 0-1.112.485-1.112 1.084 0 .598-.87 1.083-1.543 1.083H15m-6 0v-1.625m0 1.625h3m3 0v-1.625m0 1.625h-3m0 0v-1.625m-.61-2.708a.94.94 0 0 1 1.22 0m5.75-3.538c0-1.291-1.106-2.296-2.55-2.153-1.338.132-2.459 1.203-2.31 2.392.163 1.304 1.582 2.181 3.014 1.863 1.085-.241 1.846-1.108 1.846-2.102m-7.86.24c.149-1.19-.972-2.261-2.31-2.393-1.444-.143-2.55.862-2.55 2.153 0 .994.761 1.86 1.846 2.102 1.432.318 2.851-.559 3.014-1.863"/>`,
      }, children);
    };
  },
});
