import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../../Store/actions/categories";
import { getBrands } from "../../Store/actions/brands";
import { postCloudinaryImage } from "../../Store/actions/images";
import { handleInputs } from "../../helpers/CreateProduct/handleInputs";
import { handleCategories } from "../../helpers/CreateProduct/handleCategories";
import { handleImage } from "../../helpers/CreateProduct/handleImage";
import Attributes from "./Attributes";
import { handleSubmit } from "../../helpers/CreateProduct/handleSubmit";
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

const CreateProduct = () => {
  const dispatch = useDispatch();
  const brands = useSelector((state) => state.brandsReducer);
  const categories = useSelector((state) => state.categoriesReducer);
  const cloudinaryUrl = useSelector((state) => state.productReducer.url);
  const [input, setInput] = useState({
    name: "",
    image: cloudinaryUrl.length ? cloudinaryUrl : "",
    price: "",
    stock: "",
    sold_quantity: "",
    condition: "",
    attributes: [],
    brand: "",
    categories: [],
    status: true,
  });

  useEffect(() => {
    cloudinaryUrl.length && setInput({ ...input, image: cloudinaryUrl });
  }, [cloudinaryUrl]);

  useEffect(() => {
    dispatch(getBrands());
    dispatch(getCategories());
  }, []);

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        m: 0,
        px: 20,
        my: 100,
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
          Create a Product
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
          onSubmit={async (e) =>
            await handleSubmit(
              e,
              input,
              setInput,
              dispatch
            )
          }
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
                value={input.name}
                onChange={(e) => handleInputs(e, input, setInput)}
                required
                autoFocus
                maxLength="255"
              />

              <TextField
                label="Price"
                variant="filled"
                name="price"
                id="price"
                type="number"
                placeholder="200"
                value={input.price}
                onChange={(e) => handleInputs(e, input, setInput)}
                min="0"
                max="1000000"
                required
              />

              <TextField
                label="Stock"
                variant="filled"
                name="stock"
                id="stock"
                placeholder="150"
                type="number"
                value={input.stock}
                onChange={(e) => handleInputs(e, input, setInput)}
                required
                min="0"
              />

              <TextField
                label="Sold Quantity"
                variant="filled"
                name="sold_quantity"
                id="sold"
                placeholder="15"
                type="number"
                value={input.sold_quantity}
                onChange={(e) => handleInputs(e, input, setInput)}
                required
                min="0"
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
                id="brand"
                onChange={(e) => handleInputs(e, input, setInput)}
              >
                <MenuItem sx={{ display: "none" }}></MenuItem>
                {brands?.length &&
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
                id="categories"
                onChange={(e) => handleInputs(e, input, setInput)}
                sx={{ width: "100%" }}
              >
                <MenuItem sx={{ display: "none" }}></MenuItem>
                {categories?.length &&
                  categories?.map((c) => (
                    <MenuItem key={c.categoryid} value={c.name}>
                      {c.name}
                    </MenuItem>
                  ))}
              </TextField>

              <List>
                {input.categories?.map((c, i) => (
                  <ListItem
                    sx={{ fontSize: ".8rem" }}
                    key={i}
                    name={c}
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
            </Box>

            {/* Contiene la imagen, carga de imagen y atributos */}
            <Box
              sx={{ width: "46%", minHeight: "fit-content", height: "500px" }}
            >
              {/* contiene la imagen y el botón para cargar una imagen */}
              <FormLabel htmlFor="image">Image *</FormLabel>
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
                  sx={{ mt: 10 }}
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
                    sx={{ fontSize: ".8rem", my: 10 }}
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
              id="submit"
              size="medium"
              type="submit"
              endIcon={<MdSave />}
              sx={{ mr: 40 }}
            >
              CREATE
            </Button>
            <Button
              variant="contained"
              size="medium"
              color="error"
              endIcon={<MdArrowBack />}
              onClick={() => (window.location.href = "/adminpanel/products/")}
            >
              BACK
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default CreateProduct;
