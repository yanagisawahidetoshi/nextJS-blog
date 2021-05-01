import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { IPost } from "../../models/posts";
import cheerio from "cheerio";
import hljs from "highlight.js";
import "highlight.js/styles/night-owl.css";

import PagePost from "../../components/pages/Posts";

interface Props extends IPost {
  highlightedBody: string;
}

const Post: NextPage<Props> = ({
  id,
  title,
  createdAt,
  description,
  kv,
  highlightedBody,
}) => {
  return (
    <PagePost
      id={id}
      title={title}
      createdAt={createdAt}
      highlightedBody={highlightedBody}
      description={description}
      kv={kv}
    />
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const key: any = {
    headers: { "X-API-KEY": process.env.API_KEY ?? "" },
  };
  const res: any = await fetch(
    `${process.env.API_BASE_URL}blog?fields=id&limit=30`,
    key
  )
    .then((res) => res)
    .catch((err) => console.log(err));
  const data = await res.json();

  const paths = data.contents.map((post: IPost) => `/posts/${post.id}`);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.id) {
    return { notFound: true };
  }

  const key: any = {
    headers: { "X-API-KEY": process.env.API_KEY ?? "" },
  };
  const res: any = await fetch(
    `${process.env.API_BASE_URL}blog/${params.id}`,
    key
  )
    .then((res) => res)
    .catch((err) => console.log(err));
  const post = await res.json();

  if (post === undefined) {
    return { notFound: true };
  }

  const $ = cheerio.load(post.content);
  $("pre code").each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass("hljs");
  });

  return { props: { ...post, highlightedBody: $.html() } };
};

export default Post;
