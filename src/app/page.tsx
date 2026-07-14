import { Suspense } from 'react';
import { PostsList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import { Header } from '@/components/Header';
import { Container } from '@/components/Container';
import Link from 'next/link';
import Image from 'next/image';
// page.tsx (server) -> menu.tsx (server) -> link (client)

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
        <Link href='#' className='w-full h-full overflow-hidden rounded-xl'>
          <Image
          className='group-hover:scale-105 transition-transform duration-300 ease-in-out'
            src='/images/bryen_0.png'
            width={1200}
            height={720}
            alt='Imagem do Blog'
          />
        </Link>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
          corporis, sapiente assumenda exercitationem ut ea eligendi quisquam
          ipsam porro corrupti tempore. Consequuntur dolor necessitatibus hic ex
          modi aliquid molestias quibusdam.
        </div>
      </section>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer>
        <p className='text-6xl font-bold text-center py-8'>Footer</p>
      </footer>
    </Container>
  );
}
