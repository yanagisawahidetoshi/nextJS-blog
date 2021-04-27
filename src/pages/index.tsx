import { NextPage } from "next";
import Link from "next/link";
import Layout from "../components/Layout";
import Card from "../components/atoms/Card";
import Container from "../components/atoms/Container";
import Pagination from "../components/atoms/Pagination";
import Summary from "../components/atoms/Summary";
import styles from "../styles/index.module.css";
import { IPost, mockPosts } from "../models/posts";

const Index: NextPage<any> = ({ posts }) => {
  return (
    <Layout>
      <Container>
        {posts.map((post: IPost) => {
          return (
            <Card key={post.id}>
              <Summary
                date={post.createdAt}
                title={post.title}
                excerpt={post.content.replace(
                  /<("[^"]*"|'[^']*'|[^'">])*>/g,
                  ""
                )}
                slug={`./posts/${post.id}`}
              />
            </Card>
          );
        })}
      </Container>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const key = {
    headers: { "X-API-KEY": process.env.API_KEY ?? "" },
  };
  const res: any = await fetch(`${process.env.API_BASE_URL}blog`, key)
    .then((res) => res)
    .catch((err) => console.log(err));
  const data = await res.json();

  return {
    props: {
      posts: data.contents,
    },
  };
};

export default Index;
