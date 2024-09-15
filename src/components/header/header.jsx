import React, { useState } from "react";
import './header.css';
import '../../index.css';

const Header = () => {

	const[Toggle, showMenu] = useState(false);
    return (
			<header className='header'>
				<nav className='nav container'>
					<a href='index.html' className='nav__logo'>
						Vicente
					</a>

					<div className={Toggle ? 'nav__menu show-menu' : 'nav__menu'}>
						<ul className='nav__list'>
							<li className='nav__item'>
								<a href='#home' className='nav__link active-link'>
									<svg xmlns='http://www.w3.org/2000/svg' className='nav__icon' height='1.5em' width='1.5em' viewBox='0 0 576 512'>
										<path d='M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z' />
									</svg>
									Home
								</a>
							</li>
							<li className='nav__item'>
								<a href='#about' className='nav__link'>
									<svg xmlns='http://www.w3.org/2000/svg' className='nav__icon' height='1.5em' width='1.5em' viewBox='0 0 448 512'>
										<path d='M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z' />
									</svg>
									About
								</a>
							</li>
							<li className='nav__item'>
								<a href='#skills' className='nav__link'>
									<svg xmlns='http://www.w3.org/2000/svg' className='nav__icon' height='1.5em' width='1.5em' viewBox='0 0 384 512'>
										<path d='M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z' />
									</svg>
									Skills
								</a>
							</li>
							
						</ul>
						<svg xmlns='http://www.w3.org/2000/svg' className='nav__icon' height='1.5em' width='1.5em' viewBox='0 0 384 512' onClick={() => showMenu(!Toggle)}>
							<path d='M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z' />
						</svg>
					</div>
					<div className='nav__toggle' onClick={() => showMenu(!Toggle)}>
						<svg xmlns='http://www.w3.org/2000/svg' className='nav__icon' height='1.5em' width='1.5em' viewBox='0 0 496 512'>
							<path d='M248 167.5l64.9 98.8H183.1l64.9-98.8zM496 256c0 136.9-111.1 248-248 248S0 392.9 0 256 111.1 8 248 8s248 111.1 248 248zm-99.8 82.7L248 115.5 99.8 338.7h30.4l33.6-51.7h168.6l33.6 51.7h30.2z' />
						</svg>
					</div>
				</nav>
			</header>
		);
};

export default Header;