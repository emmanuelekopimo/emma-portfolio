import Link from "next/link";
import { DarkModeToggle } from "./dark-mode-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link
          href="/"
          className="font-display font-semibold text-lg text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
        >
          Emma
        </Link>
        <DarkModeToggle />
      </div>
    </header>
  );
}
