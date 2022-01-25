import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { putProduct } from "../../Store/actions/product";
import { getProducts } from "../../Store/actions/products";
import ListedProduct from "./ListedProduct";
import { MdAddCircle } from "react-icons/md";
import { Link } from "react-router-dom";

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
    <div>
      <div>
        {products?.length &&
          products?.map((p) => (
            <ListedProduct
              key={p.productid}
              product={p}
              deleteFn={handleDelete}
            />
          ))}
      </div>
      <Link to="/product/create">
        <div
          style={{
            position: "fixed",
            bottom: 20,
            right: 20,
            background: "azure",
            borderRadius: "50%",
            display: "flex",
            border: "2px solid green",
          }}
        >
          <MdAddCircle size="90" color="green" />
        </div>
      </Link>
    </div>
  );
};

export default ListProducts;
