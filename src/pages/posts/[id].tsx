import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { IPost, mockPosts } from "../../models/posts";

const Post: NextPage<IPost> = ({ title, content, createdAt }) => {
  return (
    <section>
      <h1>{title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      />
      <p>{createdAt}</p>
    </section>
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

  return { props: post };
};

export default Post;
