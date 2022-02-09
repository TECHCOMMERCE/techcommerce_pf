import React, { useEffect, useState } from "react";
import { Container, Box, Typography, TextField, Button } from "@mui/material";
import { MdSave, MdArrowBack } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  getBrandById,
  putBrand,
  resetBrandDetail,
} from "../../Store/actions/brand";
import { useParams } from "react-router-dom";
import { swalMessages } from "../../helpers/Swal/swal";

const EditBrand = () => {
  const brandDetail = useSelector((state) => state.brandReducer.brandDetail);
  const dispatch = useDispatch();
  const params = useParams();
  const [input, setInput] = useState({
    brandid: "",
    name: "",
    status: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (document.getElementById("name").value) {
      dispatch(putBrand(input));
      swalMessages("Marca editada exitosamente", "Editada", "success").then(
        () => {
          window.location.href = `/dashboard/brands/edit/${params.brandid}`;
        }
      );
    }
  };

  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setInput({
      ...input,
      brandid: params?.brandid ? brandDetail.brandid : "",
      name: brandDetail?.name ? brandDetail.name : "",
      status: brandDetail?.status,
    });
  }, [brandDetail]);

  useEffect(() => {
    dispatch(getBrandById(params.brandid));
    return () => {
      dispatch(resetBrandDetail());
    };
  }, [dispatch, params.brandid]);

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
          Editar una Marca
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
            id="name"
            name="name"
            variant="filled"
            color="primary"
            value={input.name || (brandDetail?.name && brandDetail.name)}
            onChange={handleInput}
            placeholder="Asus"
            inputProps={{ maxLength: 50 }}
            InputLabelProps={{ shrink: true }}
            helperText="50 caracteres como máximo"
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
              Guardar
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

export default EditBrand;
