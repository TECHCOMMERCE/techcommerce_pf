import React, { useEffect } from "react";
import { Fragment } from "react";
//redux
import { useSelector, useDispatch } from 'react-redux'

import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

// import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
//redux action/reducers
import { filterReviewByStatus } from '../../../Store/actions/reviews'

const BtnFilterReview = () => {

  const dispatch = useDispatch()

  const [value, setValue] = React.useState(0);

  useEffect( () => {
    dispatch()
  })


  return (<Fragment>
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction 
          value="All"
         label="ALL" 
         icon={<AllInclusiveIcon />} 
         />
        <BottomNavigationAction 
          value="Good" 
          label="POSITIVES" 
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          value="Bad"
          label="NEGATIVES"
          icon={<ThumbDownOffAltIcon />}
        />
      </BottomNavigation>
    </Box>
  </Fragment>);
};

export default BtnFilterReview;