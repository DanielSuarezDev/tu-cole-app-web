import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

export const useUpload = () => {
  const uploadPhoto = async (imageFile: File): Promise<string> => {
    const storageInstance = getStorage();
    const imageRef = ref(
      storageInstance,
      `profile/${imageFile?.name}`
    );
    await uploadBytes(imageRef, imageFile);
    const imageURL = await getDownloadURL(imageRef);
    return imageURL;
  };
  return {
    uploadPhoto,
  };
};
