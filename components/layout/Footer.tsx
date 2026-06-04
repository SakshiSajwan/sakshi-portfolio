import { siteConfig } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/40 py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-zinc-600">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <p className="text-xs text-zinc-700">
          Built with Next.js · TypeScript · Tailwind CSS · Framer Motion
        </p>
      </div>
    </footer>
  );
}