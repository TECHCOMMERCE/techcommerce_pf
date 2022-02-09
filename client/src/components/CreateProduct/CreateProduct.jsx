import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../../Store/actions/categories";
import { getBrands } from "../../Store/actions/brands";
import { postCloudinaryImage } from "../../Store/actions/images";
import { handleInputs } from "../../helpers/CreateProduct/handleInputs";
import { handleCategories } from "../../helpers/CreateProduct/handleCategories";
import { handleImage } from "../../helpers/CreateProduct/handleImage";
import Attributes from "./Attributes";
import { postProduct } from "../../Store/actions/product";
// import { handleSubmit } from "../../helpers/CreateProduct/handleSubmit";
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
import { swalMessages } from "../../helpers/Swal/swal";
import { formValidator } from "../../helpers/validateForm";

const CreateProduct = () => {
  const dispatch = useDispatch();
  const brands = useSelector((state) => state.brandsReducer.brands);
  const categories = useSelector((state) => state.categoriesReducer.categories);
  const response = useSelector((state) => state.productReducer.status);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.brand.length && input.categories.length && !!input.image) {
      dispatch(postProduct(input));
    } else {
      swalMessages("Todos los campos son requeridos", null, "error");
    }
  };

  useEffect(() => {
    if (response) {
      if (response && response === "Product created") {
        swalMessages(response, "Created", "success").then(() => {
          window.location.href = "/dashboard/products/create";
        });
      } else if (response && response === "This product already exist") {
        swalMessages(response, null, "error").then(() => {
          window.location.href = "/dashboard/products/create";
        });
      }
    }
  }, [dispatch, response]);

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
        px: 20,
        minWidth: "100vw",
        mt: "135px"
      }}
    >
      {/* Contiene todo el form y el título */}
      <Box
        sx={{
          m: 20,
          p: 40,
          pt: 20,
          width: "80%",
          backgroundColor: "#2eb8b0",
          borderRadius: "5px",
          height: "fit-content",
        }}
      >
        <Typography
          sx={{ fontSize: "1.5rem", mb: 20 }}
          color="ghostwhite"
          align="left"
        >
          Crear un Producto
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
          onSubmit={async (e) => await handleSubmit(e)}
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
              height: "fit-content",
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
                height: "fit-content",
              }}
            >
              <TextField
                label="Nombre"
                variant="filled"
                name="name"
                placeholder="Motorola G200"
                id="name"
                multiline
                type="text"
                value={input.name}
                onChange={(e) => handleInputs(e, input, setInput)}
                required
                autoFocus
                inputProps={{ maxLength: 100 }}
                helperText="100 caracteres como máximo"
              />

              <TextField
                onInput={(e) => formValidator(e)}
                label="Precio"
                variant="filled"
                name="price"
                id="price"
                type="number"
                placeholder="777,50"
                value={input.price}
                onChange={(e) => handleInputs(e, input, setInput)}
                required
                helperText="10 digitos como máximo"
              />

              <TextField
                onInput={(e) => {
                  e.target.value = Math.max(0, parseInt(e.target.value))
                    .toString()
                    .slice(0, 6);
                }}
                label="Stock"
                variant="filled"
                name="stock"
                id="stock"
                placeholder="150"
                type="number"
                value={input.stock}
                onChange={(e) => handleInputs(e, input, setInput)}
                required
                helperText="6 digitos como máximo"
              />

              <TextField
                onInput={(e) => {
                  e.target.value = Math.max(0, parseInt(e.target.value))
                    .toString()
                    .slice(0, 6);
                }}
                label="Cantidad Vendida"
                variant="filled"
                name="sold_quantity"
                id="sold"
                placeholder="15"
                type="number"
                value={input.sold_quantity}
                onChange={(e) => handleInputs(e, input, setInput)}
                required
                helperText="6 digitos como máximo"
              />

              <TextField
                label="Condición"
                variant="filled"
                select
                required
                name="condition"
                id="condition"
                value={input.condition}
                onChange={(e) => handleInputs(e, input, setInput)}
                helperText="Elija una condición"
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
                helperText="Elija una marca"
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
                label="Categorías"
                variant="filled"
                select
                required
                name="categories"
                id="categories"
                onChange={(e) => handleInputs(e, input, setInput)}
                sx={{ width: "100%" }}
                helperText="Elija una o varias categorías"
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
              )}
            </Box>

            {/* Contiene la imagen, carga de imagen y atributos */}
            <Box
              sx={{ width: "46%", minHeight: "fit-content", height: "500px" }}
            >
              {/* contiene la imagen y el botón para cargar una imagen */}
              <FormLabel htmlFor="image">Imagen *</FormLabel>
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
                  color="primary"
                  sx={{ mt: 10, color: "ghostwhite", }}
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
                  Suba una imagen
                </Button>
              </Box>

              {/* Carga la Imagen */}
              <Box>
                {input?.size && (
                  <Typography
                    color={input?.size >= 1 ? "crimson" : "success"}
                    sx={{ fontSize: ".8rem", my: 10 }}
                  >{`Tamaño de la imagen: ${input.size} MB`}</Typography>
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
              sx={{ mr: 40, color: "ghostwhite", }}
            >
              CREAR
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
              Volver
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default CreateProduct;
