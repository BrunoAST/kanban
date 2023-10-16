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

  function taskButtonLabel(): string {
    if (platform !== 'mobile') {
      return '+ Add New Task';
    }
    return ' + ';
  }

  return (
    <nav
      id={styles.nav}
      className="p-4 bg-white dark:bg-grey-500 items-center"
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
          label={taskButtonLabel()}
          variant="primary"
          onClick={() => console.log('Add new task clicked')}
        />

        <Menu options={menuOptions} classes="left-[-160px] top-[60px]" />
      </div>
    </nav>
  );
}
