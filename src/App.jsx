import { useState } from 'react'
import { Header } from './components/header/header'
import { Hero } from './components/hero/hero'
import { About} from './components/about/about'
import { Experience } from './components/Experience/experience'
import { Projects } from './components/Projects/Projects'
import { Contact } from './components/Contact/Contact'
import { createContext } from 'react'
import useLocalStorage from 'use-local-storage'

export const ThemeContext = createContext(null)


function App() {

	const [theme, setTheme] = useLocalStorage("night","night")

  const toggleTheme = () => {
    setTheme((curr)=> (curr == "night" ? "light" : "night"))
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className='App' id={theme}>
        <Header/>
        
        <Hero/>
        
        <About/>

        <Experience/>

        <Projects/>
        <div className='lightswitch'>
            <input className="check" type="checkbox" onChange={toggleTheme} checked={theme == "light"} />
            <label htmlFor="check">{theme === "light" ? "☀️Light mode" : "🌙Dark mode"}</label>
        </div>
        <Contact/>  
      </div>
    </ThemeContext.Provider>
  )
}

export default App
