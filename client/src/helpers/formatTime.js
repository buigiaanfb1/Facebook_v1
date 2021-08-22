import { formatDistanceToNowStrict } from 'date-fns';
import { vi } from 'date-fns/locale';

export function formatTime(timeFormat) {
  let date = timeFormat.toDate();
  date.toISOString().substring(0, 10);
  let time = formatDistanceToNowStrict(date, {
    locale: vi,
  });
  return time;
}
