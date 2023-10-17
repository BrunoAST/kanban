import Icons from '@/lib/icons';
import React from 'react';
import Logo from './logo';
import styles from './index.module.css';
import Button from '@/lib/button';
import Menu from '@/lib/menu';
import usePlatformDetector from '@/hooks/use-platform-detector';

const menuOptions = [
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
];

export default function TopNav(): JSX.Element {
  const platform = usePlatformDetector();

  function taskButtonLabel(): string | JSX.Element {
    if (platform !== 'mobile') {
      return '+ Add New Task';
    }
    return <Icons name="plus" />;
  }

  return (
    <nav
      id={styles.nav}
      className="px-4 bg-white dark:bg-grey-500 items-center"
    >
      <Logo
        id={styles.logo}
        className="md:hidden"
      />

      <div
        id={styles.board}
        className="md:hidden inline-flex items-center gap-2 ml-4 text-grey-700"
      >
        Platform Launch
        <Icons name="chevron-down" classes="stroke-purple-200" />
      </div>

      <div
        id={styles.actions}
        className="flex place-content-end items-center gap-2"
      >
        <Button
          variant="primary"
          onClick={() => console.log('Add new task clicked')}
          title="Add new task"
          className="flex items-center justify-center p-0 w-12 h-8 sm:py-3.5 sm:px-6 sm:w-auto"
        >
          {taskButtonLabel()}
        </Button>

        <Menu options={menuOptions} classes="left-[-160px] top-[60px]" />
      </div>
    </nav>
  );
}
