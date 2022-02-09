import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { putCategory } from "../../Store/actions/category";
import {
  getCategories,
  getCategoriesByName,
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
import {swalMessages} from "../../helpers/Swal/swal";

const ListCategories = () => {
  const categories = useSelector(
    (state) => state.categoriesReducer.categoriesAdmin
  );
  const categoriesCount = useSelector(
    (state) => state.categoriesReducer.categories
  );
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(0);
  const [searching, setSearching] = useState(false);
  const [input, setInput] = useState("");

  const handleToggle = (category) => {
    const obj = {
      categoryid: category.categoryid,
      name: category.name,
      status: !category.status,
    };

    dispatch(putCategory(obj));
    category.status
      ? swalMessages(`Categoría ${category.name} desactivada exitosamente`, "Desactivada", "success")
      : swalMessages(`Categoría ${category.name} activada exitosamente`, "Activada", "success");
    dispatch(getCategories());
  };

  const handleSearch = (e, name) => {
    e.preventDefault();
    dispatch(getCategoriesByName(name, currentPage));
    setInput(name);
  };

  useEffect(() => {
    dispatch(getCategoriesForAdmin(currentPage));
  }, [categoriesCount]);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <Container sx={{ px: 20, minWidth: "100vw", mt: "135px", }}>
      <Box
        sx={{
          m: 20,
          p: 40,
          pt: 20,
        }}
      >
        <CategoriesSearchBar
          handleSearch={handleSearch}
          dispatch={dispatch}
          getCategoriesForAdmin={getCategoriesForAdmin}
          setCurrentPage={setCurrentPage}
          setSearching={setSearching}
        />

        {categories?.rows && (
          <Box>
            {categories.rows?.map((c) => (
              <ListedCategory
                key={c.categoryid}
                category={c}
                handleToggle={handleToggle}
              />
            ))}
          </Box>
        )}

        {categories[0] && (
          <Box>
            {categories?.map((c) => (
              <ListedCategory
                key={c.categoryid}
                category={c}
                handleToggle={handleToggle}
              />
            ))}
          </Box>
        )}

        <Box
          style={{
            position: "fixed",
            bottom: 20,
            right: 20,
            background: "ghostwhite",
            borderRadius: "50%",
            display: "flex",
            border: "4px solid #2eb8b0",
          }}
        >
          <IconButton
            color="primary"
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
            border: "4px solid #2eb8b0",
          }}
        >
          <IconButton
            name="first-page"
            onClick={() => {
              if (searching) {
                dispatch(getCategoriesByName(input, 0));
              } else {
                dispatch(getCategoriesForAdmin(0));
              }
              setCurrentPage(0);
            }}
          >
            <MdOutlineFirstPage size="45" color="#2eb8b0" />
          </IconButton>

          <IconButton
            name="previous"
            onClick={() => {
              if (searching) {
                dispatch(
                  getCategoriesByName(input, currentPage > 0 ? currentPage - 1 : 0)
                );
              } else {
                dispatch(
                  getCategoriesForAdmin(currentPage > 0 ? currentPage - 1 : 0)
                );
              }
              setCurrentPage(currentPage > 0 ? currentPage - 1 : 0);
            }}
          >
            <MdKeyboardArrowLeft size="45" color="#2eb8b0" />
          </IconButton>
          <FormLabel
            sx={{
              color: "ghostwhite",
              fontSize: "1.5rem",
              px: 10,
              borderRadius: "5px",
              fontWeight: "bold",
              backgroundColor: "#2eb8b0",
            }}
          >
            {currentPage + 1}
          </FormLabel>
          <IconButton
            name="next"
            color="success"
            onClick={() => {
              if (searching) {
                if (currentPage < Math.floor(categories.count / 10)) {
                  dispatch(getCategoriesByName(input, currentPage + 1));
                  return setCurrentPage(currentPage + 1);
                } else {
                  return dispatch(getCategoriesByName(input, currentPage));
                }
              }

              if(currentPage < Math.floor(categoriesCount.length / 10)){
                dispatch(getCategoriesForAdmin(currentPage + 1));
                setCurrentPage(currentPage + 1)
              } else {
                dispatch(getCategoriesForAdmin(currentPage));
              }
            }}
          >
            <MdKeyboardArrowRight size="45" color="#2eb8b0" />
          </IconButton>

          <IconButton
            name="last-page"
            onClick={() => {
              if (searching) {
                dispatch(getCategoriesByName(input, Math.floor(categories.count / 10)));
                setCurrentPage( Math.floor(categories.count / 10))
              } else {
                dispatch(getCategoriesForAdmin(Math.floor(categoriesCount.length / 10)));
                setCurrentPage(Math.floor(categoriesCount.length / 10));
              }
            }}
          >
            <MdOutlineLastPage size="45" color="#2eb8b0" />
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
