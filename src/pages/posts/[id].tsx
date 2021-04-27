import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import Layout from "../../components/Layout";
import { IPost, mockPosts } from "../../models/posts";
import cheerio from "cheerio";
import hljs from "highlight.js";
import "highlight.js/styles/night-owl.css";

import Article from "../../components/atoms/Article";
import ArticleHeader from "../../components/atoms/ArticleHeader";
import Button from "../../components/atoms/Button";
import Card from "../../components/atoms/Card";
import Container from "../../components/atoms/Container";
import FeaturedImage from "../../components/atoms/FeaturedImage";
import PageNav from "../../components/atoms/PageNav";
import Share from "../../components/atoms/Share";

interface Props extends IPost {
  highlightedBody: any;
}

const Post: NextPage<Props> = ({ title, createdAt, highlightedBody }) => {
  return (
    <Layout>
      <section>
        <Container>
          <Card>
            <ArticleHeader>
              <h1>{title}</h1>
              <p>{createdAt}</p>
              <span />
            </ArticleHeader>
            <Article>
              <div dangerouslySetInnerHTML={{ __html: highlightedBody }} />
            </Article>
          </Card>
        </Container>
      </section>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const key: any = {
    headers: { "X-API-KEY": process.env.API_KEY ?? "" },
  };
  const res: any = await fetch(`${process.env.API_BASE_URL}blog`, key)
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

  return { props: { post, highlightedBody: $.html() } };
};

export default Post;
