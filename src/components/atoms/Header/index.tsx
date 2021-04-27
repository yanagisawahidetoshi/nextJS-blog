import React from "react";

import Link from "next/link";

import Container from "../Container";
import HeaderImage from "../HeaderImage";
import Social from "../Social";
import H1 from "../H1";
import P from "./P";
import Anchor from "./Anchor";
import Wrapper from "./Wrapper";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <HeaderImage />
        <H1>
          <Link href="/">
            <Anchor>Hidetoshi Yanagisawa</Anchor>
          </Link>
        </H1>
        <P>Full-stack Web Developer</P>
        <Social
          website="https://afternoon-peak-11400.herokuapp.com/"
          github="https://github.com/yanagisawahidetoshi"
          twitter="https://twitter.com/ultrasevenstar1"
          linkedin="https://www.linkedin.com/in/hidetoshi-yanagisawa-a6063b132/"
        />
      </Wrapper>
    </Container>
  );
};

export default Header;
