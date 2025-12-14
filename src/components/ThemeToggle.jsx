import React, {useEffect, useState} from 'react'

export default function ThemeToggle(){
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
  useEffect(()=> {
    document.documentElement.setAttribute('data-theme', theme==='dark' ? 'dark' : 'light')
    localStorage.setItem('theme', theme)
  },[theme])
  return (
    <button aria-label="Toggle theme" onClick={() => setTheme(prev => prev==='dark' ? 'light' : 'dark')}>
      {theme==='dark' ? '🌙' : '☀️'}
    </button>
  )
}
