const events = [];

export function trackHighlight(name, fields) {
  const payload = Object.assign({ event: name, timestamp: new Date().toISOString() }, fields || {});
  events.push(payload);
  if (events.length > 100) events.shift();
  console.log('[highlight]', payload);
}

export function getHighlightEvents() {
  return events.slice();
}
