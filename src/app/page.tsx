import Image from "next/image";
import Link from "next/link";
import ProjectCard from './components/ProjectCard'

const projects = [
  {
    title: "Game Project 1",
    description: "A brief description of your first game project. Highlight the key features and your role in development.",
    imageUrl: "/project1.webp",
    technologies: ["Unity", "C#", "Game Design"],
    projectUrl: "https://example.com/project1"
  },
  {
    title: "Game Project 2",
    description: "Description of your second game project. Focus on the technical challenges and solutions.",
    imageUrl: "/project2.webp",
    technologies: ["Unity", "C#", "3D Graphics"],
    projectUrl: "https://example.com/project2"
  },
  {
    title: "Game Project 3",
    description: "Overview of your third game project. Emphasize the unique aspects and innovations.",
    imageUrl: "/project3.webp",
    technologies: ["Unity", "C#", "AI"],
    projectUrl: "https://example.com/project3"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Speaf
            </h1>
            <h2 className="text-3xl md:text-4xl text-gray-300">
              Independent Game Developer
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl">
              Crafting immersive gaming experiences through innovative design and technical excellence.
            </p>
            <div className="flex gap-4">
              <Link 
                href="#projects" 
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
              >
                View Projects
              </Link>
              <Link 
                href="#contact" 
                className="px-6 py-3 border border-purple-600 hover:bg-purple-600/20 rounded-lg transition-colors"
              >
                Contact Me
              </Link>
            </div>
          </div>
          <div className="flex-1 relative h-[400px] w-full">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl"></div>
            <Image
              src="/hero.webp"
              alt="Game Development"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
            />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold mb-12 text-center">Get in Touch</h2>
        <div className="max-w-2xl mx-auto">
          <p className="text-xl text-gray-400 text-center mb-8">
            Interested in working together? Let&apos;s create something amazing!
          </p>
          <div className="flex justify-center gap-6">
            <Link 
              href="mailto:your.email@example.com" 
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
            >
              Email Me
            </Link>
            <Link 
              href="https://linkedin.com/in/your-profile" 
              target="_blank"
              className="px-6 py-3 border border-purple-600 hover:bg-purple-600/20 rounded-lg transition-colors"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
