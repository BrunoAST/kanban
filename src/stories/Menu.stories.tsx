import Menu from '@/lib/menu';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Menu> = {
  title: 'Components/Menu',
  component: Menu,
  tags: ['autodocs'],
  argTypes: {
    options: {
      controls: 'object'
    },
    classes: {
      controls: 'text'
    }
  },
};

export default meta;
type Story = StoryObj<typeof Menu>;

export const Default: Story = {
  args: {
    options: [
      {
        title: 'Edit Board',
        onClick: () => console.log('Edit clicked'),
        classes: 'text-grey-300'
      },
      {
        title: 'Delete Board',
        onClick: () => console.log('Delete clicked'),
        classes: 'text-red-200'
      }
    ]
  },
};
