import * as S from "./styles";
import Link from "next/link";

type Props = {
  href: string;
};

const Button: React.FC<Props> = ({ children, href }) => {
  return (
    <Link href={href}>
      <S.Button>{children}</S.Button>
    </Link>
  );
};

export default Button;
