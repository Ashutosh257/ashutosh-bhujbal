
import projects from "./projectsList"
import SectionHeader from "../SectionHeader"

const Projects = () => {
    return (
        <section className="py-20">
            <div className="">
                
                <SectionHeader title="Projects" />

                <div className="text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 p-8">
                    {projects.map(project => (
                        <div 
                            key={project.id} 
                            className="flex flex-col justify-between gap-6 py-8
                            bg-slate-200 rounded-lg 
                            shadow-md p-4 hover:shadow-lg 
                            transition duration-300 ease-in-out transform 
                            hover:-translate-y-1 hover:scale-110"
                            >

                            <h3 className="text-xl font-bold text-blue-600">
                                {project.title}
                            </h3>
                            
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                className="w-10/12 h-48 object-cover rounded-2xl m-auto cursor-pointer"
                                onClick={() => window.open(project.demo, "_blank")} 
                            />
                            
                            <p className="text-gray-600 ">
                                {project.description}
                            </p>

                            <div className="badges flex flex-wrap gap-1 justify-center">
                                {project.tags.map(tag => (
                                    <span 
                                        key={tag} 
                                        className="text-blue-600 border-2 border-blue-500 rounded-lg p-2 text-sm mr-2"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-around mt-2">
                                <a 
                                    href={project.demo} 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    className="text-blue-600 hover:underline"
                                >
                                    GitHub Code
                                </a>
                                
                                <a 
                                    href={project.demo} 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    className="text-blue-600 hover:underline"
                                >
                                    Live Demo
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
        </section>
    )
}

export default Projects