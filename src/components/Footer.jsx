import React from 'react'

export default function Footer(){
  return (
    <footer className="section" style={{marginTop:24}}>
      <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <small>© {new Date().getFullYear()} Ragavi K — Built with React + Vite</small>
        <div style={{display:'flex',gap:8}}>
          <a href="https://github.com/Ragavik31" aria-label="GitHub">GitHub</a>
          <a href="https://linkedin.com/in/ragavi-krish/" aria-label="LinkedIn">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
