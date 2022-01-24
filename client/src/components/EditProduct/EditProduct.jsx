import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getProductById,
  putProduct,
  resetProductDetail,
} from "../../Store/actions/product";
import { getBrands } from "../../Store/actions/brands";
import { getCategories } from "../../Store/actions/categories";
import { RadioGroup, FormControlLabel, Radio, FormLabel } from "@mui/material";

const EditProduct = () => {
  const productDetail = useSelector(
    (state) => state.productReducer.productDetail
  );
  const brands = useSelector((state) => state.brandsReducer);
  const categories = useSelector((state) => state.categoriesReducer);
  const dispatch = useDispatch();
  const params = useParams();
  const [inputs, setInputs] = useState({
    name: "",
    price: "",
    stock: "",
    sold_quantity: "",
    condition: "",
    attributes: [],
    brand: "",
    categories: [],
    image: "",
    status: "",
  });

  const handleInputs = (e) => {
    e.preventDefault();
    setInputs({
      ...inputs,
      [e.target.name]:
        e.target.value === "Select here..."
          ? [...inputs]
          : e.target.name === "categories"
          ? !inputs.categories.includes(e.target.value)
            ? [...inputs.categories, e.target.value]
            : [...inputs.categories]
          : e.target.value,
    });
  };

  const handleTags = (e) => {
    setInputs({
      ...inputs,
      categories: inputs.categories.filter((c) => c !== e.target.name),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setInputs({
      productid: productDetail.productid,
      name: document.querySelector("#name").value,
      price: document.querySelector("#price").value,
      stock: document.querySelector("#stock").value,
      sold_quantity: document.querySelector("#sold").value,
      condition:
        document.querySelector("#condition").value || productDetail.condition,
      attributes: productDetail.attributes,
      brand:
        document.querySelector("#brand").value === "Select here..."
          ? productDetail.brand.brandid
          : brands.find((b) => {
              return (
                b.name === document.querySelector("#brand").value && b.brandid
              );
            }),
      categories: document.querySelector("#image").value
        ? document.querySelector("#image").value
        : productDetail?.categories &&
          productDetail?.categories?.map((c) => c.name),
      image: document.querySelector("#image").value,
      status: productDetail.status,
    });
    console.log(document.querySelector("#condition"));
    console.log(inputs);
    await dispatch(putProduct(inputs));
    alert("Product edited succesfully");
  };

  useEffect(() => {
    setInputs({
      productid: productDetail.productid,
      name: document.querySelector("#name").value,
      price: document.querySelector("#price").value,
      stock: document.querySelector("#stock").value,
      sold_quantity: document.querySelector("#sold").value,
      condition:
        document.querySelector("#condition").value || productDetail.condition,
      attributes: productDetail.attributes,
      brand:
        document.querySelector("#brand").value === "Select here..."
          ? productDetail.brand?.brandid
          : brands.find((b) => {
              return (
                b.name === document.querySelector("#brand").value && b.brandid
              );
            }),
      categories: productDetail.categories?.map((c) => c.name),
      image: document.querySelector("#image").value,
      status: productDetail?.status,
    });
  }, [brands, productDetail.attributes, productDetail.brand?.brandid, productDetail.categories, productDetail.condition, productDetail.productid, productDetail.status]);

  useEffect(() => {
    dispatch(getBrands());
    dispatch(getCategories());
    dispatch(getProductById(params.productid));
    return () => {
      dispatch(resetProductDetail());
    };
  }, [dispatch, params.productid]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <form
          id="form"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "flex-start",
            height: 500,
          }}
          onSubmit={handleSubmit}
        >
          <label htmlFor="name">Name</label>
          <input
            name="name"
            id="name"
            type="text"
            // value={inputs?.name}
            onChange={handleInputs}
            required
            maxLength="255"
            defaultValue={productDetail.name}
            autoFocus
          />

          <label htmlFor="price">Price</label>
          <input
            name="price"
            id="price"
            type="number"
            // value={inputs?.price}
            defaultValue={productDetail.price}
            onChange={handleInputs}
            required
            min="0"
            max="1000000"
          />

          <label htmlFor="stock">Stock</label>
          <input
            name="stock"
            id="stock"
            type="number"
            // value={ inputs.stock || productDetail.stock}
            defaultValue={productDetail.stock}
            onChange={handleInputs}
            required
            min="0"
            max="1000000"
          />

          <label htmlFor="sold">Sold Quantity</label>
          <input
            name="sold_quantity"
            id="sold"
            type="number"
            // value={productDetail.sold_quantity}
            defaultValue={productDetail.sold_quantity}
            onChange={handleInputs}
            required
            min="0"
            max="1000000"
          />

          <div>
            <FormLabel id="labe-condition">Condition</FormLabel>
            <RadioGroup
              id="condition"
              aria-labelledby="label-condition"
              defaultValue={productDetail.condition}
              name="condition"
              row
            >
              <FormControlLabel
                name="condition"
                value="new"
                onChange={handleInputs}
                control={<Radio />}
                label="New"
              />
              <FormControlLabel
                name="condition"
                value="used"
                onChange={handleInputs}
                control={<Radio />}
                label="Used"
              />
            </RadioGroup>
            <h6>{`Current condition: ${productDetail.condition}`}</h6>
          </div>

          <label htmlFor="image">Image</label>
          <input
            name="image"
            id="image"
            type="text"
            // value={productDetail.image}
            defaultValue={productDetail.image}
            onChange={handleInputs}
            required
            maxLength="255"
          />

          <label htmlFor="brand">Brand</label>
          <select name="brand" id="brand" label="Brand" onChange={handleInputs}>
            <option>Select here...</option>
            {brands?.length &&
              brands?.map((b) => (
                <option key={b.brandid} value={b.brandid}>
                  {b.name}
                </option>
              ))}
          </select>
          {productDetail.hasOwnProperty("brand") && (
            <h6>{`Current Brand: ${productDetail.brand?.name}`}</h6>
          )}

          <label id="categories">Categories</label>
          <select name="categories" id="categories" onChange={handleInputs}>
            <option>Select here...</option>
            {categories?.length &&
              categories?.map((c) => (
                <option key={c.categoryid} value={c.name}>
                  {c.name}
                </option>
              ))}
          </select>

          <h6>Current Categories:</h6>
          <ul style={{ fontSize: 11, listStyle: "none" }}>
            {inputs.categories?.length
              ? inputs.categories?.map((c) => <li key={c.categoryid} onClick={handleTags}>{c.name}</li>)
              : productDetail.categories?.length &&
                productDetail.categories?.map((c) => (
                  <li key={c.categoryid} onClick={handleTags}>
                    {c.name}
                  </li>
                ))}
          </ul>

          <div>
            <input value="EDIT" type="submit" />
            <input
              style={{ marginLeft: 20 }}
              value="CANCEL"
              type="button"
              onClick={() => (window.location.href = "/products/list")}
            />
          </div>
        </form>
        <div style={{ marginLeft: 40 }}>
          {/* <img src={productDetail.image} alt="image-product" height="500" /> */}
          <img
            src={inputs.image || productDetail.image}
            alt="product"
            height="500"
          />
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
