import Button from '../lib/button';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
    },
    size: {
      control: 'inline-radio',
      options: ['large', 'small']
    },
    variant: {
      control: 'inline-radio',
      options: ['primary', 'secondary', 'destructive']
    },
  },
  args: {
    label: '+ Add New Column',
    size: 'large',
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
  },
};
