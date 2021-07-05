import {
  FRIENDS_TAB,
  INTRODUCE_TAB,
  PICTURE_TAB,
  POST_TAB,
  TAB_PROFILE,
} from '../../common/constants';
import IntroductionTabProfile from '../../components/IntroductionTabProfile';
import FriendsTabProfile from '../../components/FriendsTabProfile';
import PostTabProfile from '../../components/PostTabProfile';
import PicturesTabProfile from '../../components/PicturesTabProfile';

export const arrTab = [
  {
    cons: POST_TAB,
    component: PostTabProfile,
    view: 'Bài viết',
  },
  // {
  //   cons: INTRODUCE_TAB,
  //   component: IntroductionTabProfile,
  //   view: 'Giới thiệu',
  // },
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
