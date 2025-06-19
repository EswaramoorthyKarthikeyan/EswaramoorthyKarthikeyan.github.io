import React from 'react';
import styles from './Footer.module.scss';

export default function Footer({ socialLinks }) {
	return (
		<footer className={styles.footer} role="contentinfo">
			<div className={styles.links} aria-label="Social links">
				{socialLinks.map((link, i) => (
					<span key={i}>
						<a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
							{link.svg}
						</a>
					</span>
				))}
			</div>
		</footer>
	);
}
