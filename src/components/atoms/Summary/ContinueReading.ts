import styled from "styled-components";
import GatsbyLink from "gatsby-link";

const ContinueReading = styled(GatsbyLink)`
  color: #666d71;
  display: inline-block;
  font-size: 14px;
  margin-top: 50px;
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;

export default ContinueReading;
