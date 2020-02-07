import React from 'react';
import styled from 'styled-components'

const StyledLoader = styled.div`
  border-radius: 24px;
  padding: 36px;
  text-align: center;
  background-color: #66D7D1;
  color: #FFF;
`;

export default function Loader() {
  return <StyledLoader>
    <p>
      Loading...
    </p>
  </StyledLoader>
}
