export const handleSubmit = async (e, input, setInput, dispatch, postProduct, uploadImage, postCloudinaryImage) => {
  if (input.brand.length && input.categories.length) {
    e.preventDefault();
    
    // retorna true, si la imagen pesa igual o menos de 1 MB
    const resp = await uploadImage(
      input,
      setInput,
      dispatch,
      postCloudinaryImage
    )

    // console.log(input.image);
    if(resp){
      // console.log(resp);
      console.log(input);
      dispatch(postProduct(input));
      // alert("Product created succesfully");
      // window.location.href = "/adminpanel/products/create";
    }
  } else {
    e.preventDefault();
    alert("Please select the brand and categories");
  }
};