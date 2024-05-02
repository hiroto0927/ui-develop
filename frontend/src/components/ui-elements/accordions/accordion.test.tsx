import "@testing-library/jest-dom";
import Accordion from "./accordion";
import { fireEvent, render } from "@testing-library/react";
import { useState } from "react";

describe("Accordionコンポーネントのテスト", () => {
  test("Accordionコンポーネントが存在することを確認", () => {
    const { getByText } = render(
      <Accordion isOpen onClickTitle={jest.fn()} renderTitle="TITLE">
        <div>CONTENT</div>
      </Accordion>
    );

    const accordionTitle = getByText("TITLE");
    const accordionContent = getByText("CONTENT");

    expect(accordionTitle.textContent).toEqual("TITLE");
    expect(accordionContent.textContent).toEqual("CONTENT");
  });

  test("Accordionコンポーネントの開閉ができることを確認", () => {
    const { getByText } = render(<MockComponent />);

    const accordionContent = getByText("CONTENT");
    const accordionTitle = getByText("TITLE");

    // コンテンツが閉じていることを確認
    expect(accordionContent).toHaveClass(
      "transition-all overflow-hidden w-full max-h-0"
    );

    //　コンテンツが開いていることを確認
    fireEvent.click(accordionTitle);
    expect(accordionContent).toHaveClass(
      "transition-all overflow-hidden w-full max-h-screen duration-500 ease-in-out"
    );

    // コンテンツが閉じていることを確認
    fireEvent.click(accordionTitle);
    expect(accordionContent).toHaveClass(
      "transition-all overflow-hidden w-full max-h-0"
    );
  });
});

const MockComponent = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <Accordion
      isOpen={toggle}
      onClickTitle={() => setToggle(!toggle)}
      renderTitle="TITLE"
    >
      CONTENT
    </Accordion>
  );
};
