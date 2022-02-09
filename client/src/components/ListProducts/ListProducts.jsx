import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { putProduct } from "../../Store/actions/product";
import { swalMessages } from "../../helpers/Swal/swal"; 
import {
  getProducts,
  getProductsByName,
  getProductsForAdmin,
} from "../../Store/actions/products";
import ListedProduct from "./ListedProduct";
import {
  MdAddCircle,
  MdArrowBack,
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
  MdOutlineFirstPage,
  MdOutlineLastPage,
} from "react-icons/md";
import { Container, Box, IconButton, FormLabel } from "@mui/material";
import ProductsSearchBar from "./ProductsSearchBar";

const ListProducts = () => {
  const products = useSelector((state) => state.products.productsAdmin);
  const productsCount = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(0);
  const [searching, setSearching] = useState(false);
  const [input, setInput] = useState("");

  const handleToggle = (product) => {
    const obj = {
      productid: product.productid,
      name: product.name,
      price: product.price,
      stock: product.stock,
      sold_quantity: product.sold_quantity,
      condition: product.condition,
      image: product.image,
      attributes: product.attributes,
      brandid: product.brand.brandid,
      categories: product.categories.map((c) => c.name),
      status: !product.status,
    };

    dispatch(putProduct(obj));
    product.status
      ? swalMessages(`Producto ${product.name} desactivado exitosamente`, "Desactivado", "success")
      : swalMessages(`Producto ${product.name} activado exitosamente`, "Activado", "success");
    dispatch(getProducts());
    dispatch(getProductsForAdmin(currentPage));
  };

  const handleSearch = (e, name) => {
    e.preventDefault();
    dispatch(getProductsByName(name, currentPage));
    setInput(name);
  };

  useEffect(() => {
    dispatch(getProductsForAdmin(currentPage));
  }, [productsCount]);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <Container sx={{ px: 20, minWidth: "100vw", mt: "135px", }}>
      <Box
        sx={{
          m: 20,
          p: 40,
          pt: 20,
        }}
      >
        <ProductsSearchBar
          handleSearch={handleSearch}
          dispatch={dispatch}
          getProductsForAdmin={getProductsForAdmin}
          setCurrentPage={setCurrentPage}
          setSearching={setSearching}
        />

        {products[0]?.rows ? (
          <Box>
            {products[0].rows?.map((p, i) => (
              <ListedProduct
                key={i}
                product={p}
                handleToggle={handleToggle}
              />
            ))}
          </Box>
        ) : products[0] && (
          <Box>
            {products?.map((p, i) => (
              <ListedProduct
                key={i}
                product={p}
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
            color="success"
            onClick={() =>
              (window.location.href = "/dashboard/products/create")
            }
          >
            <MdAddCircle size="45" color="#2eb8b0" />
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
            onClick={() => {
              if (searching) {
                dispatch(getProductsByName(input, 0));
              } else {
                dispatch(getProductsForAdmin(0));
              }
              setCurrentPage(0);
            }}
          >
            <MdOutlineFirstPage size="45" color="#2eb8b0" />
          </IconButton>

          <IconButton
            name="previous"
            onClick={() => {
              if (searching) {
                dispatch(
                  getProductsByName(input, currentPage > 0 ? currentPage - 1 : 0)
                );
              } else {
                dispatch(
                  getProductsForAdmin(currentPage > 0 ? currentPage - 1 : 0)
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
            onClick={() => {
              if (searching) {
                if (currentPage < Math.floor(products[0].count / 10)) {
                  dispatch(getProductsByName(input, currentPage + 1));
                  return setCurrentPage(currentPage + 1);
                } else {
                  return dispatch(getProductsByName(input, currentPage));
                }
              }

              if(currentPage < Math.floor(productsCount.length / 10)){
                dispatch(getProductsForAdmin(currentPage + 1));
                setCurrentPage(currentPage + 1)
              } else {
                dispatch(getProductsForAdmin(currentPage));
              }
            }}
          >
            <MdKeyboardArrowRight size="45" color="#2eb8b0" />
          </IconButton>

          <IconButton
            name="last-page"
            onClick={() => {
              if (searching) {
                dispatch(getProductsByName(input, Math.floor(products[0].count / 10)));
                setCurrentPage( Math.floor(products[0].count / 10))
              } else {
                dispatch(getProductsForAdmin(Math.floor(productsCount.length / 10)));
                setCurrentPage(Math.floor(productsCount.length / 10));
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

export default ListProducts;
