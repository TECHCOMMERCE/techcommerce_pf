import { Box, IconButton, TextField } from "@mui/material";
import { MdOutlineSearch } from "react-icons/md";
import React from "react";

const CategoriesSearchBar = () => {
  return (
    <Box sx={{ml: 20}}>
      <form style={{ display: "flex", alignItems: "center" }}>
        <TextField
          sx={{width: "400px"}}
          label="Search"
          variante="filled"
          placeholder="Cellphones"
          maxLength="255"
          autoFocus
          required
        ></TextField>
        <IconButton type="submit" sx={{fontSize: "3rem", ml: 10,}} >
          <MdOutlineSearch />
        </IconButton>
      </form>
    </Box>
  );
};

export default CategoriesSearchBar;
