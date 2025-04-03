import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Project } from '@/types/project';
import { ArrowRight } from 'lucide-react';
import { Image } from 'astro:assets';

interface ProjectPreviewProps {
  project: Project;
  slug: string;
}

export default function ProjectPreview({ project, slug }: ProjectPreviewProps) {
  const {
    title,
    description,
    technologies = [],
    productType,
    cover,
    featured = false,
  } = project;

  console.log(cover);

  return (
    <Card
      key={slug}
      className="group bg-zinc-900 border-zinc-800 hover:border-zinc-700 transition-colors overflow-hidden"
    >
      <a href={`/projects/${slug}`} className="block">
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={cover.src}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            width={600}
            height={338}
          />
        </div>
        <div className="p-6 space-y-4">
          <div className="space-y-2">
            {featured && <Badge variant="tag">Featured</Badge>}
            <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
              {title}
            </h3>
          </div>
          <p className="text-zinc-400">{description}</p>
          <div className="flex flex-wrap gap-2 pt-2">
            <Badge variant="outline" className="rounded-lg">
              {productType}
            </Badge>
            {technologies.slice(0, 3).map((tech) => (
              <Badge key={tech} variant="tag" className="rounded-lg">
                {tech}
              </Badge>
            ))}
            {technologies.length > 3 && (
              <Badge variant="tag" className="rounded-lg">
                +{technologies.length - 3} more
              </Badge>
            )}
          </div>
          <div className="flex items-center justify-end">
            <span className="text-blue-400 group-hover:text-blue-300 transition-colors inline-flex items-center">
              View Project <ArrowRight className="ml-2 h-4 w-4" />
            </span>
          </div>
        </div>
      </a>
    </Card>
  );
}
