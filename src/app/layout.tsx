import type { Metadata } from "next";
import { Be_Vietnam_Pro, Source_Serif_4 } from "next/font/google";
import { AppShell } from "@/components/layout/AppShell";
import { SmoothScrollProvider } from "@/components/motion/Providers";
import { site } from "@/content/site";
import "./globals.css";

const body = Be_Vietnam_Pro({
  variable: "--font-body",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
});

const display = Source_Serif_4({
  variable: "--font-display",
  subsets: ["latin", "vietnamese"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://namtanuyen.com.vn"),
  title: {
    default: site.name,
    template: `%s | ${site.shortName}`,
  },
  description: `${site.name} là đơn vị thành viên của ${site.parent}.`,
  openGraph: {
    title: site.name,
    description: `${site.name} là đơn vị thành viên của ${site.parent}.`,
    locale: "vi_VN",
    type: "website",
    images: [{ url: site.logo }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${body.variable} ${display.variable} antialiased`}>
        <SmoothScrollProvider>
          <AppShell>{children}</AppShell>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
