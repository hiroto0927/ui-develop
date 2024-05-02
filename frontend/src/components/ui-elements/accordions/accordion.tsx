import { FaChevronUp } from "react-icons/fa";
import { tv } from "tailwind-variants";

const tvAccordionDesign = tv({
  slots: {
    button: "w-full flex items-center justify-between border-x border-t",
    arrow: "transition shrink-0",
    content: "transition-all overflow-hidden w-full border-x border-b-2",
    line: "block border-b-2 w-[95%] mx-auto",
  },
  variants: {
    framePadding: {
      sm: {
        button: "px-5 py-1",
      },
      md: {
        button: "px-10 py-2",
      },
    },
    isOpen: {
      true: {
        arrow: "rotate-180",
        content: "max-h-screen duration-500 ease-in-out",
      },
      false: {
        content: "max-h-0",
      },
    },
    rounded: {
      sm: {
        button: " rounded-ss-sm rounded-se-sm",
        content: "rounded-es-sm rounded-ee-sm",
      },
      md: {
        button: "rounded-ss-md rounded-se-md",
        content: "rounded-es-md rounded-ee-md",
      },
      lg: {
        button: "rounded-ss-lg rounded-se-lg",
        content: "rounded-es-lg rounded-ee-lg",
      },
    },
    color: {
      primary: {
        button: "hover:text-[#4a63fc] border-[#e2e0e0] text-[#454545] bg-white",
        content: "text-[#454545] border-[#e2e0e0] bg-white",
        line: "border-[#e2e0e0]",
      },
      secondary: {
        button: "border-[#e2e0e0] text-[#333333] bg-white",
        content: "text-[#333333] border-[#e2e0e0] bg-[#f5f5f5]",
        line: "border-[#e2e0e0]",
      },
    },
  },
  defaultVariants: {
    borderColor: "black",
    framePadding: "sm",
    isOpen: false,
    rounded: "sm",
    shadow: "md",
    color: "primary",
  },
});

type TPropsTvAccordion = Exclude<
  Parameters<typeof tvAccordionDesign>[0],
  undefined
>;

export type TPropsAccordion = {
  isOpen: boolean;
  onClickTitle?: React.MouseEventHandler<HTMLButtonElement>;
  renderTitle: React.ReactNode;
  children?: React.ReactNode;
} & TPropsTvAccordion;

export default function Accordion(props: TPropsAccordion) {
  const { arrow, content, button, line } = tvAccordionDesign({ ...props });

  return (
    <div>
      <button className={button()} onClick={props.onClickTitle}>
        {props.renderTitle}
        <FaChevronUp className={arrow()} />
      </button>
      <div className={content()}>
        <span className={line()}></span>
        {props.children}
      </div>
    </div>
  );
}
