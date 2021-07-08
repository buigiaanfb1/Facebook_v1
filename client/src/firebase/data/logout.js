import { projectAuth } from '../config';

let error = null;

const logout = async () => {
  try {
    await projectAuth.signOut();
  } catch (err) {
    console.log(err.message);
    error = 'Có lỗi xảy ra, vui lòng thử lại';
  }
};

export const useLogout = () => {
  return { logout, error };
};
