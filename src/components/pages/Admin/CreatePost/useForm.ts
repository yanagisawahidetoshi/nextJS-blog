import { useCallback, useState, FormEvent } from "react";
import { useSession } from "next-auth/client";
import blogRepository from "repositories/blogRepository";

export const useForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [session] = useSession();

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const key = {
        body: JSON.stringify({
          title,
          content,
          user: session?.id,
        }),
      };
      blogRepository.create(key);
    },
    [title, content]
  );

  return { title, content, setTitle, setContent, handleSubmit };
};
