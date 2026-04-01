import Link from "next/link";

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="font-light text-2xl text-white hover:text-gray-300 transition">
            POOJAN
          </Link>
          <div className="flex gap-12">
            <Link href="#work" className="text-sm text-gray-400 hover:text-white transition uppercase tracking-widest font-light">
              Work
            </Link>
            <Link href="#about" className="text-sm text-gray-400 hover:text-white transition uppercase tracking-widest font-light">
              About
            </Link>
            <Link href="#gallery" className="text-sm text-gray-400 hover:text-white transition uppercase tracking-widest font-light">
              Visual Vault
            </Link>
            <Link href="#contact" className="text-sm text-gray-400 hover:text-white transition uppercase tracking-widest font-light">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
