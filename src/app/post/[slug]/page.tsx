import { notFound } from 'next/navigation';
import { findPostBySlugCached } from '@/lib/post/queries';
import { PostModel } from '@/models/post/post-model';
import { Metadata } from 'next';
import { Suspense } from 'react';
import { SpinLoader } from '@/components/SpinLoader';
import { SinglePost } from '@/components/SinglePost';

export async function generateMetadata({ params }: PostSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await findPostBySlugCached(slug);

  return {
    title: post?.title || 'Post não encontrado',
    description: post?.excerpt || 'Post não encontrado',
  };
}

type PostSlugPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function PostSlugPage({ params }: PostSlugPageProps) {
  const { slug } = await params;

  const post: PostModel | undefined = await findPostBySlugCached(slug);

  if (!post) {
    notFound();
  }

  return (
    <Suspense fallback={<SpinLoader className='min-h-20 mb-16' />}>
      <SinglePost slug={slug} />
    </Suspense>
  );
}
