import { defineComponent, h } from 'vue';

export const PhoneOff = defineComponent({
  name: 'PhoneOff',
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
        innerHTML: `<path d="M9.37 10.13a25 25 0 0 1-1.292-1.823.25.25 0 0 1 .035-.314l.86-.853a1.215 1.215 0 0 0 .13-1.58L7.04 2.716c-.283-.39-.77-.578-1.219-.397A6.6 6.6 0 0 0 3.67 3.738c-1.374 1.36-1.847 3.407-.991 5.134A29.8 29.8 0 0 0 5.72 13.78m5.77-1.27a24.7 24.7 0 0 0 4.172 3.308c.1.063.232.049.317-.035l.858-.85a1.245 1.245 0 0 1 1.599-.126l2.825 2.024c.451.323.627.906.37 1.395-.32.609-.834 1.441-1.537 2.137-1.279 1.268-3.174 1.781-4.828 1.054-2.761-1.216-5.276-2.984-7.46-5.224m3.684-3.683L21.75 2.25M11.49 12.51l-3.683 3.683m0 0L2.25 21.75"/>`,
      }, children);
    };
  },
});
