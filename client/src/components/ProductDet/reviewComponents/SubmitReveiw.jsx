import * as React from "react";
import { Fragment, useRef } from "react";
import { useDispatch } from "react-redux";
import { postReview } from '../../../Store/actions/reviews'

//BUTTONS --
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";

// acordion ---
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
//input ---
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
// start rate --
import Rating from "@mui/material/Rating";

import Swal from 'sweetalert2';

const SubmitReveiw = ({productid, getReviewsByProduct}) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false);
  // acordion --
  const [expanded, setExpanded] = React.useState("panel1");
  //rate stars -- 
  const [value, setValue] = React.useState(2);
  // input --
  // const [error, setErrors] = useState({})
  // const [input, setInput] = useState({
  //   description:"",
  // })
//creating a refernce for TextField Component
  const valueRef = useRef('')

  const sendValue = () => {
    return console.log(valueRef.current.value);
  }

//-------------HANDLERS --------------------------- 

  // const handleChanges = (e) => {
    // setInput(e.target.value)
      // ...input,
      // setInput(e.target.value)
      // [e.target.name] : e.target.value
    // )
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postReview(
      {
        description: valueRef.current.value,
        stars: value
      }
      , productid))
      Swal.fire({
        icon: 'success',
        text: 'Tu comentario ha sido publicado correctamente!',
        title: 'Publicación exitosa'
      })

      dispatch(getReviewsByProduct(productid))

  }

  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
  }));

  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255, 255, 255, .05)"
        : "rgba(0, 0, 0, .03)",
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(90deg)",
    },
    "& .MuiAccordionSummary-content": {
      marginLeft: theme.spacing(1),
    },
  }));

  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: "1px solid rgba(0, 0, 0, .125)",
  }));

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  // stars rate --

  return (
    <Fragment>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Dejar un comentario</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* stars rate ------------------------------------------ */}
          <form action="" onSubmit={e => handleSubmit(e)}>
          <Box
            sx={{
              "& > legend": { mt: 2 },
            }}
          >
            <Typography component="legend">
            ¿Qué tan buena fue el producto?
            </Typography>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
            
            {/* <Rating name="no-value" value={null} /> */}
          </Box>

          {/* input ------------------------------------------ */}
          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
            }}
          >
            <TextField fullWidth  
              inputRef={valueRef}
              // value={input.description} 
              // name='description'  
              label="Comment" 
              id="fullWidth" 
              // onChange={e => handleChanges(e)} 
            />
          </Box>
          {/* button submit review ------------------------- */}
          <Stack direction="row" spacing={2}>
            <Button 
             variant="contained"
             onClick={sendValue}
             type="submit"
             color="success"
            >
             Hecho
            </Button>
          </Stack>
          </form>
        </AccordionDetails>
      </Accordion>
    </Fragment>
  );
};

export default SubmitReveiw;

/* <Button color="secondary">Secondary</Button> 
<Button variant="outlined" color="error">
        X
      </Button>
      */
