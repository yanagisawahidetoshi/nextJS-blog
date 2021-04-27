import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import Layout from "../../components/Layout";
import { IPost, mockPosts } from "../../models/posts";

import Article from "../../components/atoms/Article";
import ArticleHeader from "../../components/atoms/ArticleHeader";
import Button from "../../components/atoms/Button";
import Card from "../../components/atoms/Card";
import Container from "../../components/atoms/Container";
import FeaturedImage from "../../components/atoms/FeaturedImage";
import PageNav from "../../components/atoms/PageNav";
import Share from "../../components/atoms/Share";

const Post: NextPage<IPost> = ({ title, content, createdAt }) => {
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
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </Article>
          </Card>
        </Container>
      </section>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const key: any = {
    headers: { "X-API-KEY": process.env.API_KEY },
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
    headers: { "X-API-KEY": process.env.API_KEY },
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

  return { props: post };
};

export default Post;
