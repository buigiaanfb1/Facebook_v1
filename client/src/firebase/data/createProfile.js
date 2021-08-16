import { getDocument } from './getDocument';
import { setCollection } from './setCollection';
import { timestamp } from '../config';

export const createProfile = async (user) => {
  const { addDocWithID } = setCollection('users');
  try {
    // kiểm tra đã tạo profile chưa
    const res = await getDocument('users', user.uid);
    // chưa thì tạo
    if (!res) {
      const doc = {
        userID: user.uid,
        username: user.displayName,
        email: user.email,
        avatar:
          'https://firebasestorage.googleapis.com/v0/b/facebook-for-cv.appspot.com/o/default-picture%2Fdefault-avatar.png?alt=media&token=54546a7c-a8c1-4173-a674-ea677dedd81e',
        wallpaper:
          'https://firebasestorage.googleapis.com/v0/b/facebook-for-cv.appspot.com/o/default-picture%2Fdefault-wallpaper.jpeg?alt=media&token=a0dccaaa-64ad-4d7a-9487-42ea90736a7d',
        slogan: '',
        info: {
          createdAt: {
            label: 'Tham gia vào',
            time: timestamp(),
            display: true,
          },
          highSchool: {
            label: 'Học tại trường THPT',
            schools: [],
            display: false,
          },
          universitySchool: {
            label: 'Học tại Đại học',
            schools: [],
            display: false,
          },
          currentResidence: {
            label: 'Sống tại',
            currentResidence: '',
            display: false,
          },
          homeTown: {
            label: 'Đến từ',
            homeTown: '',
            display: false,
          },
          currentJobs: {
            label: 'Làm việc tại',
            currentJobs: [],
            display: false,
          },
        },
      };
      const friendsRequesting = {
        requested: [],
      };
      const friendsIncoming = {
        incoming: [],
      };
      const friends = {
        friends: [],
      };
      await addDocWithID('users', doc, user.uid);
      await addDocWithID('friendsRequested', friendsRequesting, user.uid);
      await addDocWithID('friendsIncoming', friendsIncoming, user.uid);
      await addDocWithID('friends', friends, user.uid);
      return doc;
    }
    return res;
  } catch (err) {
    console.log(err);
  }
};
