import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { putProduct } from "../../Store/actions/product";
import { getProducts } from "../../Store/actions/products";
import ListedProduct from "./ListedProduct";
import { MdAddCircle, MdArrowBack } from "react-icons/md";
import { Container, Box, IconButton } from "@mui/material";
import ProductsSearchBar from "./ProductsSearchBar";

const ListProducts = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

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
    product.status ? alert(`Product ${product.name} enabled`) : alert(`Category ${product.name} disabled`);
    dispatch(getProducts());
  };

  useEffect(() => {
    dispatch(getProducts());
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
        <ProductsSearchBar />

        <Box>
          {products?.length &&
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

export default ListProducts;
