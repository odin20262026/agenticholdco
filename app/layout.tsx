import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agentic Hold Co LLC",
  description: "Building the future of AI-powered services. iOS apps, agentic workflows, and intelligent automation.",
  openGraph: {
    title: "Agentic Hold Co LLC",
    description: "Building the future of AI-powered services.",
    url: "https://agenticholdco.com",
    siteName: "Agentic Hold Co",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
