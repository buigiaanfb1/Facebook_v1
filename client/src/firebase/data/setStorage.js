import { projectStorage } from '../config';

export const setStorage = () => {
  let error = null;
  let filePath = null;

  const uploadPictureOfPost = async (userID, pictureBase64, uuid) => {
    filePath = `picture-public-post/${userID}/${uuid}`;
    const storageRef = projectStorage.ref(filePath);
    try {
      const res = await storageRef.putString(pictureBase64, 'data_url', {
        contentType: 'image/jpg',
      });
      let url = await res.ref.getDownloadURL();
      return { url };
    } catch (err) {
      console.log(err);
    }
  };

  const uploadWallpaper = async (userID, file) => {
    filePath = `users/${userID}/wallpaper/${file.name}`;
    const storageRef = projectStorage.ref(filePath);
    try {
      const res = await storageRef.put(file);
      let url = await res.ref.getDownloadURL();
      return { url };
    } catch (err) {
      console.log(err.message);
    }
  };

  const uploadAvatar = async (userID, file) => {
    filePath = `users/${userID}/avatar/${file.name}`;
    const storageRef = projectStorage.ref(filePath);
    try {
      const res = await storageRef.put(file);
      let url = await res.ref.getDownloadURL();
      return { url };
    } catch (err) {
      console.log(err.message);
    }
  };
  return { uploadPictureOfPost, uploadWallpaper, uploadAvatar };
};
