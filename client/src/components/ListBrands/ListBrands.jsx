import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { putBrand } from "../../Store/actions/brand";
import { getBrands, getBrandsForAdmin } from "../../Store/actions/brands";
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

const ListBrands = () => {
  const brands = useSelector((state) => state.brandsReducer.brandsAdmin)
  const brandsCount = useSelector((state) => state.brandsReducer.brands);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  const handleToggle = (brand) => {
    const obj = {
      brandid: brand.brandid,
      name: brand.name,
      status: !brand.status,
    };

    dispatch(putBrand(obj));
    brand.status
      ? alert(`Brand ${brand.name} disabled`)
      : alert(`Category ${brand.name} enabled`);
    dispatch(getBrands());
  };

  useEffect(() => {
    dispatch(getBrandsForAdmin(currentPage));
  }, [brandsCount]);

  useEffect(() => {
    dispatch(getBrands());
  }, [dispatch]);

  return (
    <Container sx={{ px: 20, minWidth: "100vw" }}>
      <Box
        sx={{
          m: 20,
          p: 40,
          pt: 20,
        }}
      >
        <BrandsSearchBar />

        <Box>
          {brands[0] &&
            brands?.map((b) => (
              <ListedBrand
                key={b.brandid}
                brand={b}
                handleToggle={handleToggle}
              />
            ))}
        </Box>

        <Box
          style={{
            position: "fixed",
            bottom: 20,
            right: 20,
            background: "ghostwhite",
            borderRadius: "50%",
            display: "flex",
            border: "4px solid #3CB371",
          }}
        >
          <IconButton
            color="success"
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
            border: "4px solid dodgerblue",
          }}
        >
          <IconButton
            name="first-page"
            color="success"
            onClick={() => {
              dispatch(getBrandsForAdmin(1));
              setCurrentPage(1);
            }}
          >
            <MdOutlineFirstPage size="45" color="dodgerblue" />
          </IconButton>

          <IconButton
            name="previous"
            color="success"
            onClick={() => {
              dispatch(
                getBrandsForAdmin(currentPage > 1 ? currentPage - 1 : 1)
              );
              setCurrentPage(currentPage > 1 ? currentPage - 1 : 1);
            }}
          >
            <MdKeyboardArrowLeft size="45" color="dodgerblue" />
          </IconButton>
          <FormLabel
            sx={{
              color: "ghostwhite",
              fontSize: "1.5rem",
              px: 10,
              borderRadius: "5px",
              fontWeight: "bold",
              backgroundColor: "dodgerblue",
            }}
          >
            {currentPage}
          </FormLabel>
          <IconButton
            name="next"
            color="success"
            onClick={() => {
              dispatch(
                getBrandsForAdmin(
                  currentPage < Math.floor(brandsCount.length / 10)
                    ? currentPage + 1
                    : currentPage
                )
              );
              setCurrentPage(
                currentPage < Math.floor(brandsCount.length / 10)
                  ? currentPage + 1
                  : currentPage
              );
            }}
          >
            <MdKeyboardArrowRight size="45" color="dodgerblue" />
          </IconButton>

          <IconButton
            name="last-page"
            color="success"
            onClick={() => {
              dispatch(
                getBrandsForAdmin(Math.floor(brandsCount.length / 10))
              );
              setCurrentPage(Math.floor(brandsCount.length / 10));
            }}
          >
            <MdOutlineLastPage size="45" color="dodgerblue" />
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
