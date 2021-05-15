import { NextPage } from "next";
import { ChangeEvent } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/client";
import { useForm } from "./useForm";
import * as S from "./styles";

const Index: NextPage = () => {
  const { setTitle, setContent, title, content, handleSubmit } = useForm();
  const [session] = useSession();
  const router = useRouter();

  if (!session) {
    router.push("/");
  }
  return (
    <S.Form onSubmit={handleSubmit}>
      <S.InputWrapper>
        <S.Label htmlFor="title">タイトル</S.Label>
        <S.InputText
          type="text"
          name="title"
          id="title"
          required
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setTitle(event.target.value);
          }}
          value={title}
        />
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label htmlFor="content">コンテンツ</S.Label>
        <S.TextArea
          name="content"
          id="content"
          rows={10}
          required
          onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
            setContent(event.target.value)
          }
          value={content}
        />
      </S.InputWrapper>
      <S.Button type="submit">登録</S.Button>
    </S.Form>
  );
};

export default Index;
