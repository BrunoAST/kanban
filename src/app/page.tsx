import Button from '@/lib/button';
import ToggleTheme from '@/lib/toggle-theme';
import Checkbox from '@/lib/checkbox';
import TextField from '@/lib/text-field';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-purple-200 text-5xl">Hello</h1>

      <div className="flex gap-4">
        <Button label="+ Add New Column" variant='primary' />
        <Button label="+ Add New Column" variant='secondary' />
        <Button label="+ Add New Column" variant='destructive' />
      </div>

      <div className="flex gap-4 h-40 w-1/2 bg-grey-500 items-center justify-center">
        <ToggleTheme />
      </div>

      <div className="bg-white dark:bg-grey-500 flex gap-4 h-40 w-1/2 items-center justify-center px-4">
        <Checkbox
          label="Talk to potential customers about our proposed solution and ask for fair price expectancy"
          checked
        />
      </div>

      <div className="bg-white dark:bg-grey-500 flex gap-4 h-40 w-1/2 items-center justify-center px-4">
        <TextField placeholder='Enter task name' />
      </div>
    </main>
  );
}
