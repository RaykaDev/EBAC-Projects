import type { Metadata } from "next";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

export const metadata: Metadata = {
  title: "Horizonte Aberto",
  description:
    "Descubra destinos turísticos e explore informações sobre lugares incríveis ao redor do mundo.",
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
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
