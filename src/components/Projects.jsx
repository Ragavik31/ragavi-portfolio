import React from 'react'

const placeholders = [1,2,3]

export default function Projects(){
  return (
    <section id="projects" className="section container">
      <h3>Projects</h3>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))',gap:16,marginTop:12}}>
        {placeholders.map(i=>(
          <article className="card" key={i} aria-labelledby={`proj-${i}`}>
            <h4 id={`proj-${i}`}>Project Title</h4>
            <p>Short summary. Tech: React.js, Flask, MySQL</p>
            <div style={{display:'flex',gap:8, marginTop:10}}>
              <button className="card" style={{padding:'6px 8px'}}>Add screenshot</button>
              <button className="card" style={{padding:'6px 8px'}}>Add repo</button>
            </div>
          </article>
        ))}
      </div>
      <p style={{marginTop:12,opacity:0.8}}>No screenshots yet — add project screenshots / repo links to replace placeholders.</p>
    </section>
  )
}
