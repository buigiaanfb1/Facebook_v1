import Swal from 'sweetalert2';
import nyanCat from '../common/images/nyanCat.gif';

export function sweetAlert(
  text = 'Vui lòng đăng nhập để tiếp tục.',
  title = 'Lỗi!',
  icon = 'error'
) {
  Swal.fire({
    title: title,
    text: text,
    icon: icon,
    confirmButtonText: 'Ok',
    backdrop: `rgba(0,0,123,0.4) url(${nyanCat}) left top no-repeat`,
    customClass: {
      popup: 'sweet_popup_custom',
    },
  });
}
