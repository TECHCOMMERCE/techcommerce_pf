import React from "react";
import { Fragment } from "react";

import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

// import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";



const BtnFilterReview = () => {

  const [value, setValue] = React.useState(0);

  return (<Fragment>
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="ALL" icon={<AllInclusiveIcon />} />
        <BottomNavigationAction label="POSITIVES" icon={<FavoriteIcon />} />
        <BottomNavigationAction
          label="NEGATIVES"
          icon={<ThumbDownOffAltIcon />}
        />
      </BottomNavigation>
    </Box>
  </Fragment>);
};

export default BtnFilterReview;