import { tv } from "tailwind-variants";

export const tvBaseTextDesgin = tv({
  base: "",
  variants: {
    text_size: {
      xxs: "sm:text-[0.625rem] sm:leading-[0.75rem] md:text-xs text-sm",
      xs: "sm:text-xs md:text-sm text-xs",
      sm: "sm:text-sm md:text-base lg:text-lg  text-sm",
      md: "sm:text-base md:text-lg lg:text-xl text-base",
      lg: "sm:text-lg md:text-xl lg:text-2xl text-lg",
      xl: "sm:text-xl md:text-2xl lg:text-3xl text-xl",
      "2xl": "sm:text-2xl md:text-3xl lg:text-4xl text-2xl",
      "3xl": "sm:text-3xl md:text-4xl lg:text-5xl text-3xl",
    },
    font_bold: {
      base: "font-normal",
      semi: "font-semibold",
      bold: "font-bold",
    },
    white_space: {
      normal: "whitespace-normal",
      nowrap: "whitespace-nowrap",
      pre: "whitespace-pre",
      pre_line: "whitespace-pre-line",
      pre_wrap: "whitespace-pre-wrap",
    },
    text_spacing: {
      normal: "tracking-normal",
      wider: "tracking-wider",
      widest: "tracking-widest",
      tight: "tracking-tight",
      tighter: "tracking-tighter",
    },
  },
  defaultVariants: {
    font_bold: "base",
  },
});

export type TPropsTvTextDesign = Exclude<
  Parameters<typeof tvBaseTextDesgin>[0],
  undefined
>;
