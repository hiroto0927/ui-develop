import { memo } from "react";
import { tv } from "tailwind-variants";
import { TPropsTvTextDesign, tvBaseTextDesgin } from "./text-variants";

type TPropsH1 = {
  children: React.ReactNode;
} & TPropsTvH1TextDesign &
  TPropsTvTextDesign;

const tvH1TextDesign = tv({
  extend: tvBaseTextDesgin,
  defaultVariants: {
    text_size: "3xl",
  },
});

export type TPropsTvH1TextDesign = Exclude<
  Parameters<typeof tvH1TextDesign>[0],
  undefined
>;

const H1 = memo(function H1(props: TPropsH1) {
  return <h1 className={tvH1TextDesign({ ...props })}>{props.children}</h1>;
});

export default H1;
