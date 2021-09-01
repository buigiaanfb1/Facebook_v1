import { FRIENDS_TAB, PICTURE_TAB, POST_TAB } from '../../common/constants';
import FriendsTabProfile from '../../components/FriendsTabProfile';
import ProfileDown from '../../components/ProfileDown';
import PicturesTabProfile from '../../components/PicturesTabProfile';

export const arrTab = [
  {
    cons: POST_TAB,
    component: ProfileDown,
    view: 'Bài viết',
  },
  {
    cons: FRIENDS_TAB,
    component: FriendsTabProfile,
    view: 'Bạn bè',
  },
  {
    cons: PICTURE_TAB,
    component: PicturesTabProfile,
    view: 'Ảnh',
  },
];
