export const handleImage = async (e, dispatch, postCloudinaryImage, input, setInput) => {
  const img = document.querySelector("#image-selected");
  img.src = URL.createObjectURL(e.target.files[0]);
  const size = parseFloat((e.target.files[0].size / 1000000).toString().slice(0, 4));

  if ( size > 1 ) {
    setInput({...input, size });
    document.getElementById("submit").disabled = true;
  } else {
    setInput({...input, size });
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    formData.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET);
    await dispatch(postCloudinaryImage(formData));
    document.getElementById("submit").disabled = false;
  }
};
