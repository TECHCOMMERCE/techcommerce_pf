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
  MdAssignment,
  MdLocalShipping
} from "react-icons/md";

const Dashboard = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        mt:"70px",
      }}
    >
      <Box
        sx={{
          background: "dodgerblue",
          p: 20,
          width: "100%",
          height: "fit-content",
          borderRadius: "5px",
        }}
      >
        <Typography sx={{ pl: 20, fontSize: "1.5rem" }} color="ghostwhite">
          Dashboard
        </Typography>

        <Box
          sx={{
            m: 20,
            p: 40,
            backgroundColor: "ghostwhite",
            fontSize: "20px",
            borderRadius: "5px",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              variant="contained"
              sx={{ width: "30%", height: "20vh", fontSize: "1rem" }}
              color="error"
              startIcon={<MdOutlineQrCode />}
              onClick={() =>
                (window.location.href = `/dashboard/products/`)
              }
            >
              Productos
            </Button>
            <Button
              variant="contained"
              sx={{ width: "30%", height: "20vh", fontSize: "1rem" }}
              color="success"
              startIcon={<MdLoyalty />}
              onClick={() => (window.location.href = "/dashboard/brands/")}
            >
              Marcas
            </Button>
            <Button
              variant="contained"
              color="warning"
              sx={{ width: "30%", height: "20vh", fontSize: "1rem" }}
              startIcon={<MdCategory />}
              onClick={() => (window.location.href = "/dashboard/categories/")}
            >
              Categorías
            </Button>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              color="info"
              variant="contained"
              sx={{
                mt: 40,
                width: "30%",
                height: "20vh",
                fontSize: "1rem",
              }}
              startIcon={<MdAssignment />}
              onClick={() => (window.location.href = "/dashboard/orders")}
            >
              Órdenes
            </Button>
            <Button
              color="primary"
              variant="contained"
              sx={{ mt: 40, width: "30%", height: "20vh", fontSize: "1rem" }}
              startIcon={<MdPeople />}
              onClick={() => (window.location.href = "/dashboard/users")}
            >
              Usuarios
            </Button>
            <Button
              variant="contained"
              color="secondary"
              sx={{ mt: 40, width: "30%", height: "20vh", fontSize: "1rem"}}
              startIcon={<MdLocalShipping />}
              onClick={() => (window.location.href = "/dashboard/deliveries")}
            >
              Envíos
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Dashboard;