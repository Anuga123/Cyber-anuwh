import React from 'react'

export default function Header() {
  return (
    <header style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'1.5rem 3rem',borderBottom:'1px solid #eee',background:'#18181b'}}>
      <div style={{display:'flex',alignItems:'center'}}>
        <img src="/logo.svg" alt="CyberX Devs Logo" style={{height:40,marginRight:12}} />
        <span style={{color:'#16f2b3',fontWeight:700,fontSize:'1.7rem'}}>CyberX Devs</span>
      </div>
      <nav>
        <a href="#services" style={{color:'#fff',marginRight:'1.5rem',textDecoration:'none'}}>Services</a>
        <a href="#about" style={{color:'#fff',textDecoration:'none'}}>About</a>
      </nav>
    </header>
  )
}
