import styled from "styled-components";
import GatsbyLink from "gatsby-link";

const Link = styled(GatsbyLink)`
  color: #3e465b;
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;

export default Link;
