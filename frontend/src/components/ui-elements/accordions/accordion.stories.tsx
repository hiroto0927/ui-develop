import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Accordion from "./accordion";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "UI-Elements/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  argTypes: {
    framePadding: {
      options: ["sm", "md"],
      control: { type: "select" },
    },
    isOpen: {
      control: {
        type: "boolean",
      },
    },
    rounded: {
      options: ["sm", "md", "lg"],
      control: { type: "select" },
    },
    color: {
      options: ["primary", "secondary"],
      control: { type: "select" },
    },
  },
  args: { onClickTitle: fn() },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    renderTitle: "Title",
    onClickTitle: fn(),
    isOpen: false,
  },
  render: (args) => {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-[50%]">
          <Accordion {...args}>
            <div className="p-5">Content</div>
          </Accordion>
        </div>
      </div>
    );
  },
};

export const Secondary: Story = {
  args: {
    renderTitle: "Title",
    onClickTitle: fn(),
    isOpen: false,
    color: "secondary",
  },
  render: (args) => {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-[50%]">
          <Accordion {...args}>
            <div className="p-5">Content</div>
          </Accordion>
        </div>
      </div>
    );
  },
};
