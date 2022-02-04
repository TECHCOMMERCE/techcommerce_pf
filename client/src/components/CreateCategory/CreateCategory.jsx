import React, { useEffect, useState } from "react";
import { Container, Box, Typography, TextField, Button } from "@mui/material";
import { MdSave, MdArrowBack } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { postCategory } from "../../Store/actions/category";

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
    if (response) {
      alert(response);
      window.location.href = "/dashboard/categories/create";
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
      }}
    >
      {/* Contiene todo el form y el título */}
      <Box
        sx={{
          m: 20,
          p: 40,
          pt: 20,
          width: "400px",
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
          Create a Category
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
            label="name"
            required
            id="name"
            name="name"
            variant="filled"
            color="primary"
            value={input.name}
            onChange={handleInput}
            placeholder="Monitors"
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
            >
              Create
            </Button>
            <Button
              color="error"
              variant="contained"
              endIcon={<MdArrowBack />}
              size="medium"
              onClick={() => (window.location.href = "/dashboard/categories")}
            >
              Back
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default CreateCategory;
