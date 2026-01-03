import { defineComponent, h } from 'vue';

export const Needle = defineComponent({
  name: 'Needle',
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
        innerHTML: `<path d="M9.097 11.052 2.25 21.75l17.442-11.163a4.6 4.6 0 0 0 .74-.591M9.098 11.052l4.316-6.744a4.55 4.55 0 0 1 2.3-1.83c3.612-1.29 7.1 2.197 5.81 5.81a4.55 4.55 0 0 1-1.09 1.708M9.097 11.052c2.732-.188 5.842-1.926 7.647-3.748m-7.647 3.748c-1.484.102-2.856-.254-3.847-1.302-3-3.173.182-6.905 1.5-7.5m11.155 4.865a.75.75 0 0 1-1.16.189m1.16-.19a.75.75 0 1 0-1.161.189m1.161-.188a4.3 4.3 0 0 0-.655-.365q-.231.277-.506.554m3.689 2.692c.775 1.426 1.355 3.346 1.355 5.84 0 4.086-1.748 5.094-3.391 4.742m0 0c-2.26-.187-3.928-3.381-1.782-4.507s3.818 2.326 1.782 4.507m0 0c-.99 1.366-3.197 1.952-7.17-.317"/>`,
      }, children);
    };
  },
});
