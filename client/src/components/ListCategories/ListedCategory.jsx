import React from "react";
import { MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox, MdModeEdit, } from "react-icons/md";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

const ListedCategory = ({ category, handleToggle }) => {
  return (
    <Box>
      <Box
        sx={{
          background: category.status ? "#2eb8b0" : "lightblue",
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
            <Link to={`/dashboard/categories/edit/${category.categoryid}`} style={{color: "ghostwhite"}}>
              <h3>{category.name}</h3>
            </Link>
          </Box>
        </Box>

        <Box sx={{ display: "flex" }}>
          <Link to={`/dashboard/categories/edit/${category.categoryid}`} style={{color: "#77817c",}}>
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
                category.status ?
                <MdOutlineCheckBox
                  name={category.name}
                  color="#2eb8b0"
                  size="40"
                  onClick={() => handleToggle(category)}
                />
                :
                <MdOutlineCheckBoxOutlineBlank
                  name={category.name}
                  color="crimson"
                  size="40"
                  onClick={() => handleToggle(category)}
                />
              }
            </Box>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default ListedCategory;