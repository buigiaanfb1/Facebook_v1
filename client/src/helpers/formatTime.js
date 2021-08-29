import { formatDistanceToNowStrict, format } from 'date-fns';
import { vi } from 'date-fns/locale';

export function formatTime(timeFormat) {
  console.log(timeFormat);
  let date = timeFormat.toDate();
  date.toISOString().substring(0, 10);
  let time = formatDistanceToNowStrict(new Date(date), {
    locale: vi,
  });
  return time;
}

export function formatTimeMessage(timeFormat) {
  let date = timeFormat.toDate();
  let result = format(new Date(date), "iiiii HH':'mm", {
    locale: vi,
  });
  return result;
}
