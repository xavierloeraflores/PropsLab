import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { ThemeProvider } from "~/components/theme-provider";
import { Header } from "~/components/header";
import { Footer } from "~/components/footer";
import { env } from "~/env";

export const metadata: Metadata = {
  title: "Props Lab",
  description: "Bet Smarter, Not Harder",
  icons: [{ rel: "icon", url: "/favicons/favicon.ico" }],
  openGraph: {
    title: "Props Lab",
    description:
      "Bet Smarter, Not Harder | We are a  sports enthusiasts who use cutting-edge technology to provide insights into the world of sports betting.",
    images: [
      {
        url: `https://propslab.io/static/images/banner/banner_1.png`,
      },
    ],
  },
  manifest: `https://propslab.io/favicons/manifest.json`,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="flex min-h-screen flex-col justify-between">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Header />
          <main className="mt-16 flex flex-col items-center justify-center sm:mt-24">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
