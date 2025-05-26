import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "My Travel Journel",
        description: "Hello",
        image: "../../src/assets/traveljournal_project.png",
        tags: ["React", "TailwindCSS", "Javascript"],
        demoUrl: "https://mytraveljournal-theta.vercel.app",
        githubUrl: "https://github.com/loiqw/mytraveljournal"
    },

    {
        id: 2,
        title: "Spotify Clone",
        description: "Halo",
        image: "../../src/assets/spotifyclone_project.png",
        tags: ["React", "TailwindCSS", "Javascript"],
        demoUrl: "https://music-eight-beryl.vercel.app/",
        githubUrl: "https://github.com/loiqw/music"
    },

    {
        id: 3,
        title: "Inventory Management",
        description: "Bonjour",
        image: "../../src/assets/inventorymanagement_project.png",
        tags: ["C Programing"],
        githubUrl: "https://github.com/loiqw/inventory_management"
    }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">

        <div className="container mx-auto max-w-5xl">

            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Featured <span className="text-primary"> Projects</span></h1>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of my recent projects. Each project was carefully
                crafted with attention to detail, performance, and user experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                {projects.map((project) => (
                    <div key={project.id} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">

                        <div className="h-48 overflow-hidden">
                            <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={project.image} alt={project.title}/>
                        </div>

                        <div className="p-6">

                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map(tag =>(
                                    <span key={tag} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">{tag}</span>
                                ))}
                            </div>

                        <h2 className="text-xl font-semibold mb-1"> {project.title}</h2>
                        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                        <div className="flex justify-between text-center">

                            <div className="flex space-x-3">
                                <a href={project.demoUrl} className="text-foreground/80 hover:text-primary transition-colors duration-300" target="_blank">
                                    <ExternalLink size={20}/></a>
                                <a href={project.githubUrl} className="text-foreground/80 hover:text-primary transition-colors duration-300" target="_blank">
                                    <Github size={20}/></a>
                            </div>

                        </div>

                        </div>

                    </div>
                ))}

            </div>

            <div className="text-center mt-12">
                <a className="cosmic-button w-fit flex items-center mx-auto gap-2" href="https://github.com/loiqw" target="_blank">Check My Github <ArrowRight size={16}/> </a>
            </div>
            
        </div>

    </section>
  )
}

export default Projects