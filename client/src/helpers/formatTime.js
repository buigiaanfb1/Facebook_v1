import { formatDistanceToNowStrict, format } from 'date-fns';
import { vi } from 'date-fns/locale';

export function formatTime(timeFormat) {
  if (timeFormat) {
    let date = timeFormat.toDate();
    date.toISOString().substring(0, 10);
    let time = formatDistanceToNowStrict(new Date(date), {
      locale: vi,
    });
    return time;
  } else return null;
}

export function formatTimeMessage(timeFormat) {
  let date = timeFormat.toDate();
  let result = format(new Date(date), "iiiii HH':'mm", {
    locale: vi,
  });
  return result;
}
