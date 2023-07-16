import Dropdown from '../lib/dropdown';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    label: {
      control: 'text',
    },
    options: {
      control: 'object',
    },
    initialSelectedOption: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    id: 'status',
    label: 'Current Status',
    options: ['Todo', 'Doing', 'Done'],
    initialSelectedOption: 'Doing'
  },
};
