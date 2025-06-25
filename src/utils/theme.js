export const getInitialTheme = function () {
	const saved = localStorage.getItem('theme');
	if (saved) return saved;
	return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export const setTheme = function (theme) {
	document.documentElement.setAttribute('data-theme', theme);
	localStorage.setItem('theme', theme);
};
