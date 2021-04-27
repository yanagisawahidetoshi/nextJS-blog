import React from "react";

import Wrapper from "./Wrapper";
import Button from "../Button";

type Props = {
  previousUrl: string;
  nextUrl: string;
  isFirst?: boolean;
  isLast?: boolean;
};

const Pagination: React.FC<Props> = ({
  previousUrl,
  nextUrl,
  isFirst = false,
  isLast = false,
}) => {
  return (
    <Wrapper>
      {!isFirst && <Button href={previousUrl}>&larr; Newer Posts</Button>}
      {!isLast && <Button href={nextUrl}>Older Posts &rarr;</Button>}
    </Wrapper>
  );
};

export default Pagination;
