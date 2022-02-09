import React from "react";
import { MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox, MdModeEdit, } from "react-icons/md";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

const ListedBrand = ({ brand, handleToggle }) => {
  return (
    <Box>
      <Box
        sx={{
          background: brand.status ? "#2eb8b0" : "lightblue",
          borderRadius: "5px",
          margin: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 20,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", height: 60 }}>
          <Box sx={{ mx: 20 }}>
            <Link to={`/dashboard/brands/edit/${brand.brandid}`} style={{color: "ghostwhite"}}>
              <h3>{brand.name}</h3>
            </Link>
          </Box>
        </Box>

        <Box sx={{ display: "flex" }}>
          <Link to={`/dashboard/brands/edit/${brand.brandid}`} style={{color: "#77817c",}}>
            <Box style={{ background: "ghostwhite", borderRadius: "5px", padding: 5 }}>
              <MdModeEdit color="primary" size="40" />
            </Box>
          </Link>

          <Link to="#">
            <Box
              sx={{
                background: "ghostwhite",
                borderRadius: "5px",
                padding: 5,
                marginLeft: 20,
              }}
            >
              {
                brand.status ?
                <MdOutlineCheckBox
                  name={brand.name}
                  color="#2eb8b0"
                  size="40"
                  onClick={() => handleToggle(brand)}
                />
                :
                <MdOutlineCheckBoxOutlineBlank
                  name={brand.name}
                  color="crimson"
                  size="40"
                  onClick={() => handleToggle(brand)}
                />
              }
            </Box>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default ListedBrand;