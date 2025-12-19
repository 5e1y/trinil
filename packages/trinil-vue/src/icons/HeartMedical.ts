import { defineComponent, h } from 'vue';

export const HeartMedical = defineComponent({
  name: 'HeartMedical',
  props: {
    size: { type: Number, default: 24 },
    color: { type: String, default: 'currentColor' },
    class: { type: String, default: undefined },
    title: { type: String, default: undefined },
    ariaLabel: { type: String, default: undefined },
  },
  setup(props) {
    return () => {
      const children = [];
      if (props.title) {
        children.push(h('title', {}, props.title));
      }
      return h(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: props.color,
          'stroke-width': 1.5,
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          'vector-effect': 'non-scaling-stroke',
          width: props.size,
          height: props.size,
          class: props.class,
          role: 'img',
          'aria-label': props.ariaLabel,
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M6.807 10.018a5.95 5.95 0 0 0-.443 5l.79 2.215a5.676 5.676 0 0 0 10.691 0l.792-2.215c1.035-2.9-.293-5.91-2.742-7.271m-9.088 2.271C5.357 9 4 9 4 9m2.807 1.018c.344-.6.79-1.138 1.317-1.59m0 0a3.5 3.5 0 0 1-.113-.645m.113.646c.731 2.663 3.63 0 5.5-2.032.262-.285.545-.537.84-.758M8.012 7.783a3.484 3.484 0 0 1 .619-2.287m-.619 2.287C5.921 6.5 4.001 6.5 4.001 6.5m11.895 1.247C15.106 8.413 14.5 9.5 15 11.5l.072.179A4.45 4.45 0 0 1 14.5 16m1.396-8.253C17.375 6.5 19 6.5 19 6.5m-4.535-.86C16.65 4 19 4 19 4m-4.535 1.64a3.5 3.5 0 0 0-1.775-1.432m-2.392.004c.374-.137.78-.212 1.202-.212.418 0 .819.073 1.19.208m-2.392.004A3.5 3.5 0 0 0 8.63 5.496m1.668-1.284L9.68 2.5m3.01 1.708.627-1.708M8.63 5.496 7 4.351"/>`,
        },
        children,
      );
    };
  },
});
