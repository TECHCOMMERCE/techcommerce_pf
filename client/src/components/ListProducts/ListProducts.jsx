import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { putProduct } from "../../Store/actions/product";
import { getProducts, getProductsForAdmin } from "../../Store/actions/products";
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
  const [currentPage, setCurrentPage] = useState(1);

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
      ? alert(`Product ${product.name} disabled`)
      : alert(`Product ${product.name} enabled`);
    dispatch(getProducts());
    dispatch(getProductsForAdmin(currentPage));
  };

  useEffect(() => {
    dispatch(getProductsForAdmin(currentPage));
  }, [productsCount]);

  useEffect(() => {
    dispatch(getProducts());
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
        <ProductsSearchBar />

        <Box>
          {products[0] &&
            products?.map((p) => (
              <ListedProduct
                key={p.productid}
                product={p}
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
              (window.location.href = "/dashboard/products/create")
            }
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
              dispatch(getProductsForAdmin(1));
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
                getProductsForAdmin(currentPage > 1 ? currentPage - 1 : 1)
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
                getProductsForAdmin(
                  currentPage < Math.floor(productsCount.length / 10)
                    ? currentPage + 1
                    : currentPage
                )
              );
              setCurrentPage(
                currentPage < Math.floor(productsCount.length / 10)
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
                getProductsForAdmin(Math.floor(productsCount.length / 10))
              );
              setCurrentPage(Math.floor(productsCount.length / 10));
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

export default ListProducts;
