import { projectAuth } from '../../firebase/config';

let res = projectAuth.currentUser;
projectAuth.onAuthStateChanged((_user) => {
  res = _user;
  return res;
});

export const getUser = () => {
  return { res };
};
