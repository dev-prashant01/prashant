import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prashant — MERN Stack Developer",
  description: "Full-stack developer specializing in MongoDB, Express, React, and Node.js. Former mechanical engineer turned web developer.",
  keywords: ["MERN Stack", "React Developer", "Node.js", "Full Stack Developer", "Prashant"],
  authors: [{ name: "Prashant" }],
  openGraph: {
    title: "Prashant — MERN Stack Developer",
    description: "Building intuitive and impactful web experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#0a0a0a] text-[#e8e8e8] font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
