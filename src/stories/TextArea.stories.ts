import TextArea from '../lib/text-area';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TextArea> = {
  title: 'Components/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    placeholder: {
      control: 'text',
    },
    label: {
      control: 'text',
    }
  },
};

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  args: {
    placeholder: 'e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little.',
    id: 'description',
    label: 'Description'
  },
};
