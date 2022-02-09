import { Box, IconButton, TextField, Typography } from "@mui/material";
import { MdOutlineSearch } from "react-icons/md";
import React, { useState } from "react";

const ProductsSearchBar = ({
  handleSearch,
  dispatch,
  getProductsForAdmin,
  setCurrentPage,
  setSearching,
}) => {
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    handleSearch(e, input);
  };

  return (
    <Box
      sx={{
        mx: 20,
        display: "flex",
        justifyContent: "space-between",
        width: "97%",
        alignItems: "center",
      }}
    >
      <Typography sx={{ fontSize: "1.5rem", fontWeight: "bold" }}>
        Productos
      </Typography>
      <form
        style={{ display: "flex", alignItems: "center" }}
        onSubmit={handleInput}
      >
        <TextField
          sx={{ width: "400px" }}
          label="Buscar"
          variante="filled"
          placeholder="Moto G00"
          inputProps={{ maxLength: "100" }}
          helperText="100 caracteres como máximo"
          autoFocus
          required
          onChange={(e) => {
            if (!e.target.value) {
              setSearching(false);
              setCurrentPage(0);
              dispatch(getProductsForAdmin(0));
            } else {
              setSearching(true);
              setInput(e.target.value);
            }
          }}
        ></TextField>
        <IconButton type="submit" sx={{ fontSize: "3rem", ml: 10 }}>
          <MdOutlineSearch />
        </IconButton>
      </form>
    </Box>
  );
};

export default ProductsSearchBar;
