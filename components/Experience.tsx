import { ExperienceItem } from '@/types/portfolio';

const experienceList: ExperienceItem[] = [
    {
        role: "Software Engineering Intern",
        company: "Faceoff Technologies",
        duration: "July 2025 - December 2025",
        points: [
            "Engineered clean and scalable full-stack features.",
            "Optimized core logic workflows, maintaining efficient standards across development streams."
        ]
    }
];

export default function Experience() {
    return (
        <section id="experience" className="py-20 bg-slate-50 text-slate-900 px-4">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tight mb-10"><span className="text-red-600">03.</span> Experience</h2>
                <div className="space-y-12">
                    {experienceList.map((exp, idx) => (
                        <div key={idx} className="border-l-2 border-red-600 pl-6 ml-2">
                            <span className="text-sm font-semibold text-red-600 uppercase tracking-wider">{exp.duration}</span>
                            <h3 className="text-xl font-bold text-slate-900 mt-1">{exp.role}</h3>
                            <h4 className="text-base font-medium text-slate-500 mb-4">{exp.company}</h4>
                            <ul className="list-disc list-inside space-y-2 text-slate-600 text-sm">
                                {exp.points.map((pt, pIdx) => <li key={pIdx}>{pt}</li>)}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}