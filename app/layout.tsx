import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VPN Block Detector – Real-Time VPN Blocking Status by Country",
  description:
    "Detect VPN blocks by country in real time. Get working VPN recommendations and instant alerts when your VPN gets blocked."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          src="https://umami.microtool.dev/script.js"
          data-website-id="fcaf1d89-6bc5-4567-a444-194453ccfc80"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
