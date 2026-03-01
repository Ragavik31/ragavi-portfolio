import React from 'react'
import ThemeToggle from './ThemeToggle'

export default function Navbar(){
  return (
    <header>
      <div className="container" style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <div style={{fontWeight:700}}>Ragavi K</div>
        <div style={{display:'flex',gap:12,alignItems:'center'}}>
          <nav aria-label="Main Navigation">
            <a href="#about" style={{marginRight:12}}>About</a>
            <a href="#projects" style={{marginRight:12}}>Projects</a>
            <a href="#contact">Contact</a>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
