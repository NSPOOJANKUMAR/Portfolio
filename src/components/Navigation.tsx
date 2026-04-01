import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-bold text-2xl text-black dark:text-white">
            Portfolio
          </Link>
          <div className="flex gap-8">
            <Link href="#about" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition">
              About
            </Link>
            <Link href="#projects" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition">
              Projects
            </Link>
            <Link href="#skills" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition">
              Skills
            </Link>
            <Link href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
