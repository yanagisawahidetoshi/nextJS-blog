import React from "react";
import Link from "next/link";

import FeaturedImage from "../FeaturedImage";
import H1 from "../H1";
import Content from "./Content";
import Wrapper from "./Wrapper";
import Anchor from "./Anchor";
import Date from "./Date";
import ContinueReading from "./ContinueReading";
import FormatDate from "../FormatDate";

type Props = {
  date: string;
  title: string;
  excerpt: string;
  slug: string;
  image?: {
    url: string;
    width: number;
    height: number;
  };
};

const Summary: React.FC<Props> = ({ date, title, excerpt, slug, image }) => {
  return (
    <Wrapper>
      {image && (
        <Link href={slug}>
          <Anchor>
            <FeaturedImage
              src={image.url}
              width={image.width}
              height={image.height}
            />
          </Anchor>
        </Link>
      )}
      <H1>
        <Link href={slug}>
          <Anchor>{title}</Anchor>
        </Link>
      </H1>
      <Date>
        <FormatDate date={date} />
      </Date>
      <Content>{excerpt}</Content>
      <Link href={slug}>
        <ContinueReading>Continue Reading &rarr;</ContinueReading>
      </Link>
    </Wrapper>
  );
};

export default Summary;
