import Layout from "components/Layout";
import { IPost, mockPosts } from "models/posts";

import Head from "components/atoms/Head";
import Article from "components/atoms/Article";
import ArticleHeader from "components/atoms/ArticleHeader";
import Card from "components/atoms/Card";
import Container from "components/atoms/Container";
import Share from "components/atoms/Share";
import FormatDate from "components/atoms/FormatDate";
import FeaturedImage from "components/atoms/FeaturedImage";

interface Props {
  id: string;
  title: string;
  createdAt: string;
  highlightedBody: string;
  description: string;
  kv: { url: string; width: number; height: number };
}

const PagePost: React.FC<Props> = ({
  id,
  title,
  createdAt,
  highlightedBody,
  description,
  kv,
}) => {
  return (
    <Layout>
      <Head
        description={description}
        title={title}
        url={`posts/${id}`}
        image={kv?.url}
      />
      <section>
        <Container>
          <Card>
            <ArticleHeader>
              {kv && (
                <FeaturedImage
                  src={kv.url}
                  width={kv.width}
                  height={kv.height}
                />
              )}
              <h1>{title}</h1>
              <p>
                <FormatDate date={createdAt} />
              </p>
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

export default PagePost;
