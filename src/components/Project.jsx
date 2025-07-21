import { Github,ExternalLink, ArrowRight } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Rentify",
        description: " The Rentify Portal is a web application, which provides an interface to buy or rent house online and also see the reviews and ratings of the house",
        image: "/projects/rentify.png",
        tags: ["React","Node","Express","MongoDB"],
        demoUrl: "#",
        githubUrl: "https://github.com/fenil321/Rentify-real-Estate-Website",
    },
    {
        id: 2,
        title: "Wifi Based Attendance Management System",
        description: "A mobile application for digital attendance using faculty-generated Wi-Fi hotspots",
        image: "/projects/AMS_Pic.jpg",
        tags: ["Kotlin", "Jetpack Compose", "Firebase"],
        demoUrl: "#",
        githubUrl: "https://github.com/rahulswain85/WifiAttendanceAppForSVMIT",
    },
    {
        id: 3,
        title: "MindBoard",
        description: "A full-stack collaborative note-taking application that allows users to create, view, and manage notes efficiently, with built-in rate limiting and a modern UI.",
        image: "/projects/mindboard.png",
        tags: ["React","Node","Express","MongoDB","Tailwind"],
        demoUrl: "#",
        githubUrl: "https://github.com/fenil321/mern-mindboard",
    },
]
const Project = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Featured <span className="text-primary">Projects</span>
            </h2>

            <p className="text-center text-muted-foreground mb-13 max-w-2xl mx-auto">
               
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project,key) => (
                    
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>

                        <div className="p-6">
                            
                        

                        <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                          <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span 
                                    className="px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        <div className="flex justify-between items-center">
                            <div className="flex space-x-3">
                                <a 
                                href={project.demoUrl}
                                target="_blank" 
                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                >
                                    {/* <ExternalLink size={20}/> */}
                                </a>
                                <a  
                                href={project.githubUrl}
                                target="_blank" 
                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                >
                                    <Github size={20}/>
                                </a>
                            </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a 
                href="https://github.com/fenil321" 
                target="_blank"
                className="cosmic-button w-fit flex items-center mx-auto gap-2">
                    Check My Github <ArrowRight size={16}/>
                </a>
            </div>
        </div>
    </section>
  )
}

export default Project