import { memo } from "react";
import { tv } from "tailwind-variants";
import { TPropsTvTextDesign, tvBaseTextDesgin } from "./text-variants";

type TPropsH2 = {
  children: React.ReactNode;
} & TPropsTvH2TextDesign &
  TPropsTvTextDesign;

const tvH2TextDesign = tv({
  extend: tvBaseTextDesgin,
  defaultVariants: {
    text_size: "2xl",
  },
});

export type TPropsTvH2TextDesign = Exclude<
  Parameters<typeof tvH2TextDesign>[0],
  undefined
>;

const H2 = memo(function H2(props: TPropsH2) {
  return <h2 className={tvH2TextDesign({ ...props })}>{props.children}</h2>;
});

export default H2;
