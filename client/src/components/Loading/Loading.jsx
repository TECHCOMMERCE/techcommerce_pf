import { Box } from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <Box sx={{}}>
      <img
        src="../assets/imgs/loadingGIF.gif"
        alt="loading"
        height="50px"
        loading="lazy"
      />
      Loading...
    </Box>
  );
};

export default Loading;
