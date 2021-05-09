import { env } from "process";
import { useCallback, useState, FormEvent } from "react";

export const useForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const key = {
        headers: {
          "X-WRITE-API-KEY": process.env.NEXT_PUBLIC_WRITE_API_KEY ?? "",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          title,
          content,
          user: process.env.NEXT_PUBLIC_USER_ID,
        }),
      };
      await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}blog`, key)
        .then((res) => res)
        .catch((err) => console.log(err));
    },
    [title, content]
  );

  return { title, content, setTitle, setContent, handleSubmit };
};
