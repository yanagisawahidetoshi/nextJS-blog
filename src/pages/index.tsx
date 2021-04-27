import { NextPage } from "next";
import Link from "next/link";
import Layout from "../components/Layout";
import styles from "../styles/index.module.css";
import { IPost, mockPosts } from "../models/posts";

const Index: NextPage<any> = ({ posts }) => {
  return (
    <Layout>
      <h1 className={styles.title}>BLOG</h1>
      <div>
        {posts.map((post: IPost) => {
          return (
            <Link href={`/posts/${post.id}`} key={post.id}>
              <a>
                <section>
                  <h2>{post.title}</h2>
                  <p className={styles.content}>
                    {post.content.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, "")}
                  </p>
                  <p>{post.createdAt}</p>
                </section>
              </a>
            </Link>
          );
        })}
      </div>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const key: any = {
    headers: { "X-API-KEY": process.env.API_KEY },
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
