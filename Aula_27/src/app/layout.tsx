import type { Metadata } from "next";
import Header from "./components/Header/Header";

export const metadata: Metadata = {
  title: "Meu primeiro projeto NEXT",
  description: "Meu primeiro projeto NEXT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Header />

        {children}
        
      </body>
    </html>
  );
}
