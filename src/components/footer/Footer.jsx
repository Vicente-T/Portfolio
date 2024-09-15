import React from 'react';

import './footer-styles.css';

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer__container container'>
				<h1 className='footer__title'>Vicente</h1>

				<ul className='footer__list'>
					<li>
						<a href='#about' className='footer__link'>
							About
						</a>
					</li>
					<li>
						<a href='#skills' className='footer__link'>
							Skills
						</a>
					</li>
				</ul>
				<span className='footer__copy'>© 2022. All rights reserved</span>
			</div>
		</footer>
	);
};

export default Footer;
