import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yuvraj Riyar | Data & Business Analytics",
  description: "Portfolio of Yuvraj Riyar, a UC Davis Applied Statistics graduate building analytics systems across sports, operations, and financial decision-making.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
