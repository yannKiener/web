'use client';
import Image from "next/image";
import Link from "next/link";
import ProjectCard from './components/ProjectCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/carousel.css";

const projects = [
  {
    title: "C.R.A.B.",
    description: "Fight as a modular crab machine against evil turtles, and reclaim the beach from their tyranny.",
    imageUrl: "/images/crab.png",
    technologies: ["Unreal Engine", "3rd person shooter", "Destructibles"],
    projectUrl: "https://yannroirand.itch.io/crab-crustacean-rapid-action-battleforce"
  },
  {
    title: "Deviler",
    description: "Drive as a futurist delivery guy around a puzzling city. Just don't always trust your guineapig copilot.",
    imageUrl: "/images/Deviler.png",
    technologies: ["Unreal Engine", "Driving", "Cyberpunk"],
    projectUrl: "https://hyuponia.itch.io/deviler"
  },
  {
    title: "Rebels and invaders : Annihilation",
    description: "Inspired by the famous Space Invaders, protect your allies from the alien invasion with lasers that go pew pew.",
    imageUrl: "/images/rebels-and-invaders.png",
    technologies: ["Unity", "3D", "Space shooter"],
    projectUrl: "https://speaf.itch.io/rebels-and-invaders-annihilation"
  },
  {
    title: "Murdaloc",
    description: "An RPG with procedural generation between points of interests. Very inspired by some famous MMO, but you play as a Murloc this time.",
    imageUrl: "/images/murdaloc.png",
    technologies: ["Unity", "Pixel art", "Procedural Generation"],
    projectUrl: "https://murdaloc.wordpress.com/"
  }
];

const ongoingProjects = [
  {
    title: "Project X",
    description: "An upcoming game project that combines strategy and action in a unique way.",
    imageUrl: "/images/project-x.png",
    technologies: ["Unity", "Strategy", "Action"],
    projectUrl: "#"
  },
  {
    title: "Project Y",
    description: "A new take on the roguelike genre with innovative mechanics.",
    imageUrl: "/images/project-y.png",
    technologies: ["Unreal Engine", "Roguelike", "Procedural Generation"],
    projectUrl: "#"
  }
];

const previousProjects = [
  // ... existing code ...
];

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

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
              Crafting gaming experiences with love. No ads, no paywalls, just pure fun.
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

      {/* Ongoing Projects Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Ongoing Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ongoingProjects.map((project, index) => (
            <div key={index}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </section>

      {/* Previous Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Previous Projects</h2>
        <div className="carousel-container">
          <Slider {...settings}>
            {projects.map((project, index) => (
              <div key={index} className="px-2">
                <ProjectCard {...project} />
              </div>
            ))}
          </Slider>
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
