import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../../Store/actions/categories";
import { getBrands } from "../../Store/actions/brands";
import { postCloudinaryImage } from "../../Store/actions/images";
import { handleInputs } from "../../helpers/EditProduct/handleInputs";
import { handleCategories } from "../../helpers/EditProduct/handleCategories";
import Attributes from "./Attributes";
import { handleImage } from "../../helpers/EditProduct/handleImage";
import { handleSubmit } from "../../helpers/EditProduct/handleSubmit";
import { useParams } from "react-router-dom";
import {
  getProductById,
  resetProductDetail,
} from "../../Store/actions/product";
import {
  Container,
  Typography,
  Box,
  Button,
  FormLabel,
  TextField,
  MenuItem,
  List,
  ListItem,
  IconButton,
} from "@mui/material";
import {
  MdSave,
  MdArrowBack,
  MdOutlineRemoveCircle,
  MdAddCircle,
} from "react-icons/md";

const EditProduct = () => {
  const dispatch = useDispatch();
  const brands = useSelector((state) => state.brandsReducer.brands);
  const categories = useSelector((state) => state.categoriesReducer.categories);
  const cloudinaryUrl = useSelector((state) => state.productReducer.url);
  const productDetail = useSelector(
    (state) => state.productReducer.productDetail
  );
  const params = useParams();
  const [input, setInput] = useState({
    name: "",
    price: "",
    stock: "",
    sold_quantity: "",
    condition: "",
    image: "",
    attributes: [],
    brand: "",
    categories: [],
    status: true,
  });

  useEffect(() => {
    setInput({ ...input, image: cloudinaryUrl });
  }, [cloudinaryUrl]);

  useEffect(() => {
    setInput({
      productid: productDetail?.productid && productDetail.productid,
      name: productDetail?.name ? productDetail.name : "",
      price: productDetail?.price ? productDetail.price : "",
      stock: productDetail?.stock ? productDetail.stock : "",
      sold_quantity: productDetail?.sold_quantity
        ? productDetail.sold_quantity
        : "",
      condition: productDetail?.condition ? productDetail.condition : "",
      image: productDetail?.image ? productDetail.image : "",
      attributes: productDetail?.attributes ? productDetail.attributes : [],
      brand: productDetail?.brand ? productDetail.brand.brandid : "",
      categories: productDetail?.categories
        ? productDetail.categories.map((c) => c.name)
        : [],
      status: productDetail?.status,
    });
  }, [productDetail]);

  useEffect(() => {
    dispatch(getProductById(params.productid));
    dispatch(getCategories());
    dispatch(getBrands());
    return () => {
      dispatch(resetProductDetail());
    };
  }, [dispatch, params.productid]);

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        px: 20,
        minWidth: "100vw",
      }}
    >
      {/* Contiene todo el form y el título */}
      <Box
        sx={{
          m: 20,
          p: 40,
          pt: 20,
          width: "80%",
          backgroundColor: "dodgerblue",
          borderRadius: "5px",
          height: "fit-content",
        }}
      >
        <Typography
          sx={{ fontSize: "1.5rem", mb: 20 }}
          color="secondary"
          align="left"
        >
          Edit a Product
        </Typography>

        {/* formulario */}
        <form
          id="form"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "fit-content",
            backgroundColor: "ghostwhite",
            borderRadius: "5px",
          }}
          onSubmit={(e) => handleSubmit(e, input, setInput, dispatch)}
        >
          {/* Contiene todo el form */}
          <Box
            sx={{
              p: 40,
              mb: 20,
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              width: "100%",
            }}
          >
            {/* Todos los inputs del lado izquierdo*/}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                width: "50%",
                minHeight: "fit-content",
                height: "500px",
              }}
            >
              <TextField
                label="Name"
                variant="filled"
                name="name"
                placeholder="Motorola G200"
                id="name"
                type="text"
                value={input.name || (productDetail.name && productDetail.name)}
                defaultValue={productDetail.name && productDetail.name}
                onChange={(e) => handleInputs(e, input, setInput)}
                required
                autoFocus
                inputProps={{maxLength: 100,}}
                helperText=""
              />

              <TextField
                label="Price"
                variant="filled"
                name="price"
                id="price"
                type="number"
                placeholder="200"
                value={
                  input.price || (productDetail.price && productDetail.price)
                }
                helperText=""
                defaultValue={productDetail.price && productDetail.price}
                onChange={(e) => handleInputs(e, input, setInput)}
                sx={{ textAlign: "right" }}
                required
              />

              <TextField
                label="Stock"
                variant="filled"
                name="stock"
                id="stock"
                placeholder="150"
                type="number"
                value={
                  input.stock || (productDetail.stock && productDetail.stock)
                }
                helperText=""
                defaultValue={productDetail.stock && productDetail.stock}
                onChange={(e) => handleInputs(e, input, setInput)}
                required
              />

              <TextField
                label="Sold Quantity"
                variant="filled"
                name="sold_quantity"
                id="sold"
                placeholder="15"
                type="number"
                value={
                  input.sold_quantity ||
                  (productDetail.sold_quantity && productDetail.sold_quantity)
                }
                defaultValue={
                  productDetail.sold_quantity && productDetail.sold_quantity
                }
                onChange={(e) => handleInputs(e, input, setInput)}
                required
                helperText=""
              />

              <TextField
                label="Condition"
                variant="filled"
                select
                required
                name="condition"
                id="condition"
                value={input.condition}
                onChange={(e) => handleInputs(e, input, setInput)}
                helperText=""
              >
                <MenuItem sx={{ display: "none" }}></MenuItem>
                <MenuItem value="new">New</MenuItem>
                <MenuItem value="used">Used</MenuItem>
              </TextField>

              <TextField
                select
                required
                label="Brand"
                variant="filled"
                name="brand"
                value={input.brand}
                id="brand"
                onChange={(e) => handleInputs(e, input, setInput)}
                helperText=""
              >
                <MenuItem sx={{ display: "none" }}></MenuItem>
                {brands[0] &&
                  brands?.map((b) => (
                    <MenuItem key={b.brandid} value={b.brandid}>
                      {b.name}
                    </MenuItem>
                  ))}
              </TextField>

              <TextField
                label="Categories"
                variant="filled"
                select
                required
                name="categories"
                value={input.categories}
                defaultValue={
                  productDetail.categories && productDetail.categories
                }
                id="categories"
                onChange={(e) => handleInputs(e, input, setInput)}
                sx={{ width: "100%" }}
                helperText=""
              >
                <MenuItem sx={{ display: "none" }}></MenuItem>
                {categories[0] &&
                  categories?.map((c) => (
                    <MenuItem key={c.categoryid} value={c.name}>
                      {c.name}
                    </MenuItem>
                  ))}
              </TextField>

              {input.categories[0] && (
                <List
                  sx={{
                    maxHeight: "80px",
                    overflowY: "scroll",
                    backgroundColor: "#E2E2E8",
                    borderTopLeftRadius: "5px",
                  }}
                >
                  {input.categories?.map((c, i) => (
                    <ListItem
                      sx={{ fontSize: ".8rem" }}
                      key={i}
                      name={c.name}
                      secondaryAction={
                        <IconButton
                          name={c}
                          onClick={(e) => handleCategories(e, input, setInput)}
                        >
                          <MdOutlineRemoveCircle style={{ color: "crimson" }} />
                        </IconButton>
                      }
                    >
                      {c}
                    </ListItem>
                  ))}
                </List>
              )}
            </Box>

            {/* Contiene la imagen, carga de imagen y atributos */}
            <Box
              sx={{ width: "46%", minHeight: "fit-content", height: "500px" }}
            >
              {/* contiene la imagen y el botón para cargar una imagen */}
              <FormLabel htmlFor="image">Image</FormLabel>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <img
                  style={{ borderRadius: "5px" }}
                  id="image-selected"
                  src={
                    input.image ||
                    "https://www.appclonescript.com/wp-content/uploads/2020/08/gadget.jpg"
                  }
                  alt="image-product"
                  height="115"
                />
                <Button
                  endIcon={<MdAddCircle />}
                  variant="contained"
                  component="label"
                  color="success"
                  sx={{ my: 10 }}
                >
                  <input
                    type="file"
                    id="image"
                    name="image"
                    accept=".jpg, .jpeg, .png"
                    onChange={(e) =>
                      handleImage(
                        e,
                        dispatch,
                        postCloudinaryImage,
                        input,
                        setInput
                      )
                    }
                    hidden
                  />
                  Load an Image
                </Button>
              </Box>

              {/* Carga la Imagen */}
              <Box>
                {input?.size && (
                  <Typography
                    color={input?.size >= 1 ? "crimson" : "success"}
                    sx={{ fontSize: ".8rem", mb: 10 }}
                  >{`Picture size: ${input.size} MB`}</Typography>
                )}
              </Box>

              {/* Componente de Atributos */}
              <Attributes input={input} setInput={setInput} />
            </Box>
          </Box>
          {/* Contiene todo el formulario */}
          {/* Botones */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              mb: 40,
              px: 40,
              width: "100%",
            }}
          >
            <Button
              variant="contained"
              size="medium"
              id="submit"
              type="submit"
              endIcon={<MdSave />}
              sx={{ mr: 40 }}
            >
              SAVE
            </Button>
            <Button
              variant="contained"
              size="medium"
              color="error"
              endIcon={<MdArrowBack />}
              onClick={() =>
                (window.location.href = "/dashboard/products?admin=1")
              }
            >
              BACK
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default EditProduct;
