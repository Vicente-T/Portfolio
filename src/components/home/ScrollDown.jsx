import React from 'react';

export default function ScrollDown() {
	return (
		<div className='home__scroll'>
			<a href='#about' className='home__scroll-button button--flex'>
				<svg
					width='32px'
					height='32px'
					className='home__scroll-mouse'
					viewBox='0 0 247 390'
					version='1.1'
					xmlns='http://www.w3.org/2000/svg'
					xmlnsXlink='http://www.w3.org/1999/xlink'
					style={{
						fillRule: 'evenodd',
						clipRule: 'evenodd',
						strokeLinecap: 'round',
						strokeLinejoin: 'round',
						strokeMiterlimit: '1.5',
					}}
				>
					<path
						className='wheel'
						d='M123.359,79.775l0,72.843'
						style={{
							fill: 'none',
							stroke: 'var(--title-color)',
							strokeWidth: '20px',
						}}
					></path>
					<path
						id='mouse'
						d='M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z'
						style={{
							fill: 'none',
							stroke: 'var(--title-color)',
							strokeWidth: '20px',
						}}
					></path>
				</svg>
				<span className='home__scroll-name'>Scroll Down</span>
				<svg xmlns='http://www.w3.org/2000/svg' className='home__scroll-arrow' height='1em' width='1.5em'  viewBox='0 0 384 512'>
					<path d='M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z' />
				</svg>
			</a>
		</div>
	);
}
