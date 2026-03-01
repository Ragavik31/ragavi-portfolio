import React, {useState} from 'react'

export default function Contact(){
  const [state, setState] = useState({name:'',email:'',msg:''})

  const onSubmit = (e) => {
    e.preventDefault()
    // fallback: open mailto (good for first version)
    const subject = encodeURIComponent(`Portfolio contact from ${state.name}`)
    const body = encodeURIComponent(state.msg + '\n\n' + state.email)
    window.location.href = `mailto:ragavikrishnan31@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="section container">
      <h3>Contact</h3>
      <div className="card" style={{marginTop:12}}>
        <form onSubmit={onSubmit}>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8}}>
            <input required placeholder="Your name" value={state.name} onChange={e=>setState(s=>({...s,name:e.target.value}))}/>
            <input required placeholder="Your email" type="email" value={state.email} onChange={e=>setState(s=>({...s,email:e.target.value}))}/>
          </div>
          <textarea required placeholder="Message" style={{width:'100%',marginTop:8}} value={state.msg} onChange={e=>setState(s=>({...s,msg:e.target.value}))}/>
          <div style={{marginTop:8, display:'flex', gap:8}}>
            <button type="submit" className="card">Send</button>
            <a className="card" href="public/ragavi_resume.pdf" download>Download Resume</a>
          </div>
        </form>
      </div>
    </section>
  )
}
