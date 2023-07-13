'use client';

import Button from '@/lib/button';

export default function Home() {
  function toggleTheme(): void {
    document.documentElement.classList.toggle('dark');
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 dark:bg-grey-600 bg-grey-100">
      <h1 className="text-purple-200 text-5xl">Hello</h1>

      <div className="flex gap-4">
        <Button label="+ Add New Column" variant='primary' onClick={toggleTheme} />
        <Button label="+ Add New Column" variant='secondary' onClick={toggleTheme} />
        <Button label="+ Add New Column" variant='destructive' onClick={toggleTheme} />
      </div>
    </main>
  );
}
