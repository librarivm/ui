const $events = new Map();

/**
 * useEventBus is a utility function that processes event handling
 * logic. It checks if the specified event exists in the $events
 * collection and performs operations based on its presence.
 *
 * @function
 * @param {string} event - The name of the event to be checked
 *                         within the $events collection.
 */
export const useEventBus = (event) => {
  if (!$events.has(event)) {
    $events.set(event, ref([]));
  }

  const $listeners = $events.get(event).value;

  return {
    /**
     * Registers a callback for the given event type.
     * @param {string} event - Event name to listen for.
     * @param {Function} callback - Callback function to invoke when the event is emitted.
     */
    on(event, callback) {
      $listeners.push({ event, callback });
    },

    /**
     * Emits an event with optional payload.
     * @param {string} event - Event name to emit.
     * @param {...any} args - Arguments to pass to the event listeners.
     */
    emit(event, ...args) {
      $listeners.forEach(({ event: registeredEvent, callback }) => {
        if (registeredEvent === event) {
          callback(...args);
        }
      });
    },

    /**
     * Removes a specific callback or all callbacks for an event.
     * @param {string} event - Event name to stop listening for.
     * @param {Function} [callback] - Specific callback to remove. If not provided, removes all callbacks for the event.
     */
    off(event, callback) {
      $events.set(
        event,
        ref(
          callback
            ? $listeners.filter(
                ({ event: registeredEvent, callback: registeredCallback }) =>
                  registeredEvent !== event || registeredCallback !== callback
              )
            : $listeners.filter(({ event: registeredEvent }) => registeredEvent !== event)
        )
      );
    },
  };
};
