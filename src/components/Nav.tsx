import Link from "next/link";

export default function Nav() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-bold text-xl text-white hover:text-gray-300 transition">
            POOJAN
          </Link>
          <div className="flex gap-8">
            <Link href="/#work" className="text-sm text-gray-300 hover:text-white transition uppercase tracking-wide">
              Work
            </Link>
            <Link href="/#about" className="text-sm text-gray-300 hover:text-white transition uppercase tracking-wide">
              About
            </Link>
            <Link href="/#gallery" className="text-sm text-gray-300 hover:text-white transition uppercase tracking-wide">
              Visual Vault
            </Link>
            <Link href="/#contact" className="text-sm text-gray-300 hover:text-white transition uppercase tracking-wide">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
