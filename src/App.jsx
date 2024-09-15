import React from 'react';
import './App.css';
import Header from './components/header/header';
import Home from './components/home/home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Footer from './components/footer/footer';


function App() {
	return (
		<>
			<Header />

			<main className='main'>
				<Home />
				<About />
				<Skills />
				<Footer />
				
			</main>
		</>
	);
}

export default App;
