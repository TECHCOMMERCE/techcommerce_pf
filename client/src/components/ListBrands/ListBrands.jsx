import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { putBrand } from "../../Store/actions/brand";
import NoResults from "../NoResults/NoResults";
import {
  getBrands,
  getBrandsByName,
  getBrandsForAdmin,
} from "../../Store/actions/brands";
import ListedBrand from "./ListedBrand";
import {
  MdAddCircle,
  MdArrowBack,
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
  MdOutlineFirstPage,
  MdOutlineLastPage,
} from "react-icons/md";
import { Container, FormLabel, Box, IconButton } from "@mui/material";
import BrandsSearchBar from "./BrandsSearchBar";
import { swalMessages } from "../../helpers/Swal/swal";

const ListBrands = () => {
  const brands = useSelector((state) => state.brandsReducer.brandsAdmin);
  const brandsCount = useSelector((state) => state.brandsReducer.brands);

  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(0);
  const [searching, setSearching] = useState(false);
  const [input, setInput] = useState("");

  const handleToggle = (brand) => {
    const obj = {
      brandid: brand.brandid,
      name: brand.name,
      status: !brand.status,
    };

    dispatch(putBrand(obj));
    brand.status
      ? swalMessages(
          `Marca ${brand.name} desactivada exitosamente`,
          "Desactivada",
          "success"
        )
      : swalMessages(
          `Marca ${brand.name} activada exitosamente`,
          "Activada",
          "success"
        );
    dispatch(getBrands());
  };

  const handleSearch = (e, name) => {
    e.preventDefault();
    dispatch(getBrandsByName(name, currentPage));
    setInput(name);
  };

  useEffect(() => {
    dispatch(getBrandsForAdmin(currentPage));
  }, [brandsCount]);

  useEffect(() => {
    dispatch(getBrands());
  }, [dispatch]);

  return (
    <Container sx={{ px: 20, minWidth: "100vw", mt: "135px" }}>
      <Box
        sx={{
          m: 20,
          p: 40,
          pt: 20,
        }}
      >
        <BrandsSearchBar
          handleSearch={handleSearch}
          dispatch={dispatch}
          getBrandsForAdmin={getBrandsForAdmin}
          setCurrentPage={setCurrentPage}
          setSearching={setSearching}
        />

        {brands?.rows && (
          <Box>
            {brands.rows?.map((b) => (
              <ListedBrand
                key={b.brandid}
                brand={b}
                handleToggle={handleToggle}
              />
            ))}
          </Box>
        )}

        {brands[0] && (
          <Box>
            {brands?.map((b) => (
              <ListedBrand
                key={b.brandid}
                brand={b}
                handleToggle={handleToggle}
              />
            ))}
          </Box>
        )}

        <Box
          style={{
            position: "fixed",
            bottom: 20,
            right: 20,
            background: "ghostwhite",
            borderRadius: "50%",
            display: "flex",
            border: "4px solid #2eb8b0",
          }}
        >
          <IconButton
            color="primary"
            onClick={() => (window.location.href = "/dashboard/brands/create")}
          >
            <MdAddCircle size="45" color="success" />
          </IconButton>
        </Box>

        {/* Paginación */}
        <Box
          style={{
            position: "fixed",
            bottom: 20,
            left: "50%",
            transform: "translateX(-50%)",
            background: "ghostwhite",
            borderRadius: "5px",
            display: "flex",
            alignItems: "center",
            border: "4px solid #2eb8b0",
          }}
        >
          <IconButton
            name="first-page"
            color="success"
            onClick={() => {
              if (searching) {
                dispatch(getBrandsByName(input, 0));
              } else {
                dispatch(getBrandsForAdmin(0));
              }
              setCurrentPage(0);
            }}
          >
            <MdOutlineFirstPage size="45" color="#2eb8b0" />
          </IconButton>

          <IconButton
            name="previous"
            color="success"
            onClick={() => {
              if (searching) {
                dispatch(
                  getBrandsByName(input, currentPage > 0 ? currentPage - 1 : 0)
                );
              } else {
                dispatch(
                  getBrandsForAdmin(currentPage > 0 ? currentPage - 1 : 0)
                );
              }
              setCurrentPage(currentPage > 0 ? currentPage - 1 : 0);
            }}
          >
            <MdKeyboardArrowLeft size="45" color="#2eb8b0" />
          </IconButton>
          <FormLabel
            sx={{
              color: "ghostwhite",
              fontSize: "1.5rem",
              px: 10,
              borderRadius: "5px",
              fontWeight: "bold",
              backgroundColor: "#2eb8b0",
            }}
          >
            {currentPage + 1}
          </FormLabel>
          <IconButton
            name="next"
            color="primary"
            onClick={() => {
              if (searching) {
                if (currentPage < Math.floor(brands.count / 10)) {
                  dispatch(getBrandsByName(input, currentPage + 1));
                  return setCurrentPage(currentPage + 1);
                } else {
                  return dispatch(getBrandsByName(input, currentPage));
                }
              }

              if (currentPage < Math.floor(brandsCount.length / 10)) {
                dispatch(getBrandsForAdmin(currentPage + 1));
                setCurrentPage(currentPage + 1);
              } else {
                dispatch(getBrandsForAdmin(currentPage));
              }
            }}
          >
            <MdKeyboardArrowRight size="45" />
          </IconButton>

          <IconButton
            name="last-page"
            onClick={() => {
              if (searching) {
                dispatch(getBrandsByName(input, Math.floor(brands.count / 10)));
                setCurrentPage(Math.floor(brands.count / 10));
              } else {
                dispatch(
                  getBrandsForAdmin(Math.floor(brandsCount.length / 10))
                );
                setCurrentPage(Math.floor(brandsCount.length / 10));
              }
            }}
          >
            <MdOutlineLastPage size="45" color="#2eb8b0" />
          </IconButton>
        </Box>

        <Box
          style={{
            position: "fixed",
            bottom: 20,
            left: 20,
            background: "ghostwhite",
            borderRadius: "50%",
            display: "flex",
            border: "4px solid crimson",
          }}
        >
          <IconButton
            color="success"
            onClick={() => (window.location.href = "/dashboard")}
          >
            <MdArrowBack size="45" color="crimson" />
          </IconButton>
        </Box>
      </Box>
    </Container>
  );
};

export default ListBrands;
