import React, { useState } from "react";
import {
  addAttribute,
  handleAttributes,
  removeAttributes,
} from "../../helpers/EditProduct/handleAttributes";
import { MdOutlineRemoveCircle, MdAddCircle } from "react-icons/md";
import {
  Box,
  FormLabel,
  TextField,
  IconButton,
  List,
  ListItem,
} from "@mui/material";

const Attributes = ({ input, setInput }) => {
  const [attributes, setAttributes] = useState({});

  return (
    <Box sx={{ mt: 10 }}>
      <FormLabel>Product's Attributes</FormLabel>
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "40%",
            mr: 10,
          }}
        >
          <TextField
            variant="filled"
            label="Attribute"
            type="text"
            id="attribute-name"
            placeholder="Color"
            name="name"
            helperText=""
            inputProps={{ maxLength: 12}}
            onChange={(e) => handleAttributes(e, attributes, setAttributes)}
          />
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", width: "80%" }}>
          <TextField
            variant="filled"
            label="Value"
            type="text"
            placeholder="Blue"
            id="attribute-value"
            sx={{ width: "90%" }}
            inputProps={{ maxLength: 30}}
            helperText=""
            name="value"
            onChange={(e) => handleAttributes(e, attributes, setAttributes)}
          />

          <IconButton
            onClick={() => {
              addAttribute(attributes, input, setInput);
              document.querySelector("#attribute-name").value = "";
              document.querySelector("#attribute-value").value = "";
              document.querySelector("#attribute-name").focus();
            }}
          >
            <MdAddCircle size="40px" color="#3CB371" />
          </IconButton>
        </Box>
      </Box>

      {input.attributes[0] && (
        <List
          style={{
            fontSize: 11,
            listStyle: "none",
            maxHeight: "214px",
            width: "94%",
            overflowY: "scroll",
            marginTop: "10px",
            backgroundColor: "#E2E2E8",
            borderTopLeftRadius: "5px",
          }}
        >
          {input.attributes?.map((a, i) => (
            <ListItem
              style={{ fontSize: ".8rem" }}
              name={a.name}
              key={i}
              secondaryAction={
                <IconButton>
                  <MdOutlineRemoveCircle size="25" color="red" />
                </IconButton>
              }
              onClick={() => removeAttributes(input, setInput, a.name)}
            >
              {a.name} - {a.value}
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default Attributes;
