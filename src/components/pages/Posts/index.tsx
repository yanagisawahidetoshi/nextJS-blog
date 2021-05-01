import Layout from "../../../components/Layout";
import { IPost, mockPosts } from "../../../models/posts";

import Article from "../../../components/atoms/Article";
import ArticleHeader from "../../../components/atoms/ArticleHeader";
import Card from "../../../components/atoms/Card";
import Container from "../../../components/atoms/Container";
import Share from "../../../components/atoms/Share";
import FormatDate from "../../atoms/FormatDate";

interface Props {
  title: string;
  createdAt: string;
  highlightedBody: string;
}

const PagePost: React.FC<Props> = ({ title, createdAt, highlightedBody }) => {
  return (
    <Layout>
      <section>
        <Container>
          <Card>
            <ArticleHeader>
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
