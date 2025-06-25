import React from 'react';
import styles from './Personal.module.scss';
import { useOnScreen } from '../../utils/useOnScreen';

export default function Personal() {
	const [ref, isVisible] = useOnScreen({ threshold: 0.7 });

	return (
		<section
			ref={ref}
			className={`${styles.personal} fade-in ${isVisible ? 'visible' : ''}`}
			aria-labelledby="work-summary-title"
		>
			<h1 className={styles.title} id="work-summary-title">
				Work Summary
			</h1>
			<span className={styles.designation}> Web Developer </span>
			<p className={styles.summary}>
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
				industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
				scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
				into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
				release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
				software like Aldus PageMaker including versions of Lorem Ipsum.
			</p>
		</section>
	);
}
