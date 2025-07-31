import React from 'react'

export default function Footer() {
  return (
    <footer style={{textAlign:'center',padding:'2rem',background:'#15151a',color:'#aaa',marginTop:'2rem'}}>
      <span>© {new Date().getFullYear()} CyberX Devs. All rights reserved.</span>
    </footer>
  )
}
