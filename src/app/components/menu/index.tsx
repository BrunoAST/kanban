'use client';

import React, { ReactNode } from 'react';
import Logo from './logo';
import styles from './index.module.css';
import ToggleTheme from '@/lib/toggle-theme';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icons from '@/lib/icons';
import TopNav from './top-nav';

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
      <TopNav />
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
            {
              boards.map((item, index) =>
                <li
                  key={index}
                  data-active={pathName === item.path}
                  title={item.name}
                  className="max-w-[240px] rounded-tr-[100px] rounded-br-[100px] font-bold text-grey-300
                    data-[active=true]:text-white data-[active=true]:bg-purple-200 hover:bg-purple-125
                    data-[active=false]:dark:hover:bg-white hover:text-purple-200 group"
                >
                  <Link href="#" className="pl-6 py-3.5 flex gap-3 items-center">
                    <Icons
                      name="board"
                      classes="fill-grey-300 group-hover:fill-purple-200 group-data-[active=true]:fill-white"
                    />
                    {item.name}
                  </Link>
                </li>
              )
            }
            <li>
              <Link href="#" className="pl-6 py-3.5 flex gap-3 items-center text-purple-200 font-bold">
                <Icons name="board" classes="fill-purple-200" />
                + Create New Board
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-full flex justify-center">
          <ToggleTheme />
        </div>

        <div className="flex gap-2.5 items-center pl-6 py-3.5 mt-2 mb-8 cursor-pointer
          max-w-[270px] rounded-tr-[100px] rounded-br-[100px] hover:bg-purple-125 dark:hover:bg-white group"
        >
          <Icons name="hide" classes="fill-grey-300 group-hover:fill-purple-200" />
          <span
            className="text-sm font-bold text-grey-300 group-hover:text-purple-200"
          >
            Hide Sidebar
          </span>
        </div>
      </aside>

      <main id={styles.content}>{children}</main>
    </div>
  );
}
