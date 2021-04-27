import React from "react";
import Image from "next/image";

import Wrapper from "./Wrapper";

type Post = {
  src: string;
  width: number;
  height: number;
  alt?: string;
};

const FeaturedImage: React.FC<Post> = ({ src, width, height, alt = "" }) => {
  return (
    <Wrapper>
      <Image src={src} width={width} height={height} alt={alt} />
    </Wrapper>
  );
};

export default FeaturedImage;
