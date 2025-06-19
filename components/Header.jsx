import React from 'react';
import styles from './Header.module.scss';
import { useWeather } from '../utils/useWeather';

export default function Header({ profileImg, theme, setTheme, themeIcon, time }) {
	const weather = useWeather();
	return (
		<header className={styles.header} role="banner">
			<div className={styles.logoWrapper}>
				<div className={styles.logo}>
					<span>
						<img
							src={profileImg}
							alt="Eswaramoorthy Karthikeyan profile photo"
							title="karthik"
							role="img"
							aria-label="Profile photo of Eswaramoorthy Karthikeyan"
							fetchPriority="high"
						/>
					</span>
				</div>
				<span className={styles.text}> Eswaramoorthy karthikeyan </span>
			</div>
			<div className={styles.actionWrapper}>
				<div className={styles.actions} role="toolbar" aria-label="Header actions">
					<button
						type="button"
						aria-label="Toggle theme"
						className={styles.themeSwitch}
						aria-pressed={theme === 'dark'}
						onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
					>
						{themeIcon}
					</button>
					{weather.icon && (
						<span
							className={styles.weather}
							title={weather.desc}
							aria-label={`Current weather: ${weather.desc}`}
						>
							<img
								fetchPriority="high"
								src={weather.icon}
								alt={weather.desc || 'Weather'}
								width={24}
								height={24}
								style={{ verticalAlign: 'middle', animation: 'weather-bounce 1.2s infinite alternate' }}
							/>
							{weather.temp && (
								<span className={styles.temp} aria-label={`Current temperature: ${weather.temp}°C`}>
									{weather.temp}°C
								</span>
							)}
						</span>
					)}
				</div>
				<span className={styles.time} aria-live="polite" aria-label="Current time">
					{time}
				</span>
			</div>
		</header>
	);
}
