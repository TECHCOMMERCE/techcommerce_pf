import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {putCategory} from "../../Store/actions/category";
import {getCategories} from "../../Store/actions/categories";
import ListedCategory from "./ListedCategory";
import { MdAddCircle, MdArrowBack } from "react-icons/md";
import { Container, Box, IconButton } from "@mui/material";
import CategoriesSearchBar from "./CategoriesSearchBar";

const ListCategories = () => {
  const categories = useSelector((state) => state.categoriesReducer);
  const dispatch = useDispatch();

  const handleToggle = (category) => {
    const obj = {
      categoryid: category.categoryid,
      name: category.name,
      status: !category.status,
    };

    dispatch(putCategory(obj));
    category.status ? alert(`Category ${category.name} enabled`) : alert(`Category ${category.name} disabled`);
    dispatch(getCategories());
  };

  useEffect(() => {
    dispatch(getCategories());
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
        <CategoriesSearchBar />

        <Box>
          {categories?.length &&
            categories?.map((c) => (
              <ListedCategory
                key={c.categoryid}
                category={c}
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
              (window.location.href = "/dashboard/categories/create")
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

export default ListCategories;

