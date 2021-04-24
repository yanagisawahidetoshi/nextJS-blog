import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { IPost, mockPosts } from "../../models/posts";

const Post: NextPage<IPost> = ({ title, content, createdAt }) => {
  return (
    <section>
      <h1>{title}</h1>
      <p>{content}</p>
      <p>{createdAt}</p>
    </section>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = mockPosts.map((post) => `/posts/${post.id}`);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.id) {
    return { notFound: true };
  }

  const id = params.id.toString();

  const post: IPost | undefined = mockPosts.find(
    (post) => post.id.toString() === id
  );

  if (post === undefined) {
    return { notFound: true };
  }

  return { props: post };
};

export default Post;
