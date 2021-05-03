import { renderHook } from "@testing-library/react-hooks";
import { useSummary } from "../../hooks/useSummary";

describe("removeHtml", () => {
  it("HTMLが含まれている場合削除されるた内容が返されること", () => {
    const { result } = renderHook(() => useSummary());
    expect(
      result.current.removeHtml('<a href="https://google.com">ああああ</a>')
    ).toBe("ああああ");
  });

  it("HTMLが含まれていない場合そのまま返されること", () => {
    const { result } = renderHook(() => useSummary());
    expect(result.current.removeHtml("あいうえお")).toBe("あいうえお");
  });

  it("HTMLだけの場合そのまま空になること", () => {
    const { result } = renderHook(() => useSummary());
    expect(result.current.removeHtml('<im src="hoge.jpg" />')).toBe("");
  });

  it("空の場合そのまま返されること", () => {
    const { result } = renderHook(() => useSummary());
    expect(result.current.removeHtml("")).toBe("");
  });
});
