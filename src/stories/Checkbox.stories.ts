import Checkbox from '../lib/checkbox';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Primary: Story = {
  args: {
    label: 'Talk to potential customers about our proposed solution and ask for fair price expectancy',
  },
};
