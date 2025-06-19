import React from 'react';
import styles from './Experience.module.scss';

export default function Experience({ experience }) {
	return (
		<section className={styles.experience} aria-labelledby="experience-title">
			<h2 className={styles.title} id="experience-title">
				Experience
			</h2>
			<ul className={styles.list}>
				{experience.map((exp, i) => (
					<li className={styles.item} key={i}>
						<div className={styles.role}>
							<span className={styles.logo}>
								<img src={exp.logo} alt={exp.org} fetchpriority="high" />
							</span>
							<span className={styles.org}> {exp.org} </span>
						</div>
						<div className={styles.designation}>{exp.designation}</div>
						<div className={styles.timeline}>{exp.timeline}</div>
					</li>
				))}
			</ul>
		</section>
	);
}
