import { useEffect, useState } from 'react';

// Import icons as modules
import dayIcon from '../assets/weather-icons/day.svg';
import cloudyIcon from '../assets/weather-icons/cloudy.svg';
import rainyIcon from '../assets/weather-icons/rainy-6.svg';
import thunderIcon from '../assets/weather-icons/thunder.svg';
import snowyIcon from '../assets/weather-icons/snowy-6.svg';


// Map weather description keywords to open source SVG icons
const weatherIcons = {
	clear: dayIcon,
	sunny: dayIcon,
	cloud: cloudyIcon,
	rain: rainyIcon,
	thunder: thunderIcon,
	snow: snowyIcon,
	fog: cloudyIcon
};

const getWeatherIcon = (desc) => {
	if (!desc) return weatherIcons.clear;
	const d = desc.toLowerCase();
	if (d.includes('sun') || d.includes('clear')) return weatherIcons.sunny;
	if (d.includes('cloud')) return weatherIcons.cloud;
	if (d.includes('rain') || d.includes('shower') || d.includes('drizzle')) return weatherIcons.rain;
	if (d.includes('thunder')) return weatherIcons.thunder;
	if (d.includes('snow')) return weatherIcons.snow;
	if (d.includes('fog') || d.includes('mist') || d.includes('haze')) return weatherIcons.fog;
	return weatherIcons.cloud;
};

export function useWeather(location = 'auto:ip') {
	const [weather, setWeather] = useState({ temp: null, icon: null, desc: null });
	useEffect(() => {
		async function fetchWeather() {
			try {
				const res = await fetch(`https://wttr.in/chennai?format=j1`);
				const data = await res.json();
				const temp = data.current_condition?.[0]?.temp_C;
				const desc = data.current_condition?.[0]?.weatherDesc?.[0]?.value;
				const icon = getWeatherIcon(desc);
				setWeather({ temp, icon, desc });
			} catch {
				setWeather({ temp: null, icon: weatherIcons.cloud, desc: 'Unavailable' });
			}
		}
		fetchWeather();
		const interval = setInterval(fetchWeather, 10 * 60 * 1000); // update every 10 min
		return () => clearInterval(interval);
	}, [location]);
	return weather;
}
