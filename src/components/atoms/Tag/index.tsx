import * as S from "./styles";

type Props = {
  name: string;
};

const Tag: React.FC<Props> = ({ name }) => {
  return <S.Wrapper>{name}</S.Wrapper>;
};

export default Tag;
