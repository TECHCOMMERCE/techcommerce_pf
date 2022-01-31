import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {putBrand} from "../../Store/actions/brand";
import {getBrands} from "../../Store/actions/brands";
import ListedBrand from "./ListedBrand";
import { MdAddCircle, MdArrowBack } from "react-icons/md";
import { Container, Box, IconButton } from "@mui/material";
import BrandsSearchBar from "./BrandsSearchBar";

const ListBrands = () => {
  const brands = useSelector((state) => state.brandsReducer);
  const dispatch = useDispatch();

  const handleToggle = (brand) => {
    const obj = {
      brandid: brand.brandid,
      name: brand.name,
      status: !brand.status,
    };

    dispatch(putBrand(obj));
    brand.status ? alert(`Brand ${brand.name} enabled`) : alert(`Category ${brand.name} disabled`);
    dispatch(getBrands());
  };

  useEffect(() => {
    dispatch(getBrands());
  }, [dispatch]);

  return (
    <Container sx={{ px: 20, mt: 200, minWidth: "100vw" }}>
      <Box
        sx={{
          m: 20,
          p: 40,
          pt: 20,
        }}
      >
        <BrandsSearchBar />

        <Box>
          {brands?.length &&
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
            onClick={() =>
              (window.location.href = "/dashboard/brands/create")
            }
          >
            <MdAddCircle
              size="45"
              color="success"
            />
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
            onClick={() =>
              (window.location.href = "/dashboard")
            }
          >
            <MdArrowBack
              size="45"
              color="crimson"
            />
          </IconButton>
        </Box>
      </Box>
    </Container>
  );
};

export default ListBrands;

