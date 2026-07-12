import { Suspense } from 'react';
import { PostsList } from '@/components/PostsList';
import { postRepository } from '@/repositories/post';
import { SpinLoader } from '@/components/SpinLoader';
import clsx from 'clsx';
// page.tsx (server) -> menu.tsx (server) -> link (client)

export default async function HomePage() {

  const post = await postRepository.findAll();

  return (
    <div>
      <header>
        <h1 className='text-6xl font-bold text-center py-8'>Aqui é a HEADER</h1>
      </header>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer>
        <p className='text-6xl font-bold text-center py-8'>Footer</p>
      </footer>
    </div>
  );
}
