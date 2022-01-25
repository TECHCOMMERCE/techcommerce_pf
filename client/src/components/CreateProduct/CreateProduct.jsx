import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postProduct } from "../../Store/actions/product";
import { getCategories } from "../../Store/actions/categories";
import { getBrands } from "../../Store/actions/brands";
import {
  // FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  // InputLabel,
  // Input,
  // Select,
  // MenuItem,
  // Menu,
  // FormGroup,
} from "@mui/material";
import { Link } from "react-router-dom";

const CreateProduct = () => {
  const dispatch = useDispatch();
  const brands = useSelector((state) => state.brandsReducer);
  const categories = useSelector((state) => state.categoriesReducer);

  const [input, setInput] = useState({
    name: "",
    price: "",
    stock: "",
    sold_quantity: "",
    condition: "new",
    image:
      "https://www.appclonescript.com/wp-content/uploads/2020/08/gadget.jpg",
    attributes: [{ currency: "soles", color: "red" }],
    brand: "",
    categories: [],
    status: true,
  });

  const handleInputs = (e) => {
    setInput({
      ...input,
      [e.target.name]:
        e.target.value === "Select here..."
          ? [...input]
          : e.target.name === "categories"
          ? !input.categories.includes(e.target.value)
            ? [...input.categories, e.target.value]
            : [...input.categories]
          : e.target.value,
    });
  };

  const handleTags = (e) => {
    console.log(e.currentTarget.name);
    setInput({
      ...input,
      categories: input.categories.filter((c) => c !== e.currentTarget.name),
    });
  };

  const handleSubmit = async (e) => {
    if (input.brand.length && input.categories.length) {
      e.preventDefault();
      await dispatch(postProduct(input));
      alert("Product created succesfully");
      window.location.href = "/product/create";
    } else {
      e.preventDefault();
      alert("Please select the brand and categories");
    }
  };

  useEffect(() => {
    dispatch(getBrands());
    dispatch(getCategories());
  }, []);

  return (
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
          value={input.name}
          onChange={handleInputs}
          required
          autoFocus
          maxLength="255"
        />

        <label htmlFor="price">Price</label>
        <input
          name="price"
          id="price"
          type="number"
          value={input.price}
          onChange={handleInputs}
          min="0"
          max="1000000"
          required
        />

        <label htmlFor="stock">Stock</label>
        <input
          name="stock"
          id="stock"
          type="number"
          value={input.stock}
          onChange={handleInputs}
          required
          min="0"
        />

        <label htmlFor="sold">Sold Quantity</label>
        <input
          name="sold_quantity"
          id="sold"
          type="number"
          value={input.sold_quantity}
          onChange={handleInputs}
          required
          min="0"
        />

        <label htmlFor="condition">Condition</label>
        <select
          name="condition"
          id="condition"
          defaultValue={input.condition}
          onChange={handleInputs}
        >
          <option value="new">New</option>
          <option value="used">Used</option>
        </select>

        <label htmlFor="image">Image</label>
        <input
          name="image"
          id="image"
          type="text"
          value={input.image}
          onChange={handleInputs}
          required
          max="255"
        />

        <label htmlFor="brand">Brand</label>
        <select
          required
          name="brand"
          id="brand"
          label="Brand"
          onChange={handleInputs}
        >
          <option>Select here...</option>
          {brands?.length &&
            brands?.map((b) => (
              <option key={b.brandid} value={b.brandid}>
                {b.name}
              </option>
            ))}
        </select>

        <label id="categories">Categories</label>
        <select
          required
          name="categories"
          id="categories"
          onChange={handleInputs}
        >
          <option>Select here...</option>
          {categories?.length &&
            categories?.map((c) => (
              <option key={c.categoryid} value={c.name}>
                {c.name}
              </option>
            ))}
        </select>
        <ul style={{ fontSize: 11, listStyle: "none" }}>
          {input.categories?.map((c) => (
            <Link
              style={{ fontWeight: "bold", color: "cadetblue" }}
              to="#"
              name={c}
              key={c}
              onClick={handleTags}
            >
              <li name={c}>{c}</li>
            </Link>
          ))}
        </ul>

        <input value="CREATE" type="submit" />
      </form>
      <div style={{ marginLeft: 40 }}>
        <img src={input.image} alt="image-product" height="500" />
      </div>
    </div>
  );
};

export default CreateProduct;
