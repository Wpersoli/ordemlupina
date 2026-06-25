
export const metadata = {
  title: 'Ordem Lupina',
  description: 'Honra, Lealdade e Disciplina'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body style={{margin:0,fontFamily:'Arial, sans-serif'}}>{children}</body>
    </html>
  );
}
