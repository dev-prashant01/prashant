export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="font-mono text-xs text-muted">
          © 2023 Prashant — MERN Stack Developer
        </span>
        {/* <span className="font-mono text-xs text-accent">
          // Built with Next.js + Tailwind + ❤️
        </span> */}
      </div>
    </footer>
  );
}
