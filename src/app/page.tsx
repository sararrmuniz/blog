import { Suspense } from 'react';
import { PostsList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import { Header } from '@/components/Header';
import { Container } from '@/components/Container';
import { PostHeading } from '@/components/PostHeading';
import { PostCoverImage } from '@/components/PostCoverImage';

// page.tsx (server) -> menu.tsx (server) -> link (client)

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>

        <PostCoverImage
          linkProps={{
            href: '/post/asdfasdf',
          }}
          imageProps={{
            width: 1200,
            height: 720,
            src: '/images/bryen_9.png',
            alt: 'Alt da imagem',
            priority: true,
          }}
        />
        
        <div className='flex flex-col justify-center'>
          <time
            dateTime='2023-06-01'
            className='text-sm/tight text-slate-600 mb-4 block'
          >
            1 de junho de 2023 10:00
          </time>

          <PostHeading as='h2' url='#'>
            Título do Post
          </PostHeading>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            asperiores in aliquam voluptate voluptas vitae maiores aspernatur
            ratione obcaecati fugit illum consequuntur nulla, libero dolores
            accusamus facere dolorem explicabo. Reiciendis.
          </p>
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
