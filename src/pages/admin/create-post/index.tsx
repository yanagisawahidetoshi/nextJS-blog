import { NextPage } from "next";
import * as S from "./styles";

const Index: NextPage = () => {
  return (
    <S.Form>
      <S.InputWrapper>
        <S.Label htmlFor="title">タイトル</S.Label>
        <S.InputText type="text" name="title" id="title" />
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label htmlFor="content">コンテンツ</S.Label>
        <S.TextArea name="content" id="content" rows={10} />
      </S.InputWrapper>
      <S.Button type="submit">登録</S.Button>
    </S.Form>
  );
};

export default Index;
