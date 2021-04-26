import React from "react";
import Link from "next/link";

import Wrapper from "./Wrapper";
import imgSrc from "../../../../public/profile.png";

const HeaderImage = () => {
  return (
    <Wrapper>
      <Link href="/">
        <a>
          <img src={imgSrc} alt="" />
        </a>
      </Link>
    </Wrapper>
  );
};

export default HeaderImage;
