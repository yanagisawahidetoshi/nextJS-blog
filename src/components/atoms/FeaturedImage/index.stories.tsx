import FeaturedImage from "./";

export default {
  title: "components/atoms/FeaturedImage",
  component: FeaturedImage,
};

export const Basic = () => (
  <FeaturedImage
    src="http://placehold.jp/150x150.png"
    alt="My CDN placeholder"
    width={100}
    height={100}
  />
);
