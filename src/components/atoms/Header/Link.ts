import styled from "styled-components";
import GatsbyLink from "gatsby-link";

const Link = styled(GatsbyLink)`
  color: ${(props) => props.theme.colors.primary};
  text-decoration: none;
`;

export default Link;
