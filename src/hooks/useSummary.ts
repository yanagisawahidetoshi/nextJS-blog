import { useCallback } from "react";

export const useSummary = () => {
  const removeHtmlTel = useCallback((data: string) => {
    return data.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, "");
  }, []);
};
