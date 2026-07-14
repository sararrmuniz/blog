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
            className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out'
            src='/images/bryen_0.png'
            width={1200}
            height={720}
            alt='Imagem do Blog'
            priority
          />
        </Link>
        <div className='flex flex-col justify-center'>

          <time dateTime='2023-06-01' className='text-sm/tight text-slate-600 mb-4 block'>
            1 de junho de 2023 10:00
          </time>

          <h1 className='text-2xl/tight font-extrabold mt-2 mb-4'>
            <Link href='#'>
              Título do Post
            </Link>
          </h1>

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
