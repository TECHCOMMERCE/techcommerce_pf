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
  MdLocalShipping,
  MdOutgoingMail
} from "react-icons/md";

const Dashboard = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
        mt:"70px",
      }}
    >
      <Box
        sx={{
          background: "#2eb8b0",
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
              sx={{ width: "30%", height: "20vh", fontSize: "1rem", color: "ghostwhite", }}
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
              sx={{ width: "30%", height: "20vh", fontSize: "1rem", color: "ghostwhite", }}
              color="success"
              startIcon={<MdLoyalty />}
              onClick={() => (window.location.href = "/dashboard/brands/")}
            >
              Marcas
            </Button>
            <Button
              variant="contained"
              color="warning"
              sx={{ width: "30%", height: "20vh", fontSize: "1rem", color: "ghostwhite", }}
              startIcon={<MdCategory />}
              onClick={() => (window.location.href = "/dashboard/categories/")}
            >
              Categorías
            </Button>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between", color: "ghostwhite", }}>
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
              sx={{ mt: 40, width: "30%", height: "20vh", fontSize: "1rem", color: "ghostwhite", }}
              startIcon={<MdPeople />}
              onClick={() => (window.location.href = "/dashboard/users")}
            >
              Usuarios
            </Button>
            <Button
              variant="contained"
              color="secondary"
              sx={{ mt: 40, width: "30%", height: "20vh", fontSize: "1rem", color: "ghostwhite",}}
              startIcon={<MdLocalShipping />}
              onClick={() => (window.location.href = "/dashboard/deliveries")}
            >
              Envíos
            </Button>
          </Box>
          <Box>
          <Button
              variant="contained"
              color="pop"
              sx={{ mt: 40, width: "100%", height: "20vh", fontSize: "1rem", color: "ghostwhite",}}
              startIcon={<MdOutgoingMail />}
              onClick={() => (window.location.href = "/dashboard/sendMail")}
            >
              Envío de Mails
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Dashboard;