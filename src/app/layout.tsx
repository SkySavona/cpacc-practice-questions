import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Configure fonts with display strategy for better performance
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Use 'swap' to ensure text remains visible during font loading
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// Update metadata to reflect your application
export const metadata: Metadata = {
  title: "CPACC Practice Questions",
  description: "Test your knowledge of accessibility concepts for CPACC certification",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#4F46E5", // Indigo color matching your UI theme
  openGraph: {
    title: "CPACC Practice Questions",
    description: "Test your knowledge of accessibility concepts for CPACC certification",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-950 text-white min-h-screen`}
      >
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">{children}</main>
          <footer className="text-center p-4 text-sm text-gray-500">
            CPACC Practice Questions © {new Date().getFullYear()} | Created by students for educational purposes | 
            Not affiliated with IAAP or any certification body
          </footer>
        </div>
      </body>
    </html>
  );
}