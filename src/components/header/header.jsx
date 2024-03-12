import React, { useState } from 'react';

import styles from './header.module.css';

import { getImageUrl } from '../../utils';

export const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	

	return (
		<nav className={styles.header}>
			<a className={styles.title} href='/'>
				Portfolio
			</a>
			<div className={styles.menu}>
				<img className={styles.imageb} src={menuOpen ? getImageUrl('header/closeIcon.png') : getImageUrl('header/menuIcon.png')} alt='menu-button' onClick={() => setMenuOpen(!menuOpen)} />
				<ul className={`${styles.grid} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
					<li>
						
					</li>
					<li>
						<a href='#about'>About</a>
					</li>
					<li>
						<a href='#experience'>Experience</a>
					</li>
					<li>
						<a href='#projects'>Projects</a>
					</li>
					<li>
						<a href='#about'>Contact</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};
