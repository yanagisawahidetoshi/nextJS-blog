import { useCallback, useState } from "react";

export const useForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return { title, content, setTitle, setContent };
};
