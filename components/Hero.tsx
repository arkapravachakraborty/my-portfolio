import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
    return (
        <section id="home" className="pt-32 pb-20 flex flex-col items-center justify-center min-h-screen bg-white text-slate-900">
            <div className="relative mb-4 rounded-full border border-slate-300 px-5 py-1 text-sm font-medium tracking-wide shadow-sm">
                Hello! <span className="text-red-500">//</span>
            </div>

            <h1 className="text-center text-5xl font-extrabold tracking-tight sm:text-7xl max-w-3xl leading-tight">
                I'm <span className="text-red-600">Arkaprava</span>,<br />
                Full-Stack Developer
            </h1>

            <div className="w-full mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-center relative max-w-6xl px-4">
                <div className="flex flex-col items-start space-y-3 max-w-xs text-center md:text-left mx-auto md:mx-0">
                    <span className="text-4xl text-red-600 font-serif leading-none">“</span>
                    <p className="text-sm font-medium leading-relaxed text-slate-600">
                        Building high-performance applications and clean, scalable backend architectures.
                    </p>
                </div>

                <div className="relative flex justify-center">
                    <div className="absolute bottom-0 h-72 w-72 rounded-t-full bg-red-100/70 -z-10 border-b border-red-200" />
                    <div className="relative h-80 w-64 overflow-hidden rounded-b-full bg-slate-200">
                        {/* Replace with your image in the public directory */}
                        <div className="w-full h-full flex items-center justify-center text-slate-400">Avatar Photo</div>
                    </div>
                </div>

                <div className="flex flex-col items-center md:items-end text-center md:text-right space-y-2">
                    <div className="flex gap-1 text-red-500">
                        {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                    </div>
                    <div className="text-4xl font-black text-slate-900 tracking-tight">M.Sc. CS '26</div>
                    <div className="text-xs uppercase tracking-widest text-slate-500 font-semibold">Core Specialization</div>
                </div>
            </div>

            <div className="mt-8 flex items-center justify-center gap-4 rounded-full border border-slate-200 bg-white/80 p-2 shadow-xl backdrop-blur-md">
                <Link href="#projects" className="rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-transform hover:scale-105">
                    Projects
                </Link>
                <Link href="#connect" className="rounded-full px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100">
                    Contact
                </Link>
            </div>
        </section>
    );
}