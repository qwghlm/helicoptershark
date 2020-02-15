import React from 'react';
import styled from 'styled-components'

import Div from "../elements/Div";
import P from '../elements/P';

const StyledDiv = styled(Div)`background-color: #66D7D1;`;

export default function Loader(props: {}): JSX.Element {
  return <StyledDiv>
    <P>
      Loading...
    </P>
    <P>
      <i className="fas fa-spinner fa-3x fa-spin"></i>
    </P>
  </StyledDiv>;
}
