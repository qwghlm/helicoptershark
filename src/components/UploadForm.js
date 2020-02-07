import React from 'react';
import styled from 'styled-components'

import Div from "../elements/Div";
import Button from "../elements/Button";

const StyledDiv = styled(Div)`background-color: #3D3A4B;`;

const Header = styled.h1`
  font-size: 200%;
  font-family: "Varela Round", sans-serif;
`;

export default function UploadForm({ onSubmit }) {
  return <StyledDiv>

    <Header>Helicopter Shark</Header>

    <p>Detect misinformation in a few taps! Get started by uploading an image</p>

    <form action="">
      <div>
        <p>
          <input type="file" />
        </p>
      </div>

      <div>
        <p>
          <Button type="button" onClick={(e) => onSubmit()}>Go</Button>
        </p>
      </div>
    </form>
  </StyledDiv>
}
