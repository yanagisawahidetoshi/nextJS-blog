import { NextPage } from "next";
import styles from "../styles/index.module.css";
import { IPost, mockPosts } from "../models/posts";

const Index: NextPage = () => {
  return (
    <>
      <h1 className={styles.title}>BLOG</h1>
      <div>
        {mockPosts.map((post: IPost) => {
          return (
            <section>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
              <p>{post.createdAt}</p>
            </section>
          );
        })}
      </div>
    </>
  );
};

export default Index;
