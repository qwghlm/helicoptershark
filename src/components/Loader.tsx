import React from 'react';
import styled from 'styled-components'

import { LoaderProps } from "./types";
import Div from "../elements/Div";

const StyledDiv = styled(Div)`background-color: #66D7D1;`;

export default function Loader(props: LoaderProps) {
  return <StyledDiv>
    <p>
      Loading...
    </p>
    <p>
      <i className="fas fa-spinner fa-3x fa-spin"></i>
    </p>
  </StyledDiv>;
}
