import { css } from "styled-components";

import React from "react";

const mobile = (props) => {
  return css`
    @media only screen and (max-width: 380px) {
      ${props}
    }
  `;
};

export default mobile;
