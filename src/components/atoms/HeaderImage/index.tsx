import React from "react";
import Link from "next/link";
import Wrapper from "./Wrapper";
import Image from "next/image";

const HeaderImage = () => {
  return (
    <Wrapper>
      <Link href="/">
        <a>
          <Image
            src="/profile.png"
            width={135}
            height={150}
            alt="HidetoshiYanagisawaのプロフィール画像"
          />
        </a>
      </Link>
    </Wrapper>
  );
};

export default HeaderImage;
