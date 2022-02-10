import React, { useEffect, useState } from "react";
import { Container, Box, Typography, TextField, Button } from "@mui/material";
import { MdSave, MdArrowBack } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { postCategory } from "../../Store/actions/category";
import { swalMessages } from "../../helpers/Swal/swal";

const CreateCategory = () => {
  const response = useSelector(
    (state) => state.categoryReducer.categoryResponse
  );
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    name: "",
    status: true,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (document.getElementById("name").value) {
      dispatch(postCategory(input));
    }
  };

  useEffect(() => {
    if (response && response === "Category created") {
      swalMessages("Categoría creada exitosamente", "Creada", "success").then(
        () => {
          window.location.href = "/dashboard/categories/create";
        }
      );
    } else if (response && response === "This category already exist") {
      swalMessages("Esta categoría ya existe", null, "error").then(() => {
        window.location.href = "/dashboard/categories/create";
      });
    }
  }, [response]);

  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        mt: "135px",
      }}
    >
      {/* Contiene todo el form y el título */}
      <Box
        sx={{
          m: 20,
          p: 40,
          pt: 20,
          width: "500px",
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
          Crear una Categoría
        </Typography>

        {/* formulario */}
        <form
          id="form"
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            height: "fit-content",
            backgroundColor: "ghostwhite",
            borderRadius: "5px",
            padding: "40px",
          }}
          onSubmit={handleSubmit}
        >
          <TextField
            autoFocus
            label="Nombre"
            inputProps={{ maxLength: 100 }}
            required
            id="name"
            name="name"
            variant="filled"
            color="primary"
            value={input.name}
            onChange={handleInput}
            placeholder="Monitors"
            sx={{ width: "100%", mb: 30 }}
            helperText="100 caracteres como máximo"
          />

          {/* Botones */}
          <Box
            width="100%"
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Button
              type="submit"
              variant="contained"
              color="primary"
              endIcon={<MdSave />}
              size="medium"
              sx={{ color: "ghostwhite" }}
            >
              Crear
            </Button>
            <Button
              color="error"
              variant="contained"
              endIcon={<MdArrowBack />}
              size="medium"
              onClick={() => (window.location.href = "/dashboard/categories")}
            >
              Volver
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default CreateCategory;
