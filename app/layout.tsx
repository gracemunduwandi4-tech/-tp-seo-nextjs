import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tp-seo-nextjs-a55b.vercel.app"),
  title: "Formation informatique à Goma | Académie Numérique",
  description: "Découvrez des formations en développement web, réseaux et intelligence artificielle à Goma.",
  verification: { 
  google: "dJZiYxVyb60ng1x1wMqu5b7xPI1AyJq4Hq-igGUo7fs",
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Académie Numérique | Formation informatique à Goma",
    description: "Des compétences numériques pour apprendre et créer.",
    type: "website",
    locale: "fr_CD",
    siteName: "Académie Numérique",
    url: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
