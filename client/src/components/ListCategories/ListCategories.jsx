// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// // import { putProduct } from "../../Store/actions/product";
// import { getCategories } from "../../Store/actions/categories";
// import ListedProduct from "./ListedProduct";
// import { MdAddCircle, MdArrowBack } from "react-icons/md";
// import { Container, Box, IconButton } from "@mui/material";
// // import ProductsSearchBar from "./CategoriesSearchBar";

// const ListCategories = () => {
//   const categories = useSelector((state) => state.categoriesReducer.categories);
//   const dispatch = useDispatch();

//   const handleDelete = (category) => {
//     const obj = {
//       categoryid: category.categoryid,
//       name: category.name,
//       status: false,
//     };

//     // dispatch(putCategory(obj));
//     alert(`Category ${category.name} deleted`);
//     dispatch(getCategories());
//   };

//   useEffect(() => {
//     dispatch(getCategories());
//   }, [dispatch]);

//   return (
//     <Container sx={{ m: 0, px: 20, my: 100, minWidth: "100vw" }}>
//       <Box
//         sx={{
//           m: 20,
//           p: 40,
//           pt: 20,
//         }}
//       >
//         {/* <ProductsSearchBar /> */}

//         <Box>
//           {categories?.length &&
//             categories?.map((c) => (
//               <ListedProduct
//                 key={c.categoryid}
//                 product={c}
//                 deleteFn={handleDelete}
//               />
//             ))}
//         </Box>

//         <Box
//           style={{
//             position: "fixed",
//             bottom: 20,
//             right: 20,
//             background: "ghostwhite",
//             borderRadius: "50%",
//             display: "flex",
//           }}
//         >
//           <IconButton
//             color="success"
//             onClick={() =>
//               (window.location.href = "/adminpanel/categories/create")
//             }
//           >
//             <MdAddCircle
//               size="90"
//               color="success"
//             />
//           </IconButton>
//         </Box>

//         <Box
//           style={{
//             position: "fixed",
//             bottom: 20,
//             left: 20,
//             background: "ghostwhite",
//             borderRadius: "50%",
//             display: "flex",
//           }}
//         >
//           <IconButton
//             color="success"
//             onClick={() =>
//               (window.location.href = "/adminpanel")
//             }
//           >
//             <MdArrowBack
//               size="90"
//               color="crimson"
//             />
//           </IconButton>
//         </Box>
//       </Box>
//     </Container>
//   );
// };

// export default ListCategories;

