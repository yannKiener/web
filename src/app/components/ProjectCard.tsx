import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  videoUrl?: string;
  technologies: string[];
  projectUrl?: string;
  isOngoing?: boolean;
}

const getYouTubeEmbedUrl = (url: string) => {
  // Handle different YouTube URL formats
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11
    ? `https://www.youtube.com/embed/${match[2]}`
    : null;
};

export default function ProjectCard({
  title,
  description,
  imageUrl,
  videoUrl,
  technologies,
  projectUrl,
  isOngoing = false,
}: ProjectCardProps) {
  const youtubeEmbedUrl = videoUrl ? getYouTubeEmbedUrl(videoUrl) : null;

  return (
    <div className={`bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-transform ${isOngoing ? 'h-full' : ''}`}>
      <div className={`relative ${isOngoing ? 'h-72' : 'h-48'}`}>
        {youtubeEmbedUrl ? (
          <iframe
            src={youtubeEmbedUrl}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={title}
          />
        ) : videoUrl ? (
          <video
            src={videoUrl}
            className="w-full h-full object-cover"
            controls
            muted
            loop
            playsInline
          />
        ) : (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
          />
        )}
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-gray-400 mb-6 text-lg">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        {projectUrl && !isOngoing && (
          <Link
            href={projectUrl}
            target="_blank"
            className="inline-block px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
          >
            View
          </Link>
        )}
      </div>
    </div>
  );
} 