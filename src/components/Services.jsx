import React from 'react'

const services = [
  {
    title: "Custom AI Bots",
    desc: "We build intelligent bots for Discord, Telegram, Slack, and web platforms.",
  },
  {
    title: "Automation Solutions",
    desc: "Automate workflows, data scraping, and business processes securely.",
  },
  {
    title: "AI Chat & Integrations",
    desc: "Integrate ChatGPT, LLMs, and custom NLP into your products or support.",
  },
  {
    title: "Web & API Development",
    desc: "Modern, scalable web apps and robust APIs for your digital products.",
  }
]

export default function Services() {
  return (
    <section id="services" style={{padding:'4rem 2rem',background:'#18181b',color:'#fff'}}>
      <h2 style={{fontSize:'2.4rem',fontWeight:800,marginBottom:'2rem',textAlign:'center',color:'#16f2b3'}}>
        Our Services
      </h2>
      <div style={{
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'center',
        gap:'2rem'
      }}>
        {services.map(s => (
          <div key={s.title} style={{
            background:'#23232d',
            borderRadius:'1.2rem',
            boxShadow:'0 2px 12px #0002',
            padding:'2rem',
            width:300,
            minHeight:180
          }}>
            <h3 style={{color:'#16f2b3',marginBottom:'.7rem'}}>{s.title}</h3>
            <p style={{color:'#eaeaea'}}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
              }
