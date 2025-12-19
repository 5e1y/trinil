import { defineComponent, h } from 'vue';

export const AppleLogo = defineComponent({
  name: 'AppleLogo',
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
          innerHTML: `<path d="M15.372 7.21q.262 0 .893.084.63.084 1.38.476.76.38 1.38 1.273a6 6 0 0 1-.346.261 4 4 0 0 0-.69.643 3.9 3.9 0 0 0-.666 1.07q-.285.642-.285 1.535 0 1.022.357 1.737.368.713.844 1.153.487.429.857.63.38.204.404.215-.012.048-.31.844-.285.798-.95 1.773a13 13 0 0 1-1.262 1.558q-.666.714-1.606.714-.63 0-1.035-.179-.405-.19-.832-.368-.428-.19-1.154-.19-.701 0-1.178.19-.463.19-.892.38-.416.19-.987.19-.87 0-1.523-.69a16 16 0 0 1-1.344-1.653q-.796-1.142-1.368-2.783a10.3 10.3 0 0 1-.559-3.33q0-1.798.678-3.01.678-1.226 1.737-1.844 1.07-.63 2.212-.63.607 0 1.142.202.535.19 1 .392.475.202.856.202.369 0 .856-.214.488-.214 1.095-.416a3.9 3.9 0 0 1 1.296-.214Zm-.654-1.51q-.465.56-1.166.94-.701.369-1.332.369-.13 0-.25-.024a1.619 1.619 0 0 1-.036-.333q0-.714.31-1.38a4.4 4.4 0 0 1 .702-1.118 4 4 0 0 1 1.26-.988q.762-.392 1.452-.416.036.155.036.369 0 .714-.274 1.392a4.7 4.7 0 0 1-.702 1.189Z"/>`,
        },
        children,
      );
    };
  },
});
