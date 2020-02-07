import React from 'react';
import styled from 'styled-components'

const StyledForm = styled.div`
  border-radius: 24px;
  padding: 36px;
  text-align: center;
  background-color: #3D3A4B;
  color: #FFFFFF;
`;

export default function UploadForm({ onSubmit }) {
  return <StyledForm>
    <p>Detect misinformation in a few taps! Get started by uploading an image</p>

    <form action="">
      <div>
        <p>
          <input type="file" />
        </p>
      </div>

      <div>
        <p>
          <button type="button" onClick={(e) => onSubmit()}>Go</button>
        </p>
      </div>
    </form>
  </StyledForm>
}
