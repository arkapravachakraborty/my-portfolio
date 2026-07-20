import Link from "next/link";

export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 mx-auto max-w-6xl px-4 pt-6">
            <nav className="flex items-center justify-between rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-slate-300 shadow-lg backdrop-blur-md bg-opacity-90">
                <Link href="#home" className="flex items-center gap-2 text-white font-bold text-lg">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-xs text-white">
                        AC
                    </span>
                    AC.dev
                </Link>
                <div className="hidden md:flex items-center gap-8">
                    {['Home', 'Projects', 'About', 'Experience', 'Connect'].map((item) => (
                        <Link key={item} href={`#${item.toLowerCase()}`} className="transition-colors hover:text-white">
                            {item}
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
    )
}