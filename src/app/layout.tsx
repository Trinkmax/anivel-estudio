import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "A Nivel | Estudio de Arquitectura - Arq. Milagros Ribone",
  description:
    "Estudio de arquitectura de Milagros Ribone. Diseno residencial, comercial e interiorismo. Cada espacio, a nivel.",
  keywords: [
    "arquitectura",
    "estudio de arquitectura",
    "Milagros Ribone",
    "A Nivel",
    "diseno residencial",
    "interiorismo",
    "arquitectura comercial",
  ],
  openGraph: {
    title: "A Nivel | Estudio de Arquitectura",
    description:
      "Estudio de arquitectura de Milagros Ribone. Cada espacio, a nivel.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-anivel-black text-anivel-black font-sans">
        <div className="bg-white min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
