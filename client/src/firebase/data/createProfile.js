import { getDocument } from './getDocument';
import { setCollection } from './setCollection';
import firebase from 'firebase/app';
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
          'https://firebasestorage.googleapis.com/v0/b/facebook-for-cv.appspot.com/o/default-picture%2Favatar.jpeg?alt=media&token=aea5710f-8f9a-436d-b0f2-62a53efe30b8',
        wallpaper:
          'https://firebasestorage.googleapis.com/v0/b/facebook-for-cv.appspot.com/o/default-picture%2FNo5Xby.jpeg?alt=media&token=14d84c1f-c587-4358-93bb-50b12eafec38',
        slogan: '',
        info: {
          createdAt: {
            label: 'Tham gia vào',
            time: firebase.firestore.Timestamp.now(),
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
