import React from 'react';
import styled from 'styled-components'

const StyledFileItem = styled.div`
  padding: 1rem 0;
  margin: .2rem;
  border: 1px #FFF solid;
`;

interface FileItemProps {
  name: string;
}

export default function FileItem({ name }: FileItemProps) {
  return <StyledFileItem>
    { name }
  </StyledFileItem>
}
