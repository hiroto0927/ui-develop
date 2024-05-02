import { memo } from "react";
import { tv } from "tailwind-variants";
import { TPropsTvTextDesign, tvBaseTextDesgin } from "./text-variants";

type TPropsBaseParagraph = {
  children: React.ReactNode;
} & TPropsTvParagraphTextDesign &
  TPropsTvTextDesign;

const tvParagraphTextDesign = tv({
  extend: tvBaseTextDesgin,
  defaultVariants: {
    text_size: "md",
  },
});

export type TPropsTvParagraphTextDesign = Exclude<
  Parameters<typeof tvParagraphTextDesign>[0],
  undefined
>;

const Paragraph = memo(function Paragraph(props: TPropsBaseParagraph) {
  return (
    <p className={tvParagraphTextDesign({ ...props })}>{props.children}</p>
  );
});

export default Paragraph;
