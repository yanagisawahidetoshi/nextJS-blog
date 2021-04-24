import { NextPage } from "next";
import Link from "next/link";
import styles from "../styles/index.module.css";
import { IPost, mockPosts } from "../models/posts";

const Index: NextPage = () => {
  return (
    <>
      <h1 className={styles.title}>BLOG</h1>
      <div>
        {mockPosts.map((post: IPost) => {
          return (
            <Link href={`/posts/${post.id}`} key={post.id}>
              <a>
                <section>
                  <h2>{post.title}</h2>
                  <p>{post.content}</p>
                  <p>{post.createdAt}</p>
                </section>
              </a>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Index;
