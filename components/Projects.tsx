import { ProjectItem } from '@/types/portfolio';

const projectsList: ProjectItem[] = [
    {
        title: "Chaiwinddev",
        description: "A lightweight, utility-first CSS-in-JS engine built for performance-critical architectures.",
        tags: ["TypeScript", "CSS-in-JS", "Performance"],
    },
    {
        title: "Kafka Real-time Tracker",
        description: "Real-time location tracking system using Node.js, Socket.io, Apache Kafka, and Leaflet mapping.",
        tags: ["Kafka", "Node.js", "Socket.io", "Leaflet"],
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-slate-50 text-slate-900 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tight mb-10"><span className="text-red-600">01.</span> Selected Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projectsList.map((project, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                            <p className="text-slate-600 text-sm mb-4 leading-relaxed">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md font-medium">{tag}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}