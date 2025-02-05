import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { Post } from '@/types/post';
import dayjs from 'dayjs';
import { ArrowRight } from 'lucide-react';

interface BlogPostPreviewProps {
  post: Post;
  slug: string;
}

export default function BlogPostPreview({ post, slug }: BlogPostPreviewProps) {
  const { title, description, tags = [], createdAt, featured = false } = post;
  return (
    <Card
      key={slug}
      className="group bg-zinc-900 border-zinc-800 hover:border-zinc-700 transition-colors overflow-hidden"
    >
      <a href={`/blog/${slug}`} className="block p-6 space-y-4">
        <div className="space-y-2">
          {featured && <Badge variant="tag">Featured</Badge>}
          <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
            {title}
          </h3>
        </div>
        <p className="text-zinc-400">{description}</p>
        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="tag" className="rounded-lg">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-zinc-500">
            {dayjs(createdAt).format('MMMM D, YYYY')}
          </span>
          <span className="text-blue-400 group-hover:text-blue-300 transition-colors inline-flex items-center">
            Read More <ArrowRight className="ml-2 h-4 w-4" />
          </span>
        </div>
      </a>
    </Card>
    // <Card className="group bg-zinc-900 border-zinc-800 hover:border-zinc-700 hover:cursor-pointer transition-colors">
    //   <a href={`/blog/${slug}`}>
    //     <div className="p-6 space-y-4">

    //       <h3 className="text-xl font-semibold text-white group-hover:text-blue-400">
    //         {title}
    //       </h3>
    //       <p className="text-zinc-400">{description}</p>
    //       <div className="flex flex-wrap gap-2">
    //         {tags.map((tag) => (
    //           <Badge
    //             key={tag}
    //             variant="secondary"
    //             className="bg-zinc-500 hover:bg-zinc-200 transition-colors"
    //           >
    //             {tag}
    //           </Badge>
    //         ))}
    //       </div>
    //       <div className="flex justify-between items-center">
    //         <span className="text-zinc-500">
    //           {dayjs(createdAt).format("MMMM D, YYYY")}
    //         </span>
    //       </div>
    //     </div>
    //   </a>
    // </Card>
  );
}
