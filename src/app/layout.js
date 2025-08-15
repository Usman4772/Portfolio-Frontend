import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Usman Ali | Full-Stack & Frontend Developer Portfolio",
  description:
    "Explore the portfolio of Usman Ali, a skilled Frontend and Full-Stack Developer specializing in Next.js, React, Node.js, and MongoDB. Showcasing innovative web applications, scalable solutions, and modern UI/UX design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Usman Ali | Full-Stack & Frontend Developer Portfolio</title>
        <meta
          name="description"
          content="Explore the portfolio of Usman Ali, a skilled Frontend and Full-Stack Developer specializing in Next.js, React, Node.js, and MongoDB. Showcasing innovative web applications, scalable solutions, and modern UI/UX design."
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
