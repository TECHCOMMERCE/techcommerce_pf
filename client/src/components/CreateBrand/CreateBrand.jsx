import React, { useEffect, useState } from "react";
import { Container, Box, Typography, TextField, Button } from "@mui/material";
import { MdSave, MdArrowBack } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { postBrand } from "../../Store/actions/brand";
import { swalMessages } from "../../helpers/Swal/swal";

const CreateBrand = () => {
  const response = useSelector((state) => state.brandReducer.brandResponse);
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    name: "",
    status: true,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (document.getElementById("name").value) {
      dispatch(postBrand(input));
    }
  };

  useEffect(() => {
    if (response && response === "Brand created") {
      swalMessages("Marca creada exitosamente", "Creada", "success").then(
        () => {
          window.location.href = "/dashboard/brands/create";
        }
      );
    } else if (response && response === "This brand already exist") {
      swalMessages("Esta marca ya existe", null, "error").then(() => {
        window.location.href = "/dashboard/brands/create";
      });
    }
  }, [dispatch, response]);

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
          Crear una Marca
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
            required
            multiline
            id="name"
            name="name"
            variant="filled"
            color="primary"
            value={input.name}
            onChange={handleInput}
            inputProps={{ maxLength: 100 }}
            helperText="100 caracteres como máximo"
            placeholder="Logitech"
            sx={{ width: "100%", mb: 30 }}
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
              onClick={() => (window.location.href = "/dashboard/brands")}
            >
              Volver
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default CreateBrand;
