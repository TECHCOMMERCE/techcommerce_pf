import { Box, IconButton, TextField, Typography } from "@mui/material";
import { MdOutlineSearch } from "react-icons/md";
import React from "react";

const ProductsSearchBar = () => {
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
        Products
      </Typography>
      <form style={{ display: "flex", alignItems: "center" }}>
        <TextField
          sx={{ width: "400px" }}
          label="Search"
          variante="filled"
          placeholder="Cellphones"
          maxLength="255"
          autoFocus
          required
        ></TextField>
        <IconButton type="submit" sx={{ fontSize: "3rem", ml: 10 }}>
          <MdOutlineSearch />
        </IconButton>
      </form>
    </Box>
  );
};

export default ProductsSearchBar;
