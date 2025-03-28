'use client';
import Link from "next/link";
import ProjectCard from './components/ProjectCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/carousel.css";

const projects = [
  {
    title: "C.R.A.B.",
    description: "Fight as a modular crab machine against evil turtles, and reclaim the beach from their tyranny. Carcinization is on the way.",
    imageUrl: "/images/crab.png",
    technologies: ["Unreal Engine", "3rd person shooter", "Destructibles", "Game Jam"],
    projectUrl: "https://yannroirand.itch.io/crab-crustacean-rapid-action-battleforce"
  },
  {
    title: "Deviler",
    description: "Choose your car & drive as a futurist delivery guy around a puzzling city. Just don't always trust your guineapig copilot.",
    imageUrl: "/images/Deviler.png",
    technologies: ["Unreal Engine", "Driving", "Cyberpunk", "Game Jam"],
    projectUrl: "https://hyuponia.itch.io/deviler"
  },
  {
    title: "Rebels and invaders : Annihilation",
    description: "Inspired by the famous Space Invaders, protect your rebels allies from the alien invasion with lasers that go pew pew.",
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
  },
  {
    title: "Cat made me do it",
    description: "Your sadistic cat is bored, and you'll make him laugh with a gun. Or a car.",
    imageUrl: "/images/cat-made-me-do-it.png",
    technologies: ["Unreal Engine", "3rd person shooter", "Driving", "Game Jam"],
    projectUrl: "https://yannroirand.itch.io/cat-made-me-do-it"
  },
  {
    title: "Teldrassin",
    description: "A tiny open world where you play as a human-plant mutant to discover a lost world.",
    imageUrl: "/images/teldrassin.png",
    technologies: ["Unreal Engine", "Open-world", "Game Jam"],
    projectUrl: "https://leodar.itch.io/teldrassin"
  },
  {
    title: "Quantum Playground",
    description: "An arcade game about breaking bricks as fast as possible by manipulating directions as a physical ball or a quantum wave.",
    imageUrl: "/images/quantumplayground.png",
    technologies: ["Unity", "Arcade", "Game Jam"],
    projectUrl: "https://speaf.itch.io/quantumplayground"
  }
];

const ongoingProjects = [
  {
    title: "Project H",
    description: "A dungeon crawler about living the experience of a healer, supporting with a clunky group with a top-down view. Hopefully some day on steam",
    imageUrl: "/images/project-h.png",
    videoUrl: "https://youtu.be/lr76TPSGq1A", 
    technologies: ["Unity", "Dungeon crawler", "Healing"],
    projectUrl: "#"
  },
  {
    title: "Sky Pirates",
    description: "Steampunk universe + Pirate ships : Conquer caribbean islands with air superiority. Hopefully some day on Android and maybe iOS",
    imageUrl: "/images/skypirates.png",
    videoUrl: "https://www.youtube.com/watch?v=bq_5gRVimWg", 
    technologies: ["Unity", "Mobile", "Pirates"],
    projectUrl: "#"
  }
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
      <section className="container mx-auto px-4 py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-500 to-violet-600">
            Speaf
          </h1>
          <h2 className="text-3xl md:text-4xl text-gray-300">
            Independent Game Developer
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Crafting gaming experiences with love. No ads, no paywalls, just games made with passion and creativity.
          </p>
        </div>
      </section>

      {/* Ongoing Projects Section */}
      <section id="ongoing" className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Upcoming</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ongoingProjects.map((project, index) => (
            <div key={index}>
              <ProjectCard {...project} isOngoing={true} />
            </div>
          ))}
        </div>
      </section>

      {/* Previous Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Portfolio</h2>
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
            Have some feedback or interested in working together? 
          </p>
          <div className="flex justify-center gap-6">
            <Link 
              href="mailto:contact.speaf@gmail.com" 
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
            >
              Email Me
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

