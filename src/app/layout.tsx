import type { Metadata } from "next";
import styles from './ui/styles/globals.css';
import { outfit } from "./ui/fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} ${styles.className}`}>{children}</body>
    </html>
  );
}
