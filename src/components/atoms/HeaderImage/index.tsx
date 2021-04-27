import React from "react";
import Link from "next/link";
import Wrapper from "./Wrapper";

const HeaderImage = () => {
  return (
    <Wrapper>
      <Link href="/">
        <a>
          <img src="/profile.png" alt="" />
        </a>
      </Link>
    </Wrapper>
  );
};

export default HeaderImage;
