import React from 'react';
import styled from 'styled-components'
import Div from "../elements/Div";

const StyledDiv = styled(Div)`background-color: #66D7D1;`;

export default function Loader() {
  return <StyledDiv>
    <p>
      Loading...
    </p>
    <p>
      <i class="fas fa-spinner fa-3x fa-spin"></i>
    </p>
  </StyledDiv>
}
