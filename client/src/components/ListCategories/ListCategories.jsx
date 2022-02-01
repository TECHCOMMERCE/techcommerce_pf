import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { putCategory } from "../../Store/actions/category";
import {
  getCategories,
  getCategoriesForAdmin,
} from "../../Store/actions/categories";
import ListedCategory from "./ListedCategory";
import {
  MdAddCircle,
  MdArrowBack,
  MdOutlineLastPage,
  MdOutlineFirstPage,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { Container, Box, FormLabel, IconButton } from "@mui/material";
import CategoriesSearchBar from "./CategoriesSearchBar";

const ListCategories = () => {
  const categories = useSelector(
    (state) => state.categoriesReducer.categoriesAdmin
  );
  const categoriesCount = useSelector(
    (state) => state.categoriesReducer.categories
  );
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  const handleToggle = (category) => {
    const obj = {
      categoryid: category.categoryid,
      name: category.name,
      status: !category.status,
    };

    dispatch(putCategory(obj));
    category.status
      ? alert(`Category ${category.name} disabled`)
      : alert(`Category ${category.name} enabled`);
    dispatch(getCategories());
  };

  useEffect(() => {
    dispatch(getCategoriesForAdmin(currentPage));
  }, [categoriesCount]);

  useEffect(() => {
    dispatch(getCategories());
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
        <CategoriesSearchBar />

        <Box>
          {categories[0] &&
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
              dispatch(getCategoriesForAdmin(1));
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
                getCategoriesForAdmin(currentPage > 1 ? currentPage - 1 : 1)
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
                getCategoriesForAdmin(
                  currentPage < Math.floor(categoriesCount.length / 10)
                    ? currentPage + 1
                    : currentPage
                )
              );
              setCurrentPage(
                currentPage < Math.floor(categoriesCount.length / 10)
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
              dispatch(getCategoriesForAdmin(Math.floor(categoriesCount.length / 10)));
              setCurrentPage(Math.floor(categoriesCount.length / 10));
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
          <IconButton onClick={() => (window.location.href = "/dashboard")}>
            <MdArrowBack size="45" color="crimson" />
          </IconButton>
        </Box>
      </Box>
    </Container>
  );
};

export default ListCategories;
