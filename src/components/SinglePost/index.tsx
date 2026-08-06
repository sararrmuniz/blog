import { notFound } from 'next/navigation';
import { findPostBySlugCached } from '@/lib/post/queries';
import { PostModel } from '@/models/post/post-model';

type SinglePostProps = {
  slug: string;
};

export async function SinglePost({ slug }: SinglePostProps) {
  const post: PostModel | undefined = await findPostBySlugCached(slug);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <p>{post.content}</p>
    </div>
  );
}
