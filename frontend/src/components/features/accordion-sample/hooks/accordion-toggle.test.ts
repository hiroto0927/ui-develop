import { act, renderHook } from "@testing-library/react";
import useAccordionToggle from "./accordion-toggle";

describe("useAccordionToggleのテスト", () => {
  test("初期状態がfalseであることを確認", () => {
    const { result } = renderHook(useAccordionToggle);

    expect(result.current.toggle).toBe(false);
  });

  test("changeToggle関数が正常に動作することを確認", () => {
    const { result } = renderHook(useAccordionToggle);

    expect(result.current.toggle).toBe(false);

    act(() => {
      result.current.changeToggle();
    });

    expect(result.current.toggle).toBe(true);

    act(() => {
      result.current.changeToggle();
    });
    expect(result.current.toggle).toBe(false);
  });
});
