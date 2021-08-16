import { vi } from 'date-fns/locale';
import format from 'date-fns/format';

export function formatThangMMNamYYYYY(dateFormat) {
  let date = dateFormat.toDate();
  let result = format(new Date(date), "'Tháng' MM 'năm' yyyy", {
    locale: vi,
  });
  return result;
}
