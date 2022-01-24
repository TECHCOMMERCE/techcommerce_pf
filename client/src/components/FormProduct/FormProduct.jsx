import React, { useState } from "react";

import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  InputLabel,
  Input,
  FormGroup,
} from "@mui/material";

const FormProduct = () => {
 

  const [input, setInput] = useState({
    name: "",
    price: "",
    stock: "",
    sold_quantity: "",
    condition: "new",
    image: "",
    brand: "",
    categories: [],
    status: true,
  });

  const radioNew = document.querySelector(".radio-new");
  console.log(radioNew);

  const handlerInputs = (e) => {
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

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FormControl>
        <FormGroup>
          <InputLabel htmlFor="name">Name</InputLabel>
          <Input
            name="name"
            id="name"
            value={input.name}
            onChange={handlerInputs}
          />
        </FormGroup>

        <FormGroup>
          <InputLabel htmlFor="price">Price</InputLabel>
          <Input
            name="price"
            id="price"
            value={input.price}
            onChange={handlerInputs}
          />
        </FormGroup>

        <InputLabel htmlFor="stock">Stock</InputLabel>
        <Input
          name="stock"
          id="stock"
          value={input.stock}
          onChange={handlerInputs}
        />
        <InputLabel htmlFor="sold">Sold Quantity</InputLabel>
        <Input
          name="sold_quantity"
          id="sold"
          value={input.sold_quantity}
          onChange={handlerInputs}
        />
        <div>
          <FormLabel id="condition">Condition</FormLabel>
          <RadioGroup
            aria-labelledby="condition"
            defaultValue={input.condition}
            name="radio-buttons-group"
            row
          >
            <FormControlLabel
              name="condition"
              value="new"
              onChange={handlerInputs}
              control={<Radio />}
              label="New"
            />
            <FormControlLabel
              name="condition"
              value="used"
              onChange={handlerInputs}
              control={<Radio />}
              label="Used"
            />
          </RadioGroup>
        </div>
        <InputLabel htmlFor="image">Image</InputLabel>
        <Input
          name="image"
          id="image"
          value={input.image}
          onChange={handlerInputs}
        />
        {/* <InputLabel id="brand">Brand</InputLabel>
        <Select name="brand" labelId="brand" label="Brand" onChange={handlerInputs}>
          <MenuItem>Select here...</MenuItem>
          {brands?.map((b) => (
            <MenuItem key={b.brandid} value={b.brandid}>
              {b.name}
            </MenuItem>
          ))}
        </Select>

        <InputLabel id="categories">Categories</InputLabel>
        <Select name="categories" labelId="categories" onChange={handlerInputs}>
          <MenuItem>Select here...</MenuItem>
          {categories?.map((c) => (
            <MenuItem key={c.categoryid} value={c.name}>
              {c.name}
            </MenuItem>
          ))}
        </Select> */}

        <input value="SUBMIT" type="submit" />
      </FormControl>
    </div>
  );
};

export default FormProduct;
