import { notFound } from 'next/navigation';
import { findPostBySlugCached } from '@/lib/post/queries';
import type { PostModel } from '@/models/post/post-model';

type PostSlugPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function PostSlugPage({ params }: PostSlugPageProps) {
  const { slug } = await params;

  let post: PostModel | null = null;

  try {
    post = await findPostBySlugCached(slug);
  } catch {
    post = null;
  }

  if (!post) {
    notFound();
  }

  return (
    <div>
      <p>{post.content}</p>
    </div>
  );
}
