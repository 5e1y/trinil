import { defineComponent, h } from 'vue';

export const BrainCheck = defineComponent({
  name: 'BrainCheck',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="M18.36 7.31c-.405-1.401-1.643-2.422-3.11-2.422a3 3 0 0 0-.638.066 1.94 1.94 0 0 1-1.635-.428 3.14 3.14 0 0 0-2.06-.776 3.14 3.14 0 0 0-2.021.74 1.7 1.7 0 0 1-1.143.4q-.044-.002-.086-.002c-1.467 0-2.706 1.02-3.11 2.422m13.802 0c1.335.425 2.308 1.727 2.308 3.268q0 .045-.002.09c-.011.432.123.863.38 1.2q.06.082.118.168M18.36 7.31c-1.363-.383-2.844.294-3.077 1.729-.036.219-.203.4-.415.4a.4.4 0 0 1-.274-.114c-1.389-1.307-3.454-.673-3.719 1.253m.733 9.595a3.1 3.1 0 0 1-1.905-.171 1.75 1.75 0 0 0-1.362 0c-.375.16-.785.248-1.215.248-1.76 0-3.193-1.47-3.248-3.305m0 0c-.971-.59-1.627-1.69-1.627-2.954 0-.388.063-.76.177-1.108a1.93 1.93 0 0 0 0-1.197 3.5 3.5 0 0 1-.177-1.108c0-1.541.972-2.843 2.306-3.268m-.679 9.635c0-.716.281-1.828 1.19-2.482m-.51-7.153c-.278.962-.11 2.858 1.585 3.268m6.314 3.57a4 4 0 0 0-.456-.157c-1.083-.19-2.708 0-3.25 1.707m5.5 3.052 2.894 2.894a.15.15 0 0 0 .212 0l4.91-4.91"/>`,
      }, children);
    };
  },
});
