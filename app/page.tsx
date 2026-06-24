
'use client';
import {useState} from 'react';
export default function Page(){
const [show,setShow]=useState(true);
return <main>
{show && <div style={{position:'fixed',inset:0,background:'rgba(0,0,0,.85)',display:'grid',placeItems:'center',zIndex:99}}>
<div style={{background:'#111',padding:24,border:'1px solid #700'}}>
<h2>Entre para a Alcateia</h2>
<input placeholder='Nome' style={{display:'block',margin:'8px 0',padding:10}}/>
<input placeholder='Email' style={{display:'block',margin:'8px 0',padding:10}}/>
<button onClick={()=>setShow(false)}>Entrar</button>
</div></div>}
<section style={{padding:'80px 20px',textAlign:'center'}}>
<h1 style={{fontSize:'clamp(3rem,8vw,6rem)'}}>ORDEM LUPINA</h1>
<p>HONRA • LEALDADE • DISCIPLINA</p>
<p>Uma irmandade inspirada na força da alcateia e nos valores nórdicos.</p>
<a href='https://instagram.com' style={{color:'#ffcc00'}}>Instagram</a>
</section>
<section style={{padding:20,maxWidth:900,margin:'auto'}}>
<h2>Junte-se aos poucos que permanecem até o fim.</h2>
<p>Força mental. Resiliência. Evolução. Propósito. Honra.</p>
<form action='/api/contact' method='post'>
<input name='nome' placeholder='Nome' style={{width:'100%',padding:12,margin:'8px 0'}}/>
<input name='email' placeholder='Email' style={{width:'100%',padding:12,margin:'8px 0'}}/>
<textarea name='mensagem' placeholder='Mensagem' style={{width:'100%',padding:12,height:120}}/>
<button style={{padding:14,background:'#8b0000',color:'#fff'}}>Enviar</button>
</form>
</section>
</main>
}
