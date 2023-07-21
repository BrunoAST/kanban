'use client';

import Button from '@/lib/button';
import ToggleTheme from '@/lib/toggle-theme';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex gap-4">
        <Button label="+ Add New Column" variant='primary' />
        <Button label="+ Add New Column" variant='secondary' />
        <Button label="+ Add New Column" variant='destructive' />
      </div>
    </main>
  );
}
