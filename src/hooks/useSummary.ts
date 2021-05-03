import { useCallback } from "react";

export const useSummary = () => {
  const removeHtml = useCallback((data: string) => {
    return data.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, "");
  }, []);

  return { removeHtml };
};
