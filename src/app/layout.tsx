import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "PropsLab",
  description: "Bet Smarter, Not Harder",
  icons: [{ rel: "icon", url: "/favicons/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <main className="flex min-h-screen flex-col items-center justify-center">
          {children}
        </main>
      </body>
    </html>
  );
}
