import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { IPost, mockPosts } from "../../models/posts";

type Props = {
  post: IPost;
};

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
  const props: Props = mockPosts.find(
    (post) => post.id === parseInt(params.id)
  );
  return { props: props };
};

export default Post;
