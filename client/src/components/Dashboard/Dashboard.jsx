import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {
  MdOutlineQrCode,
  MdLoyalty,
  MdCategory,
  MdPeople,
} from "react-icons/md";

const Dashboard = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "secondary",
        mt: 140,
      }}
    >
      <Box
        sx={{
          background: "dodgerblue",
          p: 20,
          width: "100%",
          height: "80%",
          borderRadius: "5px",
        }}
      >
        <Typography sx={{ pl: 20, fontSize: "1.5rem" }} color="secondary">
          Dashboard
        </Typography>

        <Box
          sx={{
            m: 20,
            p: 40,
            backgroundColor: "azure",
            fontSize: "20px",
            borderRadius: "5px",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              variant="contained"
              sx={{ width: "30%", height: "25vh", fontSize: "1.5rem" }}
              color="error"
              startIcon={<MdOutlineQrCode />}
              onClick={() =>
                (window.location.href = `/dashboard/products?admin=1`)
              }
            >
              Products
            </Button>
            <Button
              variant="contained"
              sx={{ width: "66%", height: "25vh", fontSize: "1.5rem" }}
              color="success"
              startIcon={<MdLoyalty />}
              onClick={() => (window.location.href = "/dashboard/brands")}
            >
              Brands
            </Button>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              variant="contained"
              color="warning"
              sx={{ mt: 40, width: "30%", height: "30vh", fontSize: "1.5rem" }}
              startIcon={<MdCategory />}
              onClick={() => (window.location.href = "/dashboard/categories")}
            >
              Categories
            </Button>
            <Button
              color="info"
              variant="contained"
              sx={{
                mt: 40,
                width: "31%",
                height: "30vh",
                fontSize: "1.5rem",
              }}
              startIcon={<MdCategory />}
              onClick={() => (window.location.href = "/dashboard/orders")}
            >
              Orders
            </Button>
            <Button
              color="primary"
              variant="contained"
              sx={{ mt: 40, width: "31%", height: "30vh", fontSize: "1.5rem" }}
              startIcon={<MdPeople />}
              onClick={() => (window.location.href = "/dashboard/users")}
            >
              Users
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Dashboard;
