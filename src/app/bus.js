const handlers = new Map();

export function on(event, handler) {
  if (!handlers.has(event)) handlers.set(event, new Set());
  handlers.get(event).add(handler);
  return () => handlers.get(event).delete(handler);
}

export function emit(event, payload) {
  const set = handlers.get(event);
  if (!set) return;
  set.forEach((handler) => handler(payload));
}
