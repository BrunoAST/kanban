import Button from '@/lib/button';
import ToggleTheme from '@/lib/toggle-theme';
import Dropdown from '@/lib/dropdown';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex gap-4">
        <Button label="+ Add New Column" variant='primary' />
        <Button label="+ Add New Column" variant='secondary' />
        <Button label="+ Add New Column" variant='destructive' />
      </div>

      <div className="flex gap-4 h-40 w-1/2 bg-grey-500 items-center justify-center">
        <ToggleTheme />
      </div>

      <div className="bg-white dark:bg-grey-500 flex gap-4 h-40 w-1/2 items-center justify-center px-4">
        <Dropdown label="Current Status" options={['Todo', 'Doing', 'Done']} />
      </div>
    </main>
  );
}
