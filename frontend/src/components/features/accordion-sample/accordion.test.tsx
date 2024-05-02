import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import F_Accordion from "./accordion-sample";
import useAccordionToggle from "./hooks/accordion-toggle";

jest.mock("./hooks/accordion-toggle");

describe("F_Accordionコンポーネントのテスト", () => {
  const mockChangeToggle = jest.fn();

  beforeEach(() => {
    (useAccordionToggle as jest.Mock).mockReturnValue({
      toggle: false,
      changeToggle: mockChangeToggle,
    });
  });

  test("F_Accordionコンポーネントに意図した内容がレンダリングされていることを確認", () => {
    const { queryByText } = render(<MockComponent />);

    const accordionTitle = queryByText("件名 : TITLE");
    const accordionContent = queryByText("CONTENT");
    const userId = queryByText("ユーザーID : userId");
    const serialCode = queryByText("コード : 12345");
    const serialNo = queryByText("シリアルNo : 12345");
    const createdAt = queryByText("登録日時 : createdAt");

    // 件名が正しく表示されていることを確認
    expect(accordionTitle).toBeInTheDocument();
    expect(accordionTitle?.textContent).toEqual("件名 : TITLE");

    // コンテンツが正しく表示されていることを確認
    expect(accordionContent).toBeInTheDocument();
    expect(accordionContent?.textContent).toEqual("CONTENT");

    // ユーザーIDが正しく表示されていることを確認
    expect(userId).toBeInTheDocument();
    expect(userId?.textContent).toEqual("ユーザーID : userId");

    // シリアルコードが正しく表示されていることを確認
    expect(serialCode).toBeInTheDocument();
    expect(serialCode?.textContent).toEqual("コード : 12345");

    // シリアルNoが正しく表示されていることを確認
    expect(serialNo).toBeInTheDocument();
    expect(serialNo?.textContent).toEqual("シリアルNo : 12345");

    // 登録日時が正しく表示されていることを確認
    expect(createdAt).toBeInTheDocument();
    expect(createdAt?.textContent).toEqual("登録日時 : createdAt");
  });

  // mockをクリアする
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("F_Accordionコンポーネントのボタンをクリックした際に、changeToggle関数が呼ばれていることを確認", () => {
    const { getByRole } = render(<MockComponent />);

    const accordionButton = getByRole("button");

    // ボタンをクリックした際に、changeToggle関数が呼ばれていることを確認
    fireEvent.click(accordionButton);
    expect(mockChangeToggle).toHaveBeenCalled();
  });
});

const MockComponent = () => {
  const mockProps = {
    title: "TITLE",
    userId: "userId",
    content: "CONTENT",
    serialCode: "12345",
    serialNo: "12345",
    createdAt: "createdAt",
  };
  return <F_Accordion {...mockProps} />;
};
