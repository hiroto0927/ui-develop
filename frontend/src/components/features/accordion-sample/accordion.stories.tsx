import type { Meta, StoryObj } from "@storybook/react";
import F_Accordion from "./accordion-sample";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "UI-Elements/F_Accordion",
  component: F_Accordion,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof F_Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    content: "Content",
    userId: "userId",
    serialCode: "12345",
    serialNo: "12345",
    createdAt: "createdAt",
    title: "Title",
  },
  render: (args) => {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-[50%]">
          <F_Accordion {...args} />
        </div>
      </div>
    );
  },
};
