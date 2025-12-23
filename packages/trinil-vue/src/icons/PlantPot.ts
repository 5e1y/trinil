import { defineComponent, h } from 'vue';

export const PlantPot = defineComponent({
  name: 'PlantPot',
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
        innerHTML: `<path d="M12 9s-1.5 1-3 .5c-1.329-.443-2.266-2.456-2.462-2.91a.093.093 0 0 1 .055-.125c.421-.151 2.173-.719 3.487-.186M12 9s0-1.5-1.5-2.5a2.3 2.3 0 0 0-.42-.22M12 9s1.5 1 3 .5c1.329-.442 2.265-2.455 2.462-2.908a.093.093 0 0 0-.055-.126c-.421-.151-2.173-.719-3.487-.186M12 9s0-1.5 1.5-2.5q.2-.131.42-.22M12 9v3m1.92-5.72c-.326-1.513-1.547-2.884-1.85-3.207a.094.094 0 0 0-.14 0c-.303.323-1.524 1.694-1.85 3.207M12 12h3.4a.1.1 0 0 1 .1.1v.377a.1.1 0 0 1-.01.045l-.25.5a1 1 0 0 0 .025.943l.332.58c1.313 1.83.96 4.574-.32 6.148a.88.88 0 0 1-.691.308H9.414a.88.88 0 0 1-.691-.308c-1.28-1.574-1.633-4.318-.32-6.148l.331-.58a1 1 0 0 0 .027-.943l-.25-.5a.1.1 0 0 1-.011-.045V12.1a.1.1 0 0 1 .1-.1z"/>`,
      }, children);
    };
  },
});
