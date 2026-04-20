import { DarkModeToggle } from "@/components/dark-mode-toggle";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { IBM_Plex_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const bodyFont = IBM_Plex_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const displayFont = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export const metadata: Metadata = {
  title: "Emmanuel Akpan | Software Developer & Product Designer",
  description:
    "Product-minded engineer building focused tools with sharp UX and reliable systems. Full-stack development, AI/ML, and product design.",
  authors: { name: "Emmanuel Akpan", url: "https://emma.acadeva.xyz" },
  icons: {
    icon: "/images/Emmanuel.png",
  },
  metadataBase: new URL("https://emma.acadeva.xyz"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://emma.acadeva.xyz",
    siteName: "Emmanuel Akpan",
    title: "Emmanuel Akpan | Software Developer & Product Designer",
    description:
      "Product-minded engineer building focused tools with sharp UX and reliable systems. Full-stack development, AI/ML, and product design.",
    images: [
      {
        url: "/images/Emmanuel.png",
        width: 1200,
        height: 630,
        alt: "Emmanuel Akpan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@emmanuelekopimo",
    title: "Emmanuel Akpan | Software Developer & Product Designer",
    description:
      "Product-minded engineer building focused tools with sharp UX and reliable systems.",
    images: ["/images/Emmanuel.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${bodyFont.variable} ${displayFont.variable} antialiased`}
      >
        <ThemeProvider>
          <div className="flex justify-end p-6">
            <DarkModeToggle />
          </div>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
