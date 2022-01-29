export const uploadImage = async (
  input,
  setInput,
  dispatch,
  postCloudinaryImage
) => {

  console.log("ejecutándome");
  // const setter = async (img) => {
  //   await setInput({ ...input, image: img });
  //   console.log(img);
  // };

  console.log(input);

  if (parseFloat((input.file?.size / 1000000).toString().slice(0, 4)) > 1) {
    alert("The picture size has exceeded 1 MB");
    return false;
  } else {
    const formData = new FormData();
    formData.append("file", input.file);
    formData.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET);
    await dispatch(postCloudinaryImage(formData));
    return true;
  }
};
