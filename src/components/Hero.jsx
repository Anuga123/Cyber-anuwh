import React from 'react'

export default function Hero() {
  return (
    <section style={{
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
      padding:'5rem 2rem 3rem 2rem',
      background:'linear-gradient(90deg,#191970 30%,#101010 100%)',
      color:'#fff'
    }}>
      <h1 style={{fontSize:'3rem',fontWeight:900,marginBottom:'1rem',letterSpacing:'.02em'}}>
        Professional AI & Bot Solutions
      </h1>
      <p style={{fontSize:'1.3rem',maxWidth:600,textAlign:'center',lineHeight:1.5,marginBottom:'2.5rem'}}>
        CyberX Devs engineers next-gen automation, bots, and AI integrations for your success. Fast, secure, and scalable solutions tailored to your needs.
      </p>
      <a href="#services" style={{
        background:'#16f2b3',
        color:'#18181b',
        padding:'0.9rem 2.3rem',
        borderRadius:'2rem',
        fontWeight:700,
        fontSize:'1.1rem',
        textDecoration:'none',
        boxShadow:'0 2px 8px #16f2b370'
      }}>
        Explore Services
      </a>
    </section>
  )
      }
