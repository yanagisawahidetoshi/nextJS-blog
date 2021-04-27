import styled from "styled-components";

const Anchor = styled.a`
  color: #3e465b;
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.colors?.primary};
  }
`;

export default Anchor;
