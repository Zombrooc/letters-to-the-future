import localFont from "next/font/local";
import "./globals.css";

const interSans = localFont({
  src: "./fonts/Inter.ttf",
  variable: "--font-inter",
  weight: "100 900",
});

export const metadata = {
  title: "Letter to Future",
  description: "Create and save your own time capsule.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${interSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
