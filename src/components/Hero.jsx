import React from 'react'

export default function Hero(){
  return (
    <section className="hero container" id="home">
      <div className="left">
        <h1 style={{fontSize: 'clamp(28px, 5vw, 40px)', margin:0}}>Hi — I’m <span style={{color:'var(--primary)'}}>Ragavi K</span>.</h1>
        <p style={{marginTop:12, fontSize:18}}>Aspiring Software Developer building clean, scalable web apps.<br/>
        Full-stack enthusiast • React.js + Flask • DSA & DBMS</p>
        <div style={{marginTop:18, display:'flex', gap:12}}>
          <a className="card" href="public/ragavi_resume.pdf" download>Download Resume</a>
          <a className="card" href="#projects">See Projects</a>
        </div>
      </div>
      <div className="right card" aria-hidden="true">
        {/* Avatar placeholder SVG */}
        <img src="public/ragavi_Photo.jpg" alt="Avatar placeholder" style={{width:'100%',height:'100%',borderRadius:12}}/>
      </div>
    </section>
  )
}
