import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://property.amli.group"),
  applicationName: "AMLI Property",
  title: "AMLI Property | Spaces made to last",
  description:
    "AMLI Property crafts community-centred living through considered design and quality builds — creating spaces that blend modern aesthetics with lasting functionality and long-term value.",
  openGraph: {
    title: "AMLI Property | Spaces made to last",
    description:
      "Community-centred living through considered design and quality builds — spaces made to last.",
    images: [
      {
        url: "/images/kl-skyline-hero.jpg",
        width: 1600,
        height: 900,
        alt: "Golden-hour Kuala Lumpur skyline"
      }
    ],
    type: "website"
  },
  icons: {
    icon: [
      {
        url: "/icon.svg",
        type: "image/svg+xml"
      }
    ],
    apple: "/apple-icon.png"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-MY">
      <body>{children}</body>
    </html>
  );
}
