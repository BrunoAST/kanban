import Icons from '../lib/icons';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Icons> = {
  title: 'Components/Icons',
  component: Icons,
  tags: ['autodocs'],
  argTypes: {
    classes: {
      control: 'text'
    },
    name: {
      control: 'select',
      options: ['board', 'hide', 'chevron-down', 'light', 'dark', 'menu', 'plus']
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icons>;

export const Default: Story = {
  args: {
    classes: 'fill-purple-200',
    name: 'board'
  },
};
