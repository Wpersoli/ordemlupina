
'use client';
import { useEffect, useState } from 'react';

export default function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2800);
    return () => clearTimeout(t);
  }, []);

  if (loading) {
    return (
      <main style={{height:'100vh',display:'grid',placeItems:'center',background:'#000',color:'#d4af37'}}>
        <div style={{textAlign:'center'}}>
          <h1 style={{fontSize:'clamp(2rem,8vw,5rem)',letterSpacing:'8px'}}>ORDEM LUPINA</h1>
          <p>HONRA • LEALDADE • DISCIPLINA</p>
        </div>
      </main>
    );
  }

  return (
    <main style={{minHeight:'100vh',background:'linear-gradient(#050505,#111)',color:'white'}}>
      <section style={{padding:'120px 20px',textAlign:'center'}}>
        <h1 style={{fontSize:'clamp(3rem,9vw,7rem)',marginBottom:10}}>ORDEM LUPINA</h1>
        <p style={{fontSize:'1.2rem',color:'#d4af37'}}>A alcateia dos que não recuam.</p>
      </section>

      <section style={{maxWidth:1100,margin:'auto',padding:'20px'}}>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:'20px'}}>
          {['Honra','Lealdade','Disciplina','Coragem'].map(item=>(
            <div key={item} style={{border:'1px solid #333',padding:'24px',borderRadius:'14px',background:'#111'}}>
              <h3>{item}</h3>
              <p>Princípio fundamental da Ordem Lupina.</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{maxWidth:900,margin:'60px auto',padding:'20px'}}>
        <h2>Junte-se à Alcateia</h2>
        <form action='/api/contact' method='post'>
          <input name='nome' placeholder='Nome' style={{width:'100%',padding:12,margin:'8px 0'}} />
          <input name='email' placeholder='Email' style={{width:'100%',padding:12,margin:'8px 0'}} />
          <textarea name='mensagem' placeholder='Por que deseja entrar?' style={{width:'100%',padding:12,height:120}} />
          <button style={{padding:14,background:'#8b0000',color:'#fff',border:'none'}}>Enviar</button>
        </form>
      </section>
    </main>
  );
}
