import React, { useEffect, useState } from "react";
import { Container, Box, Typography, TextField, Button } from "@mui/material";
import { MdSave, MdArrowBack } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryById, putCategory, resetCategoryDetail } from "../../Store/actions/category";
import {useParams} from "react-router-dom";

const EditCategory = () => {
  const categoryDetail = useSelector(state => state.categoryReducer.categoryDetail);
  const dispatch = useDispatch();
  const params = useParams();
  const [input, setInput] = useState({
    categoryid: "",
    name: "",
    status: "",
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (document.getElementById("name").value) {
      dispatch(putCategory(input));
      alert("Category edited succesfully");
      window.location.href = `/dashboard/categories/edit/${params.categoryid}`;
    }
  };
  
  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  
  useEffect(() => {
    setInput({
      ...input,
      categoryid: params?.categoryid ? categoryDetail.categoryid : "",
      name: categoryDetail?.name ? categoryDetail.name : "",
      status: categoryDetail?.status,
    })
  }, [categoryDetail]);

  useEffect(() => {
    dispatch(getCategoryById(params.categoryid));
    return () => {
      dispatch(resetCategoryDetail());
    }
  }, [dispatch, params.categoryid]);
  

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: 200,
        width: "100%",
      }}
    >
      {/* Contiene todo el form y el título */}
      <Box
        sx={{
          m: 20,
          p: 40,
          pt: 20,
          width: "400px",
          backgroundColor: "dodgerblue",
          borderRadius: "5px",
          height: "fit-content",
        }}
      >
        <Typography
          sx={{ fontSize: "1.5rem", mb: 20 }}
          color="secondary"
          align="left"
        >
          Edit a Category
        </Typography>

        {/* formulario */}
        <form
          id="form"
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            height: "fit-content",
            backgroundColor: "ghostwhite",
            borderRadius: "5px",
            padding: "40px",
          }}
          onSubmit={handleSubmit}
        >
          <TextField
            autoFocus
            label="name"
            required
            id="name"
            name="name"
            variant="filled"
            color="primary"
            value={input.name || (categoryDetail?.name && categoryDetail.name)}
            onChange={handleInput}
            placeholder="Monitors"
            sx={{ width: "100%", mb: 30 }}
          />

          {/* Botones */}
          <Box
            width="100%"
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Button
              type="submit"
              variant="contained"
              color="primary"
              endIcon={<MdSave />}
              size="medium"
            >
              Save
            </Button>
            <Button
              color="error"
              variant="contained"
              endIcon={<MdArrowBack />}
              size="medium"
              onClick={() => (window.location.href = "/dashboard/categories")}
            >
              Back
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default EditCategory;
