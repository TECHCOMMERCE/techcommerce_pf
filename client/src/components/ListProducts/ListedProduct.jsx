import React from "react";
import { MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox, MdModeEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

const ListedProduct = ({ product, handleToggle }) => {
  return (
    <Box>
      <Box
        sx={{
          background: product.status ? "#2eb8b0" : "lightblue",
          borderRadius: "5px",
          margin: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 20,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", height: 60 }}>
          <Box style={{ width: "fit-content", }}>
            <Link to={`/dashboard/products/edit/${product.productid}`}>
              <img style={{borderRadius: "5px"}} src={product.image} height="60" alt={product.name} />
            </Link>
          </Box>

          <Box sx={{ mx: 20 }}>
            <Link to={`/dashboard/products/edit/${product.productid}`} style={{color: "ghostwhite"}}>
              <h3>{product.name}</h3>
            </Link>
          </Box>
        </Box>

        <Box sx={{ display: "flex" }}>
          <Link to={`/dashboard/products/edit/${product.productid}`} style={{color: "#77817c",}}>
            <Box style={{ background: "ghostwhite", borderRadius: "5px", padding: 5 }}>
              <MdModeEdit size="40" />
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
                product.status ?
                <MdOutlineCheckBox
                  name={product.name}
                  color="#2eb8b0"
                  size="40"
                  onClick={() => handleToggle(product)}
                />
                :
                <MdOutlineCheckBoxOutlineBlank
                  name={product.name}
                  color="crimson"
                  size="40"
                  onClick={() => handleToggle(product)}
                />
              }
            </Box>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default ListedProduct;