'use client';

import { ReactNode } from 'react';
import Image from 'next/image';
import Logo from './logo';
import styles from './index.module.css';

type MenuProps = {
  children: ReactNode;
};

export default function Menu({ children }: MenuProps) {
  return (
    <main className={`${styles.grid} w-full h-screen bg-red-100 dark:bg-grey-600`}>
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
        className="hidden md:block px-4 py-5 md:border-r md:border-grey-200 bg-white"
      >
        <Logo />

        <div className="mt-[54px]">
          <h3
            className="text-grey-300 tracking-[2.4px] font-bold text-xs uppercase"
          >
            All boards (3)
          </h3>

          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </aside>

      <div id={styles.content}>{children}</div>
    </main>
  );
}
