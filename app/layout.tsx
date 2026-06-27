import "./globals.css";

export const metadata = {
  title: "Ordem Lupina",
  description: "Honra • Lealdade • Disciplina"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}