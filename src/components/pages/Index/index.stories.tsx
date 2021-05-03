import PageIndex from "./";
import { mockPosts } from "models/posts";

export default {
  title: "components/pages/PageIndex",
  component: PageIndex,
};

export const Basic = () => <PageIndex posts={mockPosts} />;
