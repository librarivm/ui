import debounce from 'lodash/debounce';
import { useEventBus } from '~/composables/utils/useEventBus.js';

export const useMainContentWindowScroll = () => {
  const element = useState('main.content.window.scroll.element', () => null);
  const isTopArrived = useState('main.content.window.scroll.isTopArrived', () => true);
  const isBottomArrived = useState('main.content.window.scroll.isBottomArrived', () => false);
  const isScrolling = useState('main.content.window.scroll.isScrolling', () => false);
  const isNotAtTop = computed(() => !isTopArrived.value);
  const isNotAtBottom = computed(() => !isBottomArrived.value);
  const $event = useEventBus();

  const stopScrollingState = debounce(() => {
    isScrolling.value = false;
  }, 200);

  const onScroll = (e) => {
    const el = e.target;

    element.value = el;

    const height = el.scrollHeight - el.scrollTop - el.clientHeight;
    isTopArrived.value = el.scrollTop === 0;
    isBottomArrived.value = height <= 0;

    isScrolling.value = true;
    stopScrollingState();

    $event.emit('scroll', {
      el,
      isScrolling: isScrolling.value,
      isTopArrived: isTopArrived.value,
      isBottomArrived: isBottomArrived.value,
    });
  };

  return {
    element,
    isTopArrived,
    isBottomArrived,
    isScrolling,
    isNotAtTop,
    isNotAtBottom,
    onScroll,
    ...$event,
  };
};
