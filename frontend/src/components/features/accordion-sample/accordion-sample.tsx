"use client";
import Accordion from "@/components/ui-elements/accordions/accordion";
import H2 from "@/components/ui-elements/texts/h2";
import Paragraph from "@/components/ui-elements/texts/paragraph";
import { useState } from "react";

type TPropsAccordion = {
  title: string;
  userId: string;
  content: string;
  serialCode: string;
  serialNo: string;
  createdAt: string;
};

export default function F_Accordion(props: TPropsAccordion) {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <Accordion
      renderTitle={<F_AccordionTitle {...props} />}
      isOpen={toggle}
      onClickTitle={() => setToggle(!toggle)}
    >
      <div className="px-5 py-2">
        <div className="bg-[#f1efef] py-1 px-2 my-3 break-words whitespace-pre-wrap">
          <Paragraph text_size="md">{props.content}</Paragraph>
        </div>
        <div className="text-right">
          <Paragraph text_size="xs">ユーザーID : {props.userId}</Paragraph>
          <Paragraph text_size="xs">登録日時 : {props.createdAt}</Paragraph>
        </div>
      </div>
    </Accordion>
  );
}

const F_AccordionTitle = (props: {
  title: string;
  serialCode: string;
  serialNo: string;
}) => {
  return (
    <div className="text-left py-1 space-y-2">
      <H2
        text_size="sm"
        white_space="nowrap"
        className="truncate w-28 md:w-80 sm:w-56"
      >
        件名 : {props.title}
      </H2>
      <div className="flex items-center gap-5">
        <Paragraph text_size="xxs">コード : {props.serialCode}</Paragraph>
        <Paragraph text_size="xxs">シリアルNo : {props.serialNo}</Paragraph>
      </div>
    </div>
  );
};
