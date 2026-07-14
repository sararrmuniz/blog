import { Suspense } from 'react';
import { PostsList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import { Header } from '@/components/Header';
import { Container } from '@/components/Container';
// page.tsx (server) -> menu.tsx (server) -> link (client)

export default async function HomePage() {

  return (
    <Container>
      <Header />

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer>
        <p className='text-6xl font-bold text-center py-8'>Footer</p>
      </footer>
    </Container>
  );
}
