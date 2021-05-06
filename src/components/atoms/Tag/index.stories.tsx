import Tag from "./";

export default {
  title: "components/atoms/Tag",
  component: Tag,
};

export const Basic = () => <Tag name="Next.js" />;
export const LineUpTwos = () => (
  <>
    <Tag name="Next.js" />
    <Tag name="Storybook" />
  </>
);
