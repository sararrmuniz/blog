import { SpinLoader } from '@/components/SpinLoader';
import clsx from 'clsx';
// page.tsx (server) -> menu.tsx (server) -> link (client)

export default async function HomePage() {
  console.log('HomePage');

  return (
    <div>
      <SpinLoader containerClasses={clsx('min-h-[500px]', 'bg-amber-500')} />
    </div>
  );
}
