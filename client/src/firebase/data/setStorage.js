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
  return { uploadPictureOfPost };
};
