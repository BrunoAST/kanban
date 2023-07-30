'use client';

import { ReactNode } from 'react';
import Image from 'next/image';
import Logo from './logo';
import styles from './index.module.css';
import ToggleTheme from '@/lib/toggle-theme';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type MenuProps = {
  children: ReactNode;
};

const boards = Array.from({ length: 5 }).map((_, index) => ({
  name: index === 0 ? 'Platform Launch' : 'Road map',
  path: index === 0 ? '/' : `dashboard-${index}`
}));

export default function Menu({ children }: MenuProps) {
  const pathName = usePathname();

  return (
    <div className={`${styles.grid} w-full h-screen bg-red-100 dark:bg-grey-600`}>
      <nav
        id={styles.nav}
        className="p-4 bg-white items-center"
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
          <Image
            src="/icons/icon-chevron-down.svg"
            width="0"
            height="0"
            alt="Boards"
            className="w-3 h-2"
          />
        </div>

        <ul
          id={styles.actions}
          className="flex place-content-end"
        >
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </nav>

      <aside
        id={styles.side}
        className="hidden md:grid border-r border-grey-200 dark:border-grey-400 bg-white dark:bg-grey-500"
      >
        <Logo className="pl-4 pt-5" />

        <div className="mb-5 overflow-y-auto">
          <h3
            className="text-grey-300 tracking-[2.4px] pl-6 font-bold text-xs uppercase mb-5"
          >
            All boards ({boards.length})
          </h3>

          <ul>
            {boards.map((item, index) =>
              <li
                key={index}
                data-active={pathName === item.path}
                title={item.name}
                className="max-w-[240px] rounded-tr-[100px] rounded-br-[100px] font-bold text-grey-300
                  data-[active=true]:text-white data-[active=true]:bg-purple-200"
              >
                <Link href="#" className="pl-6 py-3.5 flex gap-3 items-center">
                  <Image
                    src={pathName === item.path ? '/icons/icon-board-active.svg' : '/icons/icon-board.svg'}
                    height="0"
                    width="0"
                    alt={item.name}
                    className="w-4 h-4"
                  />

                  {item.name}
                </Link>
              </li>
            )}
            <li>
              <Link href="#" className="pl-6 py-3.5 flex gap-3 items-center text-purple-200 font-bold">
                <Image
                  src="/icons/icon-board-purple.svg"
                  height="0"
                  width="0"
                  alt="Create New Board"
                  className="w-4 h-4"
                />
                + Create New Board
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-full flex justify-center">
          <ToggleTheme />
        </div>

        <div className="flex gap-2.5 items-center pl-6 py-3.5 mt-2 mb-8 cursor-pointer">
          <Image
            src="/icons/icon-hide-sidebar.svg"
            height="0"
            width="0"
            alt="Hide sidebar"
            className="w-[18px] h-4"
          />
          <span
            className="text-sm font-bold text-grey-300"
          >
            Hide Sidebar
          </span>
        </div>
      </aside>

      <main id={styles.content}>{children}</main>
    </div>
  );
}
