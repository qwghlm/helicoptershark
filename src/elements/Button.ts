import styled from 'styled-components'

const Button = styled.button`
  padding: 0.5rem;
  border-radius 0;
  border: 3px #FFF solid;
  background: transparent;
  color: #FFF;
  text-transform: uppercase;

  &[disabled] {
    opacity: 50%;
  }
`;
export default Button;
