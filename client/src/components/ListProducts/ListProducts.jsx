import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { putProduct } from "../../Store/actions/product";
import { getProducts } from "../../Store/actions/products";
import ListedProduct from "./ListedProduct";
import { MdAddCircle, MdArrowBack } from "react-icons/md";
import { Container, Box, IconButton } from "@mui/material";
import ProductsSearhchBar from "./ProductsSearchBar";
import ProductsSearchBar from "./ProductsSearchBar";

const ListProducts = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const handleDelete = (product) => {
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
      status: false,
    };

    dispatch(putProduct(obj));
    alert(`Product ${product.name} deleted`);
    dispatch(getProducts());
  };

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <Container sx={{ m: 0, px: 20, my: 100, minWidth: "100vw" }}>
      <Box
        sx={{
          m: 20,
          p: 40,
          pt: 20,
        }}
      >
        <ProductsSearchBar />

        <Box>
          {products?.length &&
            products?.map((p) => (
              <ListedProduct
                key={p.productid}
                product={p}
                deleteFn={handleDelete}
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
          }}
        >
          <IconButton
            color="success"
            onClick={() =>
              (window.location.href = "/adminpanel/products/create")
            }
          >
            <MdAddCircle
              size="90"
              color="success"
              // sx={{ backgroundColor: "ghostwhite" }}
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
          }}
        >
          <IconButton
            color="success"
            onClick={() =>
              (window.location.href = "/adminpanel")
            }
          >
            <MdArrowBack
              size="90"
              color="crimson"
            />
          </IconButton>
        </Box>
      </Box>
    </Container>
  );
};

export default ListProducts;
