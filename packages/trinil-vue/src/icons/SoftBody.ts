import { defineComponent, h } from 'vue';

export const SoftBody = defineComponent({
  name: 'SoftBody',
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
        innerHTML: `<path d="M5.5 16.323c1.4.422 3.486.793 6.5.793s5.1-.371 6.5-.793M12 3.5V8m0 0-2-2m2 2 2-2M3.39 17.908c.863.555 3.295 1.708 8.61 1.708s7.747-1.153 8.61-1.708c.26-.167.368-.471.33-.778l-.765-6.112c-.085-.684-.85-1.142-1.523-.988-1.205.275-3.307.586-6.652.586s-5.447-.311-6.652-.586c-.673-.154-1.438.304-1.523.988L3.06 17.13c-.039.307.069.61.328.778Z"/>`,
      }, children);
    };
  },
});
