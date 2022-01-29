import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { MdOutlineQrCode, MdLoyalty, MdCategory } from "react-icons/md";

const AdminPanel = () => {
  return (
    <Container
      sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "secondary"}}
    >
      <Box sx={{background: "dodgerblue", p: 20, width: "100%", height: "80%", borderRadius: "5px" }}>
        <Typography sx={{ pl: 20, fontSize: "1.5rem" }} color="secondary">
          Administration Panel
        </Typography>

        <Box sx={{ m: 20, p: 40, backgroundColor: "azure", fontSize: "20px" , borderRadius: "5px"}}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              variant="contained"
              sx={{ width: "48%", height: "25vh", fontSize: "1.5rem" }}
              color="error"
              startIcon={<MdOutlineQrCode />}
              onClick={() => window.location.href = "/adminpanel/products"}
            >
              Products
            </Button>
            <Button
              variant="contained"
              sx={{ width: "48%", height: "25vh", fontSize: "1.5rem" }}
              color="success"
              startIcon={<MdLoyalty />}
              onClick={() => window.location.href = "/adminpanel/brands"}
            >
              Brands
            </Button>
          </Box>
          <Button
            variant="contained"
            color="warning"
            sx={{ mt: 40, width: "100%", height: "30vh", fontSize: "1.5rem" }}
            startIcon={<MdCategory />}
            onClick={() => window.location.href = "/adminpanel/categories"}
          >
            Categories
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default AdminPanel;
