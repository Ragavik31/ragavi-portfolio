import React from 'react'

const skills = [
  'C', 'Java', 'Python', 'HTML', 'CSS', 'React.js', 'Flask', 'Node.js', 'MongoDB', 'MySQL', 'PostgreSQL'
]

export default function Skills(){
  return (
    <section className="section container">
      <h3>Skills</h3>
      <div style={{display:'flex',flexWrap:'wrap',gap:8,marginTop:12}}>
        {skills.map(s=> <span key={s} className="card" style={{padding:'6px 10px'}}>{s}</span>)}
      </div>
    </section>
  )
}
